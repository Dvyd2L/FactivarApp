import { Injectable, inject } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { UserService } from '../user.service';
import { IUserPayload } from '@app/interfaces/user';
import { OAUTH_CONFIG } from 'src/config/tokens/oauth-conection.token';
import { StorageHelper } from '@app/helpers/storage.helper';
import { StorageKeyEnum } from '@app/interfaces/enums/storage.enum';
import { OAuthProviderEnum } from '@app/interfaces/enums/oauth-providers.enum';
import { IGoogleProfile } from '@app/interfaces/google-profile';
import { RolesEnum } from '@app/interfaces/enums/roles.enum';

/**
 * Servicio para autenticación social.
 */
@Injectable({
  providedIn: 'root',
})
export class SocialAuthService {
  private config = inject(OAUTH_CONFIG);
  private oauth = inject(OAuthService);
  private userService = inject(UserService<IUserPayload>);

  public initProviderLogin(provider: OAuthProviderEnum):Promise<void> {
    return new Promise((resolve, reject) => {
      const config = this.config[provider];
      
      if (config) {
        resolve(this.initLogin(config));
      } else {
        reject(new Error('Configuración no encontrada'))
      }
    })
  }
  /**
   * Inicia el flujo de inicio de sesión.
   */
  public login() {
    this.oauth.initLoginFlow();
    StorageHelper.setItem(StorageKeyEnum.OAuth2, this.getIdToken());
    const user = this.getProfile() as IGoogleProfile;
    this.userService.updateUser({
      aud: user.aud,
      iss: user.iss,
      exp: user.exp,
      token: this.getIdToken(),
      Sid: crypto.randomUUID(),
      Email: user.email,
      Name: user.name,
      Role: RolesEnum.User,
      Surname: user.family_name,
      Thumbprint: user.picture,
    })
  }
  /**
   * Cierra la sesión actual.
   */
  public logout() {
    this.oauth.logOut();
    this.userService.clearUser();
    StorageHelper.removeItem(StorageKeyEnum.Token);
  }
  /**
   * Obtiene el perfil del usuario autenticado.
   * @returns El perfil del usuario.
   */
  public getProfile() {
    return this.oauth.getIdentityClaims();
  }
  /**
   * Obtiene el token de identificación del usuario autenticado.
   * @returns El token de identificación.
   */
  public getIdToken() {
    return this.oauth.getIdToken();
  }
  /**
   * Verifica si el usuario ha iniciado sesión.
   * @returns `true` si el usuario ha iniciado sesión, de lo contrario `false`.
   */
  public getIsLoggedIn() {
    return this.oauth.hasValidAccessToken();
  }
  /**
   * Inicializa la autenticación
   * @param {AuthConfig} config configuración de auntenticación del servicio OAuth
   */
  private initLogin(config: AuthConfig) {
    this.oauth.configure(config);
    this.oauth.setupAutomaticSilentRefresh();
    this.oauth
      .loadDiscoveryDocumentAndTryLogin()
      .then((res) => console.log(res)) //false, por que
      .catch((err) => console.error(err));
  }
}
