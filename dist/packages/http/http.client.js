"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
class HttpClient {
    #baseUri;
    #accessToken;
    #timeout;
    constructor(baseUri, username, password, timeout = 60000) {
        this.#baseUri = baseUri;
        this.#accessToken = Buffer.from(username && password ? `${username}:${password}` : "").toString("base64");
        this.#timeout = timeout;
    }
    async request(resource, method, headers, body) {
        const url = `${this.#baseUri}/${resource}`;
        const request_controller = new AbortController();
        const timeout = setTimeout(() => {
            request_controller.abort("Request has exceeded the set timeout.");
            throw new Error("Request has exceeded the set timeout.");
        }, this.#timeout);
        try {
            const response = await axios_1.default.request({
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
        }
        catch (e) {
            clearTimeout(timeout);
            console.error(e?.response?.data ?? e?.message ?? e);
            if (e?.code === "ECONNABORTED")
                throw new Error(e?.message ?? "Request has exceeded the set timeout.");
            throw new Error(e?.response?.data?.message ?? e?.message ?? e);
        }
    }
}
exports.HttpClient = HttpClient;
