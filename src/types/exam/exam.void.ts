/**
 * A response from the voiding of an exam enrollment.
 *
 * @interface
 */
export interface ExamVoidResponse {
  /** Wether or not the process failed. */
  resultado: boolean;

  /** The message returned from the server (i.e: `La inscripción a examen ha sido anulado correctamente`) */
  mensaje: string;
}
