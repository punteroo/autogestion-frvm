import { HttpResponse } from "../../types/http.resource.response";
import { PollEntry } from "../../types/polls/poll.entry";
import { PollQuestions } from "../../types/polls/poll.questions";
import { HttpClient } from "../http/http.client";

export interface IPollingAvailable {
  /**
   * Fetches a list of all available teacher polls.
   *
   * @noparams
   *
   * @returns {Promise<Array<PollEntry>>}
   */
  fetch(): Promise<Array<PollEntry>>;

  /**
   * Searches for all questions available for a specific poll entry.
   *
   * @param {PollEntry} pollEntry The poll entry to search for.
   *
   * @returns {Promise<PollQuestions>}
   */
  questions(pollEntry: PollEntry): Promise<PollQuestions>;

  /**
   * Responds to an ongoing poll.
   *
   * The poll must have the optional `respuesta` and `opinion` fields filled, else the service will throw a missing fields error.
   *
   * @param {PollEntry} pollEntry The poll entry to respond to.
   *
   * @returns {Promise<PollQuestions>}
   */
  respond(pollEntry: PollEntry): Promise<PollQuestions>;
}

export class PollingAvailable implements IPollingAvailable {
  private readonly _available = "encuestas/encuestas-disponibles";
  private readonly _polls = "encuestas/preguntas";
  private readonly _respond = "encuestas";

  constructor(private readonly _http: HttpClient) {}

  public async fetch(): Promise<Array<PollEntry>> {
    const availablePolls = await this._http.request<Array<PollEntry>>(
      this._available,
      "GET"
    );

    return availablePolls;
  }

  public async questions(pollEntry: PollEntry): Promise<PollQuestions> {
    const questions = await this._http.request<PollQuestions>(
      this._polls,
      "POST",
      {},
      pollEntry
    );

    return questions;
  }

  public async respond(pollEntry: PollEntry): Promise<PollQuestions> {
    const response = await this._http.request<PollQuestions>(
      this._respond,
      "POST",
      {},
      pollEntry
    );

    return response;
  }
}
