/** Available values for a turn. */
export type ExamTurnTime = "NOCHE" | "TARDE" | "MANANA";

/**
 * Represents an available turn for a given exam that can be taken by the student.
 *
 * @interface
 */
export interface ExamTurn {
  /** An ISO8601 timestamp for the exam's date. */
  fechaExamen: string;

  /** A number that identifies the tribunal in which this exam will be taken within the university. */
  tribunal: string;

  /** A visual name for the tribunal in which this exam will be taken within the university. */
  nombreTribunal: string;

  /**
   * Numeric string value that tells if the turn can be taken in the morning.
   *
   * This would only be `"1"` if the `horariosDisponibles` array holds a value of `MAÑANA`
   */
  habilitadoManana: "0" | "1";

  /**
   * Numeric string value that tells if the turn can be taken in the afternoon.
   *
   * This would only be `"1"` if the `horariosDisponibles` array holds a value of `TARDE`
   */
  habilitadoTarde: "0" | "1";

  /**
   * Numeric string value that tells if the turn can be taken in the night.
   *
   * This would only be `"1"` if the `horariosDisponibles` array holds a value of `NOCHE`
   */
  habilitadoNoche: "0" | "1";

  /** A number that identifies the turn in which this exam will be taken. */
  turno: string;

  /** If this turn was enrolled to, this property holds the specific time selected for the exam. */
  horarioSeleccionado: string;

  /**
   * A list of available times for the exam.
   *
   * Known values are: `NOCHE`, `TARDE`, `MANANA`.
   */
  horariosDisponibles: Array<ExamTurnTime>;
}
