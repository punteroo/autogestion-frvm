import axios from "axios";

export class HttpClient {
  #baseUri: string;

  #accessToken?: string;
  #timeout: number;

  constructor(
    baseUri: string,
    username: string,
    password: string,
    timeout = 60000
  ) {
    this.#baseUri = baseUri;
    this.#accessToken = Buffer.from(
      username && password ? `${username}:${password}` : ""
    ).toString("base64");

    this.#timeout = timeout;
  }

  async request<T>(
    resource: string,
    method: "POST" | "GET" | "DELETE",
    headers?: any,
    body?: any
  ): Promise<T> {
    const url = `${this.#baseUri}/${resource}`;

    const request_controller = new AbortController();

    const timeout = setTimeout(() => {
      request_controller.abort("Request has exceeded the set timeout.");
      throw new Error("Request has exceeded the set timeout.");
    }, this.#timeout);

    try {
      const response = await axios.request<T>({
        url,
        method,
        headers: {
          Authorization: `Basic ${this.#accessToken}`,
          ...headers,
        },
        data: body,
        timeout: this.#timeout,
        timeoutErrorMessage: "Request has exceeded the set timeout.",
        signal: request_controller.signal,
      });

      clearTimeout(timeout);
      
      return response.data;
    } catch (e) {
      clearTimeout(timeout);
      console.error(e?.response?.data ?? e?.message ?? e);

      if (e?.code === "ECONNABORTED")
        throw new Error(e?.message ?? "Request has exceeded the set timeout.");

      throw new Error(e?.response?.data?.message ?? e?.message ?? e);
    }
  }
}
