import axios from "axios";

export class HttpClient {
  #baseUri: string;

  #accessToken?: string;

  constructor(baseUri: string, username: string, password: string) {
    this.#baseUri = baseUri;
    this.#accessToken = Buffer.from(
      username && password ? `${username}:${password}` : ""
    ).toString("base64");
  }

  async request<T>(
    resource: string,
    method: "POST" | "GET" | "DELETE",
    headers?: any,
    body?: any
  ): Promise<T> {
    const url = `${this.#baseUri}/${resource}`;

    try {
      const { data } = await axios<T>({
        method,
        url,
        headers: {
          Authorization: `Basic ${this.#accessToken}`,
          ...(headers ?? {}),
        },
        data: body ?? undefined,
      });

      return data;
    } catch (e) {
      console.error(e?.response?.data ?? e?.message ?? e);
      throw new Error(e?.response?.data?.message ?? e?.message ?? e);
    }
  }
}
