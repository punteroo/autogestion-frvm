import { HttpClient } from "../http/http.client";
import { IPollingAvailable, PollingAvailable } from "./polling.available";

export interface IPolling {
  /**
   * Accesses the available polls resource.
   */
  available: IPollingAvailable;
}

export class Polling implements IPolling {
  available: IPollingAvailable;

  constructor(private readonly _http: HttpClient) {
    this.available = new PollingAvailable(_http);
  }
}
