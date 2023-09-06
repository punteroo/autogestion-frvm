import { StudentCourse } from "../../packages/course";

/**
 * Represents an entry within the academic status of a student.
 *
 * This is pretty much the same as `StudentCourse`, but with some differences in this context.
 */
export interface AcademicStatusEntry
  extends Omit<
    StudentCourse,
    | "estado"
    | "estadoMateria"
    | "faltaAprobar"
    | "faltaReg"
    | "nota"
    | "anioCursado"
  > {
  /**
   * A description string that shows how the status for this course is in behalf of the student.
   *
   * This is only present when the course was passed.
   */
  estado: string | null;

  /** A string that dictates the courses the student must pass before being able to register to this course. */
  faltaAprobar: string | null;

  /** A string that dictates the courses the student must regularize (passed but not completely) before being able to register to this course. */
  faltaReg: string | null;

  /** The final grade achieved on this course (if passed or regularized). */
  nota: string | "";

  /** The current status (more internally used) for this course. */
  estadoMateria:
    | "NO_CURSADA"
    | "APROBADA"
    | "REGULARIZADA"
    | "LIBRE"
    | "CURSANDO";

  /** The year in which this course was taken. It's always null for this context. */
  anioCursado: null;
}

/**
 * A career metadata object.
 *
 * @interface
 */
export interface CareerMetadata {
  /** The course's name. */
  nombre: string;

  /** The course's ID. */
  codigoAcademico: string;
}
