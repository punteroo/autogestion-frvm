"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAcademic = void 0;
class StudentAcademic {
    constructor(_http) {
        this._http = _http;
        this._status = "estado-academico";
    }
    async fetch() {
        try {
            const status = await this._http.request(this._status, "GET");
            return status;
        }
        catch (e) {
            throw e;
        }
    }
}
exports.StudentAcademic = StudentAcademic;
