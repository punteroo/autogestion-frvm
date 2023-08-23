import { HttpClient } from "../http/http.client";
import { ITakenExams } from "./exam.status";
export interface IExams {
    /**
     * Accesses all the taken exams by the student.
     *
     * @noparams
     *
     * @returns {ITakenExams} The taken exams.
     */
    taken: ITakenExams;
}
export declare class Exams implements IExams {
    private readonly _http;
    taken: ITakenExams;
    constructor(_http: HttpClient);
}
