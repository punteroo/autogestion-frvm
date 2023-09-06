"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
class HttpClient {
    #baseUri;
    #accessToken;
    constructor(baseUri, username, password) {
        this.#baseUri = baseUri;
        this.#accessToken = Buffer.from(username && password ? `${username}:${password}` : "").toString("base64");
    }
    async request(resource, method, headers, body) {
        const url = `${this.#baseUri}/${resource}`;
        try {
            const { data } = await (0, axios_1.default)({
                method,
                url,
                headers: {
                    Authorization: `Basic ${this.#accessToken}`,
                    ...(headers ?? {}),
                },
                data: body ?? undefined,
            });
            return data;
        }
        catch (e) {
            console.error(e?.response?.data ?? e?.message ?? e);
            throw new Error(e?.response?.data?.message ?? e?.message ?? e);
        }
    }
}
exports.HttpClient = HttpClient;
