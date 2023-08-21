"use strict";
var _HttpClient_baseUri, _HttpClient_accessToken;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const tslib_1 = require("tslib");
const axios_1 = require("axios");
class HttpClient {
    constructor(baseUri, username, password) {
        _HttpClient_baseUri.set(this, void 0);
        _HttpClient_accessToken.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _HttpClient_baseUri, baseUri, "f");
        tslib_1.__classPrivateFieldSet(this, _HttpClient_accessToken, Buffer.from(username && password ? `${username}:${password}` : "").toString("base64"), "f");
    }
    async request(resource, method, headers, body) {
        const url = `${tslib_1.__classPrivateFieldGet(this, _HttpClient_baseUri, "f")}/${resource}`;
        try {
            const { data } = await (0, axios_1.default)({
                method,
                url,
                headers: {
                    Authorization: `Basic ${tslib_1.__classPrivateFieldGet(this, _HttpClient_accessToken, "f")}`,
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
_HttpClient_baseUri = new WeakMap(), _HttpClient_accessToken = new WeakMap();
