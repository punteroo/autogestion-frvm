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
export declare class PollingAvailable implements IPollingAvailable {
    private readonly _http;
    private readonly _available;
    private readonly _polls;
    private readonly _respond;
    constructor(_http: HttpClient);
    fetch(): Promise<Array<PollEntry>>;
    questions(pollEntry: PollEntry): Promise<PollQuestions>;
    respond(pollEntry: PollEntry): Promise<PollQuestions>;
}
