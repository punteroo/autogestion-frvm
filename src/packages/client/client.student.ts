export interface Student {
  /** The authenticated student's unique ID. */
  id: number;

  /** The authenticated student's nickname, commonly being the student's identification code. */
  nick: string;

  /** The student's assigned group. */
  grupo?: string | null;

  /** A persona information property. Currently unused. */
  persona?: string | null;

  /** The unique session hash (UUID4) associated with the student. */
  hashActual: string;

  /**
   * Validates a students' hash against the current session hash.
   *
   * @noparams
   *
   * @returns {Promise<boolean>} True if the hash is still valid, false otherwise.
   */
  validateHash(): Promise<boolean>;
}
