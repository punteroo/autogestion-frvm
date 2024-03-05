/**
 * Changes certain internal settings on how the client should behave.
 *
 * @type
 */
export type AutogestionOptions = {
  /**
   * The base URL to use for the client's requests.
   *
   * Default is `https://webservice.frvm.utn.edu.ar/autogestion`.
   */
  baseUrl?: string;

  /**
   * Optional.
   *
   * Specifies a timeout in miliseconds for the client's requests.
   * If the time is exceeded, the request will be aborted with a 408 status code.
   *
   * Default is `60000` (60 seconds).
   */
  timeoutMs?: number;
};
