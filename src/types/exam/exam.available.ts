import { CareerMetadata } from "../academic/academic.status.entry";

/**
 * Represents an entry within the available exams up for student inscription.
 *
 * @interface
 */
export interface AvailableExam {
  /** The career ID. */
  especialidad: string;

  /** The current plan this career's exam is on, in retrospect with the course. */
  plan: string;

  /** The course's ID. */
  codigoMateria: string;

  /** The year this course belongs to according to the career's academic plan. */
  anioMateria: string;

  /** A visual name for the course this exam belongs to. */
  nombreMateria: string;

  /** A longer visual name for the course this exam belongs to. */
  nombreMateriaLargo: string;

  /** A visual string that shows summarized details about the exam inscription (i.e: `martes 12 de setiembre - Noche - Villa María`) */
  inscripto: string | null;

  /** The specific turn number given for this exam. This property is `"0"` if the student hasn't enrolled. */
  turno: string;

  /** An ISO8601 timestamp for the exam's date. This property is null if the student hasn't enrolled to this exam. */
  fechaExamen: string | null;

  /** A specific time string in the form of HH:MM for which the theoric part of the exam is given. This property is null if the student hasn't enrolled to this exam. */
  horarioTeorico: string | null;

  /** A specific time string in the form of HH:MM for which the practical part of the exam is given. This property is null if the student hasn't enrolled to this exam. */
  horarioPractico: string | null;

  /**
   * A number that identifies the tribunal in which this exam has assigned.
   *
   * This corresponds to what is listed on `nombreTribunal` as name.
   *
   * This property is null if the student hasn't enrolled to this exam.
   */
  tribunal: string | null;

  /** A visual name for the tribunal (location) for which UTN this exam will be taken. This property is null if the student hasn't enrolled to this exam. */
  nombreTribunal: string | null;

  /** The name of the building where the exam is taken. This property is null if the student hasn't enrolled to this exam. */
  edificio: string | null;

  /** An auto-generated code that represents the enrollment into the exam. This property is null if the student hasn't enrolled to this exam. */
  checksum: string | null;

  /**
   * An identifier number that corresponds to the selected turn in the exam (`MANANA` (1), `TARDE` (2), `NOCHE` (3)).
   *
   * This property is `"0"` if the student hasn't enrolled to this exam.
   */
  horario: string;

  /** Unknown property. This property is null if the student hasn't enrolled to this exam. */
  impreso: string | null;

  /** Unknown property. This property is null if the student hasn't enrolled to this exam. */
  auditoria: string | null;

  /** The course's metadata. */
  materia: CareerMetadata;
}
