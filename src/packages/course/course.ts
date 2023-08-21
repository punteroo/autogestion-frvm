import { HttpClient } from "../http/http.client";
import { StudentCourses } from "./student/course.student";

export interface ICourseResource {
    /** Accesses current courses being taken by the authenticated student. */
    student?: StudentCourses;
}

export class CourseResource implements ICourseResource {
    student?: StudentCourses;

    constructor(private readonly _http: HttpClient) {
        this.student = new StudentCourses(_http);
    }
}