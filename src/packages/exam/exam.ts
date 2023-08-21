import { HttpClient } from "../http/http.client";
import { ITakenExams, TakenExams } from "./exam.status";

export interface IExams {
  /**
   * Accesses all the taken exams by the student.
   *
   * @noparams
   *
   * @returns {ITakenExams} The taken exams.
   */
  taken: ITakenExams;

  /** TODO: Inscription and such. */
}

export class Exams implements IExams {
  taken: ITakenExams;

  constructor(private readonly _http: HttpClient) {
    this.taken = new TakenExams(_http);
  }
}
