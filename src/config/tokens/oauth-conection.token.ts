import { InjectionToken } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
/**
 * Token de inyección para la configuración de OAuth.
 */
export const OAUTH_CONFIG = new InjectionToken<{ [key: string]: AuthConfig }>('OAUTH_CONFIG');
