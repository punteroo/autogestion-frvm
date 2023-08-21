"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResource = void 0;
const course_student_1 = require("./student/course.student");
class CourseResource {
    constructor(_http) {
        this._http = _http;
        this.student = new course_student_1.StudentCourses(_http);
    }
}
exports.CourseResource = CourseResource;
