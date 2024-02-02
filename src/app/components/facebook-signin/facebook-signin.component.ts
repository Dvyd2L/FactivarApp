import { Component, inject } from '@angular/core';
import { OAuthProviderEnum } from '@app/interfaces/enums/oauth-providers.enum';
import { SocialAuthService } from '@app/services/auth/social-auth.service';

/**
 * Componente para iniciar sesión con Facebook.
 */
@Component({
  selector: 'app-facebook-signin',
  standalone: true,
  imports: [],
  templateUrl: './facebook-signin.component.html',
  styleUrl: './facebook-signin.component.css',
  providers: [SocialAuthService],
})
export class FacebookSigninComponent {
  private socialAuthService = inject(SocialAuthService);
  
  /**
   * Inicia sesión con Facebook.
   */
  public loginWithFacebook() {
    this.socialAuthService.initProviderLogin(OAuthProviderEnum.Facebook);
    this.socialAuthService.login();
  }
}
