import {
  AcademicPersona,
  AcademicPersonaTeacher,
} from "../persona/persona.types";

export interface PollEntryTeacherCourse {
  /** The course's unique identifier. */
  id: number;

  /** The course's name. */
  nombre: string;

  /** The course's code. */
  codigo: number;

  /** The year in comparison of the career this course is taken. */
  anio: number;

  /** Object that holds information about the academic plan the course is currently in. */
  planAsignatura: {
    /** The academic plan's unique identifier. */
    id: number;

    /** The academic plan's year. */
    nombre: string;
  };

  /** Object that holds information about the career this course belongs to. */
  especialidad: {
    /** The career's unique identifier. */
    id: number;

    /** The career's name. */
    nombre: string;

    /** The career's code. */
    codigo: string;

    /** An abbreviature for the career's name, if present. */
    abreviatura: string | null;

    /** This career's department code. */
    codigoDepartamento: string;
  };
}

export interface PollEntryTeacher {
  /** A unique ID for internal tracking. */
  id: number;

  /** Object that holds all data regarding the course this teacher is responsible of teaching. */
  asignatura: PollEntryTeacherCourse;

  /** An object that holds all teachers' information. */
  docente: AcademicPersonaTeacher;

  /** When the course was taken in the academic plan. */
  tipoDictado: {
    /** The unique identifier for this type of course. */
    id: number;

    /** When the course was taken (ie: 'Primer Cuatrimestre', 'Segundo Cuatrimestre', 'Anual') */
    nombre: string;
  };

  /** An object that holds information about the type of teacher in regards to the course. */
  tipoDocente: {
    /** The unique identifier for this type of teacher. */
    id: number;

    /** The name of the type of teacher. */
    nombre: string;
  };
}

export interface PollEntry {
  /** The persona object that holds who you're polling for. */
  persona: AcademicPersona;

  /** Academic teacher information. */
  cargoDocente: PollEntryTeacher;

  /** Wether or not this poll was replied to by the student. */
  encuestaRealizada: boolean;

  /** The year this course was taken. */
  anioCursado: number;
}
