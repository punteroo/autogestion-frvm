type StudentPersonaAcademicCareer = {
    /** The career's unique identifier. */
    id: number;
    /** The career's name. */
    nombre: string;
    /** The career's code. */
    codigoAcademico: string;
};
type StudentPersonaAcademicDetails = {
    /** The student's unique identifier (legally) on the university. */
    legajo: string;
    /** An object containing the current career details for the student. */
    especialidad: StudentPersonaAcademicCareer;
};
/**
 * Represents the persona instance of a student.
 *
 * Information such as the student's name, surname, and other personal information (DNI, etc.)
 */
export type StudentPersona = {
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
    alumno: StudentPersonaAcademicDetails;
    /** (Unused?) It would contain administrative information if the student were a teacher. */
    docente?: any;
    /** (Unused?) It would contain administrative information if the student were a "director". */
    director?: any;
    /** (Unused?) An international telephone number with ISO code. */
    telefonoInternacional?: string | null;
};
export {};
