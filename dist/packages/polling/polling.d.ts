import { HttpClient } from "../http/http.client";
import { IPollingAvailable } from "./polling.available";
export interface IPolling {
    /**
     * Accesses the available polls resource.
     */
    available: IPollingAvailable;
}
export declare class Polling implements IPolling {
    private readonly _http;
    available: IPollingAvailable;
    constructor(_http: HttpClient);
}
