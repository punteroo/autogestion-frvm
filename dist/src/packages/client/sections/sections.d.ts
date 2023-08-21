import { HttpClient } from "../../http/http.client";
/**
 * A list of known section names inside the autogestion client.
 *
 * @type
 */
type ClientSectionName = "pedirCertificados" | "certificadoAlumnoRegular" | "libroDeTemas" | "calendarioAcademico" | "materiasCursando" | "estadoAcademico" | "datosPersonales" | "cambiarContrasenia" | "horarioCursado" | "materiasElectivas" | "examenes" | "inscripcionExamen" | "inscripcionCursado" | "pedidoProrrogas" | "encuestas" | string;
/**
 * Represents a section inside the autogestion client.
 *
 * @interface
 */
export interface ClientSection {
    /** An unique ID to identify the section. */
    id: number;
    /** A specific name for the section. For internal use. */
    nombreSeccion: ClientSectionName;
    /** Wether or not this section is enabled for use. */
    habilitada: boolean;
    /** A description or short name for the section. */
    descripcion: string;
}
export interface IClientSections {
    /**
     * Searches for a list of all available sections within the autogestion client.
     *
     * @noparams
     *
     * @returns {Promise<Array<ClientSection>>} A list of all available sections.
     */
    fetchAll(): Promise<Array<ClientSection>>;
}
export declare class ClientSections implements IClientSections {
    private readonly _http;
    private readonly _sections;
    constructor(_http: HttpClient);
    fetchAll(): Promise<Array<ClientSection>>;
}
export {};
