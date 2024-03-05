import { HttpClient } from "../http/http.client";
import {
  ICourseInscription,
  CourseInscription,
} from "./inscription/course.inscription";
import { IStudentCourses, StudentCourses } from "./student/course.student";

export interface ICourse {
  /** Accesses current courses being taken by the authenticated student. */
  student: IStudentCourses;

  /** Course inscription context. */
  inscription: ICourseInscription;
}

export class Course implements ICourse {
  student: IStudentCourses;

  inscription: ICourseInscription;

  constructor(private readonly _http: HttpClient) {
    this.student = new StudentCourses(_http);
    this.inscription = new CourseInscription(_http);
  }
}
