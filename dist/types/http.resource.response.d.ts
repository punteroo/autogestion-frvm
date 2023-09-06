import { AcademicPersona } from "./persona/persona.types";
/**
 * Generic response from certain resources in the API.
 *
 * @type
 */
export type HttpResponse<T> = {
    /** The persona information from the logged in client. */
    persona: AcademicPersona;
    /** The response data from the resource. */
    detalles: T;
};
/**
 * Makes certain properties within a type optional.
 *
 * @type
 */
export type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;
