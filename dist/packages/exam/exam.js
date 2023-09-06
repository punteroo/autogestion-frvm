"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exams = void 0;
const exam_status_1 = require("./exam.status");
const exam_inscription_1 = require("./inscription/exam.inscription");
class Exams {
    _http;
    taken;
    inscriptions;
    constructor(_http) {
        this._http = _http;
        this.taken = new exam_status_1.TakenExams(_http);
        this.inscriptions = new exam_inscription_1.ExamInscriptions(_http);
    }
}
exports.Exams = Exams;
