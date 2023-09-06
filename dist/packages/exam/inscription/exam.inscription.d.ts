import { AvailableExam } from "../../../types/exam/exam.available";
import { ExamEnrollResponse } from "../../../types/exam/exam.enroll";
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
    fetchTurnsForExam(specialty: string, planYear: string, courseId: string): Promise<HttpResponse<Array<ExamTurn>>>;
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
    enroll(exam: Partial<AvailableExam>, turn: ExamTurn, selectedTurn: ExamTurnTime): Promise<ExamEnrollResponse>;
    /**
     * Unenrolls the student from a specified exam, voiding their exam inscription.
     *
     * @param {Partial<AvailableExam>} exam The exam the student is unenrolling from.
     *
     * @returns {Promise<ExamVoidResponse>} A promise that resolves with the voiding data.
     */
    voidEnrollment(exam: Partial<AvailableExam>): Promise<ExamVoidResponse>;
}
export declare class ExamInscriptions implements IExamInscriptions {
    private readonly _http;
    private readonly _available;
    private readonly _turns;
    private readonly _inscription;
    private readonly _void;
    constructor(_http: HttpClient);
    fetchAvailableExams(): Promise<ExamHttpResponse>;
    fetchTurnsForExam(specialty: string, planYear: string, courseId: string): Promise<HttpResponse<Array<ExamTurn>>>;
    enroll(exam: Partial<AvailableExam>, turn: ExamTurn, selectedTurn: ExamTurnTime): Promise<ExamEnrollResponse>;
    voidEnrollment(exam: Partial<AvailableExam>): Promise<ExamVoidResponse>;
}
export {};
