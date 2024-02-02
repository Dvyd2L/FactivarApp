/**
 * Interfaz base para un usuario.
 */
export interface IUserBase {
  email: Email;
  nombre: string;
  apellidos: string;
  telefono?: number | string;
}

/**
 * Interfaz para los datos de un usuario.
 */
export interface IUserPayload {
  // id: string;
  // email: Email;
  // nombre: string;
  // apellidos: string;
  // telefono?: number | string;
  // avatarUrl?: string | URL;
  // rol: number | string
  Sid: UUID;
  Email: string;
  Name: string;
  Surname: string;
  Role: string;
  Thumbprint: string;
  MobilePhone?: string;
  exp: number;
  iss: string;
  aud: string;
  token: string;
}

/**
 * Interfaz extendida para un usuario completo.
 */
export interface IFullUser extends IUserBase {
  id?: UUID;
  avatar?: File;
  avatarUrl?: string | URL;
  password?: string;
  rol?: number | string;
  isAdmin?: boolean;
}

/**
 * Interfaz para registrar un usuario.
 */
export interface IRegisterUser extends IUserBase {
  avatar?: File;
  password: string;
}

/**
 * Interfaz para iniciar sesión de un usuario.
 */
export interface ILoginUser
  extends Omit<IUserBase, 'nombre' | 'apellidos' | 'telefono'> {
  password: string;
}

/**
 * Interfaz para cambiar la contraseña de un usuario.
 */
export interface IUserChangePassword extends Omit<ILoginUser, 'password'> {
  oldPassword?: string;
  newPassword: string;
}

/**
 * Respuesta de inicio de sesión.
 */
export interface ILoginResponse {
  token: string;
}

/**
 * Tipo para representar una dirección de correo electrónico.
 */
export type Email = `${string}@${string}.${string}` | string;

/**
 * Tipo para representar un identificador único global (GUID).
 */
export type UUID = `${string}-${string}-${string}-${string}-${string}`;

/**
 * Tipo para representar un token.
 */
export type Token = `${string}.${string}.${string}`;
