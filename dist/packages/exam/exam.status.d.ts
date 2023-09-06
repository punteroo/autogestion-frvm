import { CareerMetadata } from "../../types";
import { HttpResponse } from "../../types/http.resource.response";
import { HttpClient } from "../http/http.client";
export type ExamStatusShort = "uno" | "dos" | "tres" | "cuatro" | "cinco" | "seis" | "siete" | "ocho" | "nueve" | "diez";
export type ExamStatus = `${Uppercase<ExamStatusShort>}`;
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
    materia: CareerMetadata;
    /** The exam's status (in upper case) */
    estado: ExamStatus | "AUSENTE";
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
export declare class TakenExams implements ITakenExams {
    private readonly _http;
    private readonly _taken;
    constructor(_http: HttpClient);
    fetch(): Promise<HttpResponse<Array<ExamEntry>>>;
}
