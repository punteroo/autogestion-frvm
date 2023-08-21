"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exams = void 0;
const exam_status_1 = require("./exam.status");
class Exams {
    constructor(_http) {
        this._http = _http;
        this.taken = new exam_status_1.TakenExams(_http);
    }
}
exports.Exams = Exams;
