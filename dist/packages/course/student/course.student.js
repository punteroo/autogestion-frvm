"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCourses = exports.CourseStatus = void 0;
const course_student_academic_1 = require("./academic/course.student.academic");
var CourseStatus;
(function (CourseStatus) {
    /** The course is being taken by the student currently. */
    CourseStatus["ACTIVE"] = "0";
    /** The course was taken by the student in the past, and failed. */
    CourseStatus["LIBRE"] = "1";
    /** The course was taken by the student in the past, and has finished it partially (missing final grade/exam). */
    CourseStatus["REGULAR"] = "3";
    /** The course was taken by the student in the past, and has finished it completely. */
    CourseStatus["APROBADA"] = "4";
})(CourseStatus || (exports.CourseStatus = CourseStatus = {}));
class StudentCourses {
    constructor(_http) {
        this._http = _http;
        this._current = "MateriasCursando";
        this._historic = "MateriasCursando/historico";
        this._academic = new course_student_academic_1.StudentAcademic(_http);
    }
    /**
     * Accesses the student's academic information.
     *
     * @returns {IStudentAcademic}
     */
    get academic() {
        return this._academic;
    }
    async fetchActive() {
        const active = await this._http.request(this._current, "GET");
        // Remove the leading space from the course's name.
        active.detalles.forEach((course) => {
            course.nombreMateria = course.nombreMateria.trim();
            course.materia.nombre = course.materia.nombre.trim();
        });
        return active;
    }
    async fetchHistoric() {
        const historic = await this._http.request(this._historic, "GET");
        // Remove the leading space from the course's name.
        historic.detalles.forEach((course) => {
            course.nombreMateria = course.nombreMateria.trim();
            course.materia.nombre = course.materia.nombre.trim();
        });
        return historic;
    }
}
exports.StudentCourses = StudentCourses;
