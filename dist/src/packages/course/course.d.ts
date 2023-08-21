import { HttpClient } from "../http/http.client";
import { StudentCourses } from "./student/course.student";
export interface ICourseResource {
    /** Accesses current courses being taken by the authenticated student. */
    student?: StudentCourses;
}
export declare class CourseResource implements ICourseResource {
    private readonly _http;
    student?: StudentCourses;
    constructor(_http: HttpClient);
}
