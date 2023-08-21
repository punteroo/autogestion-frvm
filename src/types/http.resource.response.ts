import { StudentPersona } from "./student/student.types";

/**
 * Generic response from certain resources in the API.
 *
 * @type
 */
export type HttpResponse<T> = {
    /** The persona information from the logged in client. */
    persona: StudentPersona;

    /** The response data from the resource. */
    detalles: T;
}