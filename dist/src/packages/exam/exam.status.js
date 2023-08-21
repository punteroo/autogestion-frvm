"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakenExams = void 0;
class TakenExams {
    constructor(_http) {
        this._http = _http;
        this._taken = "examenes";
    }
    async fetch() {
        const takenExams = await this._http.request(this._taken, "GET");
        return takenExams;
    }
}
exports.TakenExams = TakenExams;
