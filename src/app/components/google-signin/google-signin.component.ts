import { Component, EventEmitter, Output, inject } from '@angular/core';
import { OAuthProviderEnum } from '@app/interfaces/enums/oauth-providers.enum';
import { SocialAuthService } from '@app/services/auth/social-auth.service';

/**
 * Componente para iniciar sesión con Google.
 */
@Component({
  selector: 'app-google-signin',
  standalone: true,
  imports: [],
  templateUrl: './google-signin.component.html',
  styleUrl: './google-signin.component.css',
  providers: [SocialAuthService],
})
export class GoogleSigninComponent {
  private socialAuthService = inject(SocialAuthService);
  /**
   * Evento que se emite cuando se obtiene el token de identificación de Google.
   */
  @Output() idToken = new EventEmitter<string>();

  /**
   * Inicia sesión con Google.
   */
  public loginWithGoogle() {
    this.socialAuthService.initProviderLogin(OAuthProviderEnum.Google);
    this.socialAuthService.login();
    const googleIdToken = this.socialAuthService.getIdToken();
    this.idToken.emit(googleIdToken);
  }
}

