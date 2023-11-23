import {
  AcademicPersona,
  AcademicPersonaTeacher,
} from "../persona/persona.types";
import {
  PollEntry,
  PollEntryTeacher,
  PollEntryTeacherCourse,
} from "./poll.entry";

export interface PollEntryQuestionData {
  /** Unique ID that holds the question's information. */
  id: number;

  /** A string that shows the specific question visually. */
  pregunta: string;

  /** An object that determines how the question should be answered (field type) */
  tipoPregunta: {
    /** An unique ID that represents this specific question type. */
    id: number;

    /** The question type's name. Can be `radius` or `text`. */
    nombre: "radius";
  };

  /** The question's numeric order. Should be the same as `ordenPrecedencia`. */
  ordenPregunta: number;

  /** The question's group. Should be the same as `grupoPregunta`. */
  grupoPregunta: string;
}

/**
 * Represents a question within the Poll Entry question data.
 *
 * @interface
 */
export interface PollEntryQuestion {
  /** Object that holds identification data for the poll entry's specific question. */
  id: {
    /** An unique poll entry ID. For some reason it's always null. */
    idEncuesta: number | null;

    /** A string version of `codigoDep`. Somehow it is null here. */
    codigoDepartamento: string | null;

    /** An order number for this question (so it can be sorted) */
    ordenPrecedencia: number;
  };

  /** A letter that represents this question's group. */
  grupoPregunta: string;

  /** Object that holds all the data for the question. */
  pregunta: PollEntryQuestionData;

  /** Optional. Used for answering a specific question when they are `radius` type. */
  respuesta?: number;

  /** Optional. Used for answering a specific question when they are `text` type. */
  opinion?: string;
}

/**
 * Represents all the questions available for a specific Poll Entry.
 *
 * @interface
 */
export interface PollQuestions {
  /** An unique poll entry ID. For some reason it's always null. */
  idEncuesta: number | null;

  /** Unique idenfitied for the current department the poll is pointed at. */
  codigoDep: number;

  /** An unique ID that represents this poll. */
  id: number;

  /** The answering type, unknown at this moment. */
  tipoRespuesta: number;

  /** An unique ID that represents the teacher's information. */
  idPersona: number;

  /** Object that contains teacher metadata. */
  docente: AcademicPersonaTeacher;

  /** A string version of `codigoDep`. */
  codigoDepartamento: string;

  /** Object that holds the course's full information. */
  asignatura: PollEntryTeacherCourse;

  /** The academic year this poll entry is from (`1` to `5`) */
  anio: number;

  /** Specific commission number that identified the course being evaluated. */
  comision: number;

  /** The type of teacher responsibility data. */
  tipoCargoDocente: PollEntryTeacher["tipoCargoDocente"];

  /** A replication of the Poll entry as raw data, probably used for backwards validation? */
  encuestaDto: PollEntry;

  /** Object that holds the teacher's identity information. */
  persona: AcademicPersona;

  /** Array that holds all the questions the poll holds for this teacher poll. */
  detalles: PollEntryQuestion[];
}
