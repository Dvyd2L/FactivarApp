import { UserService } from '@app/services/user.service';
import { IUserPayload } from '@app/interfaces/user';
import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '@environments/environment.development';

/**
 * Interceptor de autenticación para agregar el token de autenticación a las solicitudes HTTP.
 * @param req - La solicitud HTTP entrante.
 * @param next - El siguiente controlador de solicitudes HTTP en la cadena de interceptores.
 * @returns La solicitud HTTP modificada con el token de autenticación agregado, o la solicitud original si no es necesario agregar el token.
 */
export const authInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  if (req.url.includes(environment.urlAPI)) {
    const userService = inject(UserService<IUserPayload>);
    const token = userService.getToken();
    const authReq = addTokenToRequest(req, token);

    return next(authReq);
  }

  return next(req);
};
/**
 * Añade el token a la solicitud
 * @param {HttpRequest} req - La solicitud a la que se añadirá el token
 * @param {string|null} token - El token que se añadirá a la solicitud
 * @returns {HttpRequest<unknown>} La solicitud con el token añadido
 */
export const addTokenToRequest = (
  req: HttpRequest<unknown>,
  token: string | null
): HttpRequest<unknown> =>
  req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
