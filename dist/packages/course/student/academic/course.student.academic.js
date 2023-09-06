"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAcademic = void 0;
class StudentAcademic {
    _http;
    _status = "estado-academico";
    constructor(_http) {
        this._http = _http;
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
