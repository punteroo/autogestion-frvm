"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollingAvailable = void 0;
class PollingAvailable {
    _http;
    _available = "encuestas/encuestas-disponibles";
    _polls = "encuestas/preguntas";
    _respond = "encuestas";
    constructor(_http) {
        this._http = _http;
    }
    async fetch() {
        const availablePolls = await this._http.request(this._available, "GET");
        return availablePolls;
    }
    async questions(pollEntry) {
        const questions = await this._http.request(this._polls, "POST", {}, pollEntry);
        return questions;
    }
    async respond(pollEntry) {
        const response = await this._http.request(this._respond, "POST", {}, pollEntry);
        return response;
    }
}
exports.PollingAvailable = PollingAvailable;
