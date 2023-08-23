"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const course_student_1 = require("./student/course.student");
class Course {
    constructor(_http) {
        this._http = _http;
        this.student = new course_student_1.StudentCourses(_http);
    }
}
exports.Course = Course;
