/**
 * Interfaz que define los métodos y propiedades de autenticación.
 */
export interface IAuth {
  /**
   * Realiza el inicio de sesión.
   */
  login(): void;
  /**
   * Realiza el cierre de sesión.
   */
  logout(): void;
  /**
   * Obtiene el perfil del usuario autenticado.
   * @returns Un objeto con las propiedades del perfil.
   */
  getProfile(): Record<string, any>;
  /**
   * Obtiene el token de identificación del usuario autenticado.
   * @returns El token de identificación.
   */
  getIdToken(): string;
  /**
   * Verifica si el usuario está autenticado.
   * @returns `true` si el usuario está autenticado, de lo contrario `false`.
   */
  getIsLoggedIn(): boolean;
}
