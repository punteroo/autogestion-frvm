import { HttpClient } from "../http/http.client";
import { StudentCourses } from "./student/course.student";

export interface ICourse {
    /** Accesses current courses being taken by the authenticated student. */
    student: StudentCourses;
}

export class Course implements ICourse {
    student: StudentCourses;

    constructor(private readonly _http: HttpClient) {
        this.student = new StudentCourses(_http);
    }
}