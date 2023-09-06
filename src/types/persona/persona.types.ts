import { CareerMetadata } from "../academic/academic.status.entry";

export type AcademicPersonaCareer = {
  /** The career's unique identifier. */
  id: number;
} & CareerMetadata;

export type AcademicPersonaDetails = {
  /** The student's unique identifier (legally) on the university. */
  legajo: string;

  /** An object containing the current career details for the student. */
  especialidad: AcademicPersonaCareer;
};

export type AcademicPersonaTeacher = {
  /** A unique ID for internal tracking. */
  id: number;

  /** The teacher's unique identifier (legally) on the university. */
  legajo: string;

  /** An integer version of the teacher's unique identifier. */
  legajoInteger: number;
}

/**
 * Represents the persona instance of a student.
 *
 * Information such as the student's name, surname, and other personal information (DNI, etc.)
 */
export type AcademicPersona = {
  /** The unique identifier this student is assigned. */
  id: number;

  /** The student's name. */
  nombre: string;

  /** The student's surname. */
  apellido: string;

  /** The student's DNI. */
  documento: number;

  /** The student's phone number (if present) */
  telefono?: string | null;

  /** The student's email (if present) */
  email?: string | null;

  /** An object containing the student's academic details. */
  alumno: AcademicPersonaDetails;

  /** It would contain administrative information if the student were a teacher. */
  docente: AcademicPersonaTeacher | null;

  /** (Unused?) It would contain administrative information if the student were a "director". */
  director?: any;

  /** (Unused?) An international telephone number with ISO code. */
  telefonoInternacional?: string | null;
};
