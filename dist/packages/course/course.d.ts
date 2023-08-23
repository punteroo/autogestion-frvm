import { HttpClient } from "../http/http.client";
import { StudentCourses } from "./student/course.student";
export interface ICourse {
    /** Accesses current courses being taken by the authenticated student. */
    student: StudentCourses;
}
export declare class Course implements ICourse {
    private readonly _http;
    student: StudentCourses;
    constructor(_http: HttpClient);
}
