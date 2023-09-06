import { HttpClient } from "../http/http.client";
import { ITakenExams } from "./exam.status";
import { IExamInscriptions } from "./inscription/exam.inscription";
export interface IExams {
    /**
     * Accesses all the taken exams by the student.
     */
    taken: ITakenExams;
    /**
     * Accesses the student enrollment and exam administration resources.
     */
    inscriptions: IExamInscriptions;
}
export declare class Exams implements IExams {
    private readonly _http;
    taken: ITakenExams;
    inscriptions: IExamInscriptions;
    constructor(_http: HttpClient);
}
