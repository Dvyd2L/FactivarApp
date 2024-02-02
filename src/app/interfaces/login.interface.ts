/**
 * Interfaz que representa los datos de inicio de sesión.
 */
export interface ILogin {
  email: string; // Correo electrónico del usuario.
  password: string; // Contraseña del usuario.
}

/**
 * Interfaz que representa la respuesta del inicio de sesión.
 */
export interface ILoginResponse {
  usuario: string; // Nombre de usuario.
  token: string; // Token de autenticación.
}

/**
 * Interfaz que representa los datos de registro de usuario.
 */
export interface IRegister {
  nombre: string; // Nombre del usuario.
  apellidos: string; // Apellidos del usuario.
  telefono?: number | string; // Teléfono del usuario (opcional).
  email: string; // Correo electrónico del usuario.
  password: string; // Contraseña del usuario.
}
export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  usuario: string;
  token: string;
}

export interface IRegister {
  nombre: string;
  apellidos: string;
  telefono?: number | string;
  email: string;
  password: string;
}
