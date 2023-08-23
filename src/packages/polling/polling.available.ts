import { HttpResponse } from "../../types/http.resource.response";
import { PollEntry } from "../../types/polls/poll.entry";
import { HttpClient } from "../http/http.client";

export interface IPollingAvailable {
  /**
   * Fetches a list of all available teacher polls.
   *
   * @noparams
   *
   * @returns {Promise<HttpResponse<Array<PollEntry>>>}
   */
  fetch(): Promise<HttpResponse<Array<PollEntry>>>;
}

export class PollingAvailable implements IPollingAvailable {
  private readonly _available = "encuestas/encuestas-disponibles";

  constructor(private readonly _http: HttpClient) {}

  public async fetch(): Promise<HttpResponse<Array<PollEntry>>> {
    const availablePolls = await this._http.request<HttpResponse<Array<PollEntry>>>(
      this._available,
      "GET"
    );

    return availablePolls;
  }
}
