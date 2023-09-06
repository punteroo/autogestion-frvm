import { HttpClient } from "../http/http.client";
import { ITakenExams, TakenExams } from "./exam.status";
import {
  ExamInscriptions,
  IExamInscriptions,
} from "./inscription/exam.inscription";

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

export class Exams implements IExams {
  taken: ITakenExams;
  inscriptions: IExamInscriptions;

  constructor(private readonly _http: HttpClient) {
    this.taken = new TakenExams(_http);
    this.inscriptions = new ExamInscriptions(_http);
  }
}
