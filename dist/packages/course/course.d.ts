import { HttpClient } from "../http/http.client";
import { ICourseInscription } from "./inscription/course.inscription";
import { IStudentCourses } from "./student/course.student";
export interface ICourse {
    /** Accesses current courses being taken by the authenticated student. */
    student: IStudentCourses;
    /** Course inscription context. */
    inscription: ICourseInscription;
}
export declare class Course implements ICourse {
    private readonly _http;
    student: IStudentCourses;
    inscription: ICourseInscription;
    constructor(_http: HttpClient);
}
