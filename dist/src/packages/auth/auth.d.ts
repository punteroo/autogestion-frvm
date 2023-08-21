import { ICalendar } from "../course/calendar/course.calendar";
import { ICourseResource } from "../course/course";
import { Student } from "./auth.student";
export interface IAutogestion {
    /** The current logged in student information, if initialized. */
    student?: Student;
    /**
     * Authenticates the current instance with the given credentials.
     *
     * @param {string} username The student's username, generally being the student's identification code.
     * @param {string} password The student's password.
     *
     * @returns {Promise<Student>} The authenticated student information.
     */
    authenticate(username: string, password: string): Promise<Student>;
}
/**
 * Represents an authenticated instance of the Autogestion service.
 *
 * @class
 */
export declare class Autogestion implements IAutogestion {
    #private;
    student?: Student;
    /** Access the classes calendar namespace. */
    private _calendar?;
    /** Access the courses namespace. */
    private _courses?;
    /** HTTP client to make API requests. */
    private _http;
    constructor(username: string, password: string);
    set username(username: string);
    set password(password: string);
    get calendar(): ICalendar;
    get courses(): ICourseResource;
    authenticate(): Promise<Student>;
}
