import { AvailableExam } from "./exam.available";
import { ExamTurn } from "./exam.turn";
/**
 * The request body expected to enroll a student into an exam at a specific turn.
 *
 * @interface
 */
export interface ExamEnrollRequest {
    /** Metadata for the course in which the student is enrolling. */
    materia: Partial<AvailableExam>;
    /** The turn in which the student is enrolling. */
    fecha: ExamTurn;
}
/**
 * The response from an enrollment to an exam.
 *
 * ```json
{
    "materia": {
        "especialidad": "5",
        "plan": "2008",
        "codigoMateria": "683",
        "anioMateria": null,
        "nombreMateria": null,
        "nombreMateriaLargo": null,
        "inscripto": null,
        "turno": null,
        "fechaExamen": null,
        "horarioTeorico": null,
        "horarioPractico": null,
        "tribunal": null,
        "nombreTribunal": null,
        "edificio": null,
        "checksum": null,
        "horario": null,
        "impreso": null,
        "auditoria": null,
        "materia": {
            "nombre": null,
            "codigoAcademico": "683"
        }
    },
    "fecha": {
        "fechaExamen": "2023-09-12T03:00:00Z",
        "tribunal": "01",
        "nombreTribunal": "Villa María",
        "habilitadoManana": "0",
        "habilitadoTarde": "0",
        "habilitadoNoche": "1",
        "turno": "6",
        "horarioSeleccionado": "NOCHE",
        "horariosDisponibles": [
            "NOCHE"
        ]
    },
    "dato": {
        "checksum": "21EIR8",
        "fechaExamen": "2023-09-12T03:00:00Z",
        "horarioTeorico": "18:00",
        "horarioPractico": "18:00",
        "aula": "0 Central",
        "inscripto": "martes 12 de setiembre - Noche - Villa María"
    }
}
 * ```
 *
 * @interface
 */
export interface ExamEnrollResponse {
    /** Metadata for the course in which the student is enrolling. */
    materia: Partial<AvailableExam>;
    /** The turn in which the student is enrolling. */
    fecha: ExamTurn;
    /** Metadata result from enrolling into the exam. */
    dato: ExamEnrollMetadata;
}
/**
 * The enrollment metadata provided when enrolling into an exam.
 *
 * @interface
 */
export interface ExamEnrollMetadata {
    /** A checksum that identifies the exam enrollment as valid. */
    checksum: string;
    /** An ISO8601 timestamp for the exam's date. */
    fechaExamen: string;
    /** The time in HH:MM format at which the exam will be taken (Theoric). */
    horarioTeorico: string;
    /** The time in HH:MM format at which the exam will be taken (Practical). */
    horarioPractico: string;
    /** The room in which the exam will be taken. (i.e: `0 Central`) */
    aula: string;
    /** A visual representation of the enrollment (i.e: `martes 12 de setiembre - Noche - Villa María`) */
    inscripto: string;
}
