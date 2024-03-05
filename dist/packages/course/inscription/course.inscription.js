"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseInscription = void 0;
class CourseInscription {
    _http;
    _inscription_available = "inscripcion-cursado";
    _inscription_commisions = "inscripcion-cursado/comisiones";
    _inscription = "inscripcion-cursado/inscribir";
    _unenroll = "inscripcion-cursado/anular";
    constructor(_http) {
        this._http = _http;
    }
    async fetchAvailable() {
        const available = await this._http.request(this._inscription_available, "GET");
        return available;
    }
    async fetchCommissions(course) {
        const commissions = await this._http.request(this._inscription_commisions, "POST", undefined, course);
        return commissions;
    }
    async enroll(course, commission) {
        // Build the enrollment payload.
        const payload = {
            especialidad: commission.especialidad,
            plan: commission.plan,
            materia: commission.materia,
            comision: commission.comision,
            detalleMateria: course,
        };
        // Enroll the student into the course.
        const response = await this._http.request(this._inscription, "POST", undefined, payload);
        return response;
    }
    async unenroll(course) {
        // Build the unenrollment payload.
        const payload = {
            especialidad: course.especialidadHomogenea,
            plan: course.planHomogenea,
            materia: course.codigoMateria,
            comision: course.comisionActual,
            detalleMateria: course,
        };
        // Unenroll the student from the course.
        const response = await this._http.request(this._unenroll, "POST", undefined, payload);
        return response;
    }
}
exports.CourseInscription = CourseInscription;
