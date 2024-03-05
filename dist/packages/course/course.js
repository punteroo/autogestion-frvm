"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const course_inscription_1 = require("./inscription/course.inscription");
const course_student_1 = require("./student/course.student");
class Course {
    _http;
    student;
    inscription;
    constructor(_http) {
        this._http = _http;
        this.student = new course_student_1.StudentCourses(_http);
        this.inscription = new course_inscription_1.CourseInscription(_http);
    }
}
exports.Course = Course;
