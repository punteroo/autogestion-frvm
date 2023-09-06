"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamInscriptions = void 0;
class ExamInscriptions {
    _http;
    _available = "inscripcion-examenes";
    _turns = "inscripcion-examenes/listar-turnos";
    _inscription = "inscripcion-examenes/inscribir";
    _void = "inscripcion-examenes/anular";
    constructor(_http) {
        this._http = _http;
    }
    async fetchAvailableExams() {
        const availableExams = await this._http.request(this._available, "GET");
        return availableExams;
    }
    async fetchTurnsForExam(specialty, planYear, courseId) {
        // Ask for available turns to the Autogestión API.
        const body = {
            especialidad: specialty,
            plan: planYear,
            codigoMateria: courseId,
        };
        const availableTurns = await this._http.request(this._turns, "POST", { "Content-Type": "application/json" }, body);
        // Return them.
        return availableTurns;
    }
    async enroll(exam, turn, selectedTurn) {
        // Build the request body for the enrollment request.
        const body = {
            materia: exam,
            fecha: {
                ...turn,
                horarioSeleccionado: selectedTurn,
            },
        };
        // Enroll the student to the given exam.
        const enrollment = await this._http.request(this._inscription, "POST", { "Content-Type": "application/json" }, body);
        // Return metadata about the enrollment.
        return enrollment;
    }
    async voidEnrollment(exam) {
        // Void the enrollment.
        const voidedExam = await this._http.request(this._void, "POST", { "Content-Type": "application/json" }, exam);
        // Return metadata about the voiding.
        return voidedExam;
    }
}
exports.ExamInscriptions = ExamInscriptions;
