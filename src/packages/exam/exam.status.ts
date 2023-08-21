import { HttpResponse } from "../../types/http.resource.response";
import { HttpClient } from "../http/http.client";

/**
 * Replaces all occurrences of a substring within a string with another string.
 *
 * Used to infer string literals from a union of string literals.
 *
 * @see https://stackoverflow.com/a/71353081
 */
type Replace<
  T extends string,
  S extends string,
  D extends string,
  A extends string = ""
> = T extends `${infer L}${S}${infer R}`
  ? Replace<R, S, D, `${A}${L}${D}`>
  : `${A}${T}`;

type ExamStatusShort =
  | "uno"
  | "dos"
  | "tres"
  | "cuatro"
  | "cinco"
  | "seis"
  | "siete"
  | "ocho"
  | "nueve"
  | "diez";

type ExamStatus = `${Uppercase<ExamStatusShort>}`;

/**
 * An exam entry within the student's academic career.
 *
 * @interface
 */
export interface ExamEntry {
  /** An ISO8601 timestamp for when the exam was taken by the student. */
  fecha: string;

  /** The name of the course this exam belongs to. */
  nombreMateria: string;

  /** The final grade (in letters) achieved on the exam (if not absent). */
  nota: ExamStatusShort | "Ausen.";

  /** The specialty ID (career number) in which this exam is in. */
  especialidad: number;

  /** A short abbreviation for the specialty name. */
  abreviaturaEspecialidad: string;

  /** The plan year the student is in for which the current specialty (career) defines this exam's contents. */
  plan: string;

  /** An unique ID that represents the course this exam belongs to. */
  codigoMateria: string;

  /** The descriptive status for this exam entry. */
  estadoAprobacion: "APROBADO" | "DESAPROBADO" | "AUSENTE";

  /** An object that contains information about the course the exam belongs to. */
  materia: {
    /** The course's name. */
    nombre: string;

    /** The course's ID. */
    codigoAcademico: string;
  };

  /** The exam's status (in upper case) */
  estado: ExamStatus | 'AUSENTE';
}

export interface ITakenExams {
    /**
     * Looks up all the taken exams by the student.
     *
     * @noparams
     *
     * @returns {Promise<HttpResponse<Array<ExamEntry>>>}
     */
    fetch(): Promise<HttpResponse<Array<ExamEntry>>>;
  }
  
  export class TakenExams implements ITakenExams {
    private readonly _taken = "examenes";
  
    constructor(private readonly _http: HttpClient) {}
  
    public async fetch(): Promise<HttpResponse<Array<ExamEntry>>> {
      const takenExams = await this._http.request<HttpResponse<Array<ExamEntry>>>(
        this._taken,
        "GET"
      );
  
      return takenExams;
    }
  }
  