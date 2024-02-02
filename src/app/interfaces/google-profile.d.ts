/**
 * Interfaz que representa el perfil de Google.
 */
export interface IGoogleProfile {
    /**
     * Hash de acceso.
     */
    at_hash: string;
    /**
     * Audiencia.
     */
    aud: string;
    /**
     * Identificador de la aplicación.
     */
    azp: string;
    /**
     * Correo electrónico.
     */
    email: string;
    /**
     * Indica si el correo electrónico ha sido verificado.
     */
    email_verified: boolean;
    /**
     * Fecha de expiración.
     */
    exp: number;
    /**
     * Apellido.
     */
    family_name: string;
    /**
     * Nombre.
     */
    given_name: string;
    /**
     * Fecha de emisión.
     */
    iat: number;
    /**
     * Emisor.
     */
    iss: string;
    /**
     * Identificador único del token.
     */
    jti: string;
    /**
     * Configuración regional.
     */
    locale: string;
    /**
     * Nombre completo.
     */
    name: string;
    /**
     * Fecha de inicio de validez.
     */
    nbf: number;
    /**
     * Valor único utilizado para asociar un cliente con un ID de sesión.
     */
    nonce: string;
    /**
     * URL de la imagen de perfil.
     */
    picture: string;
    /**
     * Identificador del sujeto.
     */
    sub: string;
}
