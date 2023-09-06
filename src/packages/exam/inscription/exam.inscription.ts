import { AvailableExam } from "../../../types/exam/exam.available";
import {
  ExamEnrollRequest,
  ExamEnrollResponse,
} from "../../../types/exam/exam.enroll";
import { ExamTurn, ExamTurnTime } from "../../../types/exam/exam.turn";
import { ExamVoidResponse } from "../../../types/exam/exam.void";
import { HttpResponse } from "../../../types/http.resource.response";
import { HttpClient } from "../../http/http.client";

/**
 * Custom HTTP response type for the `GET` request to the `inscripcion-examenes` resource.
 *
 * @type
 */
type ExamHttpResponse = Pick<HttpResponse<AvailableExam>, "persona"> & {
  materias: Array<AvailableExam>;
};

export interface IExamInscriptions {
  /**
   * Searches for all available exams for the student to enroll in.
   *
   * ```ts
   * // Search for available exams.
   * const { materias: availableExams } = await examInscriptions.fetchAvailableExams();
   * ```
   *
   * @noparams
   *
   * @returns {Promise<ExamHttpResponse>}
   */
  fetchAvailableExams(): Promise<ExamHttpResponse>;

  /**
   * Searches available turns for a given available exam.
   *
   * This method will throw an error if the given exam is not available for inscription, or the student doesn't meet the criteria.
   *
   * ```ts
   * try {
   *    // Search for available turns for the exam with the given ID.
   *    const { detalles: turns } = await examInscriptions.fetchTurnsForExam('5', '2008', '683');
   * } catch (e) {
   *    console.log(e.message) // No regularizó Taller de Programación (Elec.)
   * }
   * ```
   *
   * @param {string} specialty The specialty ID (career number) in which this exam is in.
   * @param {string} planYear The plan year the student is in for which the current specialty (career) defines this exam's contents.
   * @param {string} courseId An unique ID that represents the course this exam belongs to.
   *
   * @returns {Promise<HttpResponse<Array<ExamTurn>>>} A promise that resolves to an array of available turns for the given exam.
   */
  fetchTurnsForExam(
    specialty: string,
    planYear: string,
    courseId: string
  ): Promise<HttpResponse<Array<ExamTurn>>>;

  /**
   * Enrolls the student to a specified exam.
   *
   * This method will throw an error if the given exam is not available for inscription, or the student doesn't meet the criteria.
   *
   * @param {Partial<AvailableExam>} exam The exam the student is enrolling into.
   * @param {ExamTurn} turn The turn in which the student is enrolling for that exam.
   * @param {ExamTurnTime} selectedTurn The specific time selected for the exam.
   *
   * @returns {Promise<ExamEnrollResponse>} A promise that resolves with the enrollment data.
   */
  enroll(
    exam: Partial<AvailableExam>,
    turn: ExamTurn,
    selectedTurn: ExamTurnTime
  ): Promise<ExamEnrollResponse>;

  /**
   * Unenrolls the student from a specified exam, voiding their exam inscription.
   *
   * @param {Partial<AvailableExam>} exam The exam the student is unenrolling from.
   *
   * @returns {Promise<ExamVoidResponse>} A promise that resolves with the voiding data.
   */
  voidEnrollment(exam: Partial<AvailableExam>): Promise<ExamVoidResponse>;
}

export class ExamInscriptions implements IExamInscriptions {
  private readonly _available = "inscripcion-examenes";
  private readonly _turns = "inscripcion-examenes/listar-turnos";
  private readonly _inscription = "inscripcion-examenes/inscribir";
  private readonly _void = "inscripcion-examenes/anular";

  constructor(private readonly _http: HttpClient) {}

  public async fetchAvailableExams(): Promise<ExamHttpResponse> {
    const availableExams = await this._http.request<ExamHttpResponse>(
      this._available,
      "GET"
    );

    return availableExams;
  }

  public async fetchTurnsForExam(
    specialty: string,
    planYear: string,
    courseId: string
  ): Promise<HttpResponse<Array<ExamTurn>>> {
    // Ask for available turns to the Autogestión API.
    const body: Partial<AvailableExam> = {
      especialidad: specialty,
      plan: planYear,
      codigoMateria: courseId,
    };

    const availableTurns = await this._http.request<
      HttpResponse<Array<ExamTurn>>
    >(this._turns, "POST", { "Content-Type": "application/json" }, body);

    // Return them.
    return availableTurns;
  }

  public async enroll(
    exam: Partial<AvailableExam>,
    turn: ExamTurn,
    selectedTurn: ExamTurnTime
  ): Promise<ExamEnrollResponse> {
    // Build the request body for the enrollment request.
    const body: ExamEnrollRequest = {
      materia: exam,
      fecha: {
        ...turn,
        horarioSeleccionado: selectedTurn,
      },
    };

    // Enroll the student to the given exam.
    const enrollment = await this._http.request<ExamEnrollResponse>(
      this._inscription,
      "POST",
      { "Content-Type": "application/json" },
      body
    );

    // Return metadata about the enrollment.
    return enrollment;
  }

  public async voidEnrollment(
    exam: Partial<AvailableExam>
  ): Promise<ExamVoidResponse> {
    // Void the enrollment.
    const voidedExam = await this._http.request<ExamVoidResponse>(
      this._void,
      "POST",
      { "Content-Type": "application/json" },
      exam
    );

    // Return metadata about the voiding.
    return voidedExam;
  }
}
