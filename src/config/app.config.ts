import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideRouter,
  withDebugTracing,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import { routes } from '@app/app.routes';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorFn } from '@app/interceptors/token-fn.interceptor';
import localeEs from '@angular/common/locales/es';
import { provideLocale } from './locale.config';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './indexed-db.config';
import { provideOAuthProvidersConfig } from './oauth.config';
import { registerLocaleData } from '@angular/common';
// import { NgxGistModule } from '@proangular/ngx-gist';

registerLocaleData(localeEs);
/**
 * Configuración de la aplicación.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Proveedor del enrutador de la aplicación.
     */
    provideRouter(
      routes,
      withViewTransitions(),
      withDebugTracing(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
        onSameUrlNavigation: 'reload',
        // urlUpdateStrategy: 'deferred',
      })
    ),
    /**
     * Proveedor del cliente HTTP con interceptores.
     */
    provideHttpClient(withFetch(), withInterceptors([authInterceptorFn])),
    /**
     * Proveedor del cliente OAuth2.
     */
    provideOAuthClient(),
    provideOAuthProvidersConfig(), // custom method
    /**
     * Importa los proveedores del módulo BrowserModule y BrowserAnimationsModule.
     */
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      NgxIndexedDBModule.forRoot(dbConfig) // Importa NgxIndexedDBModule y configúralo
      // NgxGistModule // Importa NgxGistModule
    ),
    provideLocale(), // custom method
  ],
};
