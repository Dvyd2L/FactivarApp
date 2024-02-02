import { environment } from '@environments/environment.development';
import { AuthConfig } from 'angular-oauth2-oidc';
import { OAUTH_CONFIG } from './tokens/oauth-conection.token';

/**
 * Configuración de OAuth para Google.
 */
const googleOAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  strictDiscoveryDocumentValidation: false,
  clientId: environment.googleClient.id,
  scope: 'openid profile email',
};
/**
 * Configuración de OAuth para Facebook.
 */
const facebookOAuthConfig: AuthConfig = {
  issuer: 'https://www.facebook.com/v18.0/dialog/oauth',
  redirectUri: window.location.origin,
  clientId: environment.facebookClient.id,
  dummyClientSecret: environment.facebookClient.secret,
  tokenEndpoint: 'https://graph.facebook.com/v18.0/oauth/access_token',
  scope: 'public_profile,email',
  responseType: 'token',
  showDebugInformation: true,
  oidc: false,
  requireHttps: false,
};

/**
 * Provee de configuración de conexión OAuth para diferentes proveedores de autenticación OAuth.
 * @returns Proveedor de configuración de OAuth
 */
export const provideOAuthProvidersConfig = () => {
  const provider = {
    provide: OAUTH_CONFIG,
    useValue: {
      google: googleOAuthConfig,
      facebook: facebookOAuthConfig,
    },
  };
  return provider;
};
