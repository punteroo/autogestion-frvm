import { HttpResponse } from "../../../types/http.resource.response";
import { HttpClient } from "../../http/http.client";
export declare enum CourseStatus {
    /** The course is being taken by the student currently. */
    ACTIVE = "0",
    /** The course was taken by the student in the past, and failed. */
    LIBRE = "1",
    /** The course was taken by the student in the past, and has finished it partially (missing final grade/exam). */
    REGULAR = "3",
    /** The course was taken by the student in the past, and has finished it completely. */
    APROBADA = "4"
}
export type ActiveCourseGrade = {
    /** A visual name for this exam. */
    nombre: string;
    /** The grade obtained on the exam (numeric) */
    notaNumero: string;
    /** The grade obtained on the exam (visual string) */
    notaLetra: string;
    /**
     * The status for this exam.
     *
     * Other statuses are unknown. Known statuses are:
     * - `APROBADO`: The exam was approved.
     */
    estado: string;
};
/**
 * An active/historic course taken by the student.
 *
 * @interface
 */
export interface StudentCourse {
    /** The course's name. */
    nombreMateria: string;
    /** The course's code. */
    codigoMateria: string;
    /**
     * The course's level in the career's academic plan.
     *
     * Engineering careers have 5 levels, while others have 3.
     */
    nivel: string;
    /** The course's plan year according to the current academic plan for the career. */
    plan: string;
    /** Current status of this course. For active courses this is always the same value. */
    estado: "Cursa" | CourseStatus;
    /** Unused property. */
    faltaAprobar: null;
    /** Unused property. */
    faltaReg: null;
    /** The year this course is being taken by the student, would be the same as the one he signed up for it. */
    anioCursado: string;
    /** An array that holds all unjustified abscenses (in ISO8601 timestamp format) the student has right now since he started this course. */
    faltasInjustificadas: string[];
    /**
     * An array that holds all justified abscenses the student has right now since he started this course.
     *
     * TODO: Fill this type, as there is no reference to what it holds.
     */
    faltasJustificadas: any[];
    /** An array that holds all the grades the student has obtained currently since he's signed up for the course. If the course is historic, this is null. */
    notas: Array<ActiveCourseGrade> | null;
    /** A supossed description or note about this course. */
    nota: string;
    /** Current status of the course, in a visual string for display. */
    estadoMateria: "CURSANDO" | null;
    /** A (repeated) property that holds the course's information. */
    materia: {
        /** The course's name. */
        nombre: string;
        /** The course's code. */
        codigoAcademico: string;
    };
    /** The total amount of abscenses the student had on this course. */
    totalFaltas: number;
}
export interface IStudentCourses {
    /**
     * Searches for only the current courses being taken by the authenticated student.
     *
     * @noparams
     *
     * @returns {Promise<HttpResponse<Array<StudentCourse>>>}
     */
    fetchActive(): Promise<HttpResponse<Array<StudentCourse>>>;
    /**
     * Searches for the historic courses taken by the authenticated student.
     *
     * @noparams
     *
     * @returns {Promise<HttpResponse<Array<StudentCourse>>>}
     */
    fetchHistoric(): Promise<HttpResponse<Array<StudentCourse>>>;
}
export declare class StudentCourses implements IStudentCourses {
    private readonly _http;
    private readonly _current;
    private readonly _historic;
    constructor(_http: HttpClient);
    fetchActive(): Promise<HttpResponse<Array<StudentCourse>>>;
    fetchHistoric(): Promise<HttpResponse<Array<StudentCourse>>>;
}
