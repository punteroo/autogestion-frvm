import { AvailableCourse, AvailableCourseCommission, EnrollCourseResponse, UnenrollCourseResponse } from "../../../types/course/course.inscription";
import { HttpResponse } from "../../../types/http.resource.response";
import { HttpClient } from "../../http/http.client";
type CourseInscriptionResponse = Pick<HttpResponse<unknown>, "persona"> & {
    /** List of available courses for this student. */
    materias: Array<AvailableCourse>;
};
type CourseCommissionsResponse = Pick<HttpResponse<unknown>, "persona"> & {
    /** A list of available commissions for a course. */
    comisiones: Array<AvailableCourseCommission>;
};
export interface ICourseInscription {
    /**
     * Obtains a list of courses available for inscription.
     *
     * @returns {Promise<CourseInscriptionResponse>} A list of available courses for inscription.
     */
    fetchAvailable(): Promise<CourseInscriptionResponse>;
    /**
     * Gets the commissions available for a given course.
     *
     * Commissions are the different careers where the course is available to enroll. This facilitates student schedules depending on course availability.
     *
     * @param {AvailableCourse} course The course to search for available commissions.
     *
     * @returns {Promise<CourseCommissionsResponse>} A list of available commissions for the given course.
     */
    fetchCommissions(course: AvailableCourse): Promise<CourseCommissionsResponse>;
    /**
     * Enrolls the student to a given course.
     *
     * Depending on the student's career, the course may have different commissions available.
     *
     * @param {AvailableCourse} course The course to enroll the student into.
     * @param {AvailableCourseCommission} commission The course commission to enroll the student into.
     *
     * @returns {Promise<EnrollCourseResponse>} A response with details about the enrollment.
     */
    enroll(course: AvailableCourse, commission: AvailableCourseCommission): Promise<EnrollCourseResponse>;
    /**
     * Unenrolls the student from a given course.
     *
     * This method will throw an error if the student is not enrolled in the given course.
     *
     * @param {AvailableCourse} course The course to unenroll the student from.
     *
     * @returns {Promise<UnenrollCourseResponse>} A response with details about the unenrollment.
     */
    unenroll(course: AvailableCourse): Promise<UnenrollCourseResponse>;
}
export declare class CourseInscription implements ICourseInscription {
    private readonly _http;
    private readonly _inscription_available;
    private readonly _inscription_commisions;
    private readonly _inscription;
    private readonly _unenroll;
    constructor(_http: HttpClient);
    fetchAvailable(): Promise<CourseInscriptionResponse>;
    fetchCommissions(course: AvailableCourse): Promise<CourseCommissionsResponse>;
    enroll(course: AvailableCourse, commission: AvailableCourseCommission): Promise<EnrollCourseResponse>;
    unenroll(course: AvailableCourse): Promise<UnenrollCourseResponse>;
}
export {};
