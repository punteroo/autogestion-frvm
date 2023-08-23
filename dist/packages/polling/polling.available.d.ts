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
export declare class PollingAvailable implements IPollingAvailable {
    private readonly _http;
    private readonly _available;
    constructor(_http: HttpClient);
    fetch(): Promise<HttpResponse<Array<PollEntry>>>;
}
