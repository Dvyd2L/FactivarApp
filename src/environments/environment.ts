/**
 * Configuración del entorno.
 */
export const environment = {
  /**
   * URL de la API.
   */
  urlAPI: 'https://localhost:7230/',
  /**
   * Cliente de Google.
   */
  googleClient:  {
    "client_id": "1010715603937-euj34hajhc3hbhqeq42hvvp6nuk6jnr6.apps.googleusercontent.com",
    "project_id": "factivar-410716",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "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",
    "redirect_uris": [
        "http://localhost:4200/home",
        "https://dvyd2l.github.io/"
    ]
},
  /**
   * Cliente de Facebook.
   */
  facebookClient: {
    /**
     * ID del cliente de Facebook.
     */
    id: '928477878989848',
    /**
     * Secreto del cliente de Facebook.
     */
    secret: 'c1d499192517c4613ee9cecaef25a93a',
  },
};
