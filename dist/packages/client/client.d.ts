import { ICalendar } from "../course/calendar/course.calendar";
import { ICourse } from "../course/course";
import { IExams } from "../exam/exam";
import { IPolling } from "../polling";
import { Student } from "./client.student";
import { IClientSections } from "./sections/sections";
export interface IAutogestion {
    /** The current logged in student information, if initialized. */
    student: Student;
    /**
     * Authenticates the current instance with the given credentials.
     *
     * @returns {Promise<Student>} The authenticated student information.
     */
    authenticate(): Promise<Student>;
    /**
     * Authenticates the current instance using a student hash.
     *
     * @param {string} hash The student's hash.
     *
     * @returns {Promise<Student>} The authenticated student information.
     */
    authenticate(hash: string): Promise<Student>;
}
/**
 * Represents an authenticated instance of the Autogestion service.
 *
 * @class
 */
export declare class Autogestion implements IAutogestion {
    #private;
    student: Student;
    private _calendar;
    private _courses;
    private _sections;
    private _exams;
    private _polling;
    private _http;
    constructor(username: string);
    constructor(username: string, password: string);
    /**
     * Change the client's current username to perform a re-auth.
     *
     * @param {string} username The new username to use.
     *
     * @returns {void}
     */
    set username(username: string);
    /**
     * Change the client's current password to perform a re-auth.
     *
     * @param {string} password The new password to use.
     *
     * @returns {void}
     */
    set password(password: string);
    /**
     * Accesses the Calendar resource within the Autogestion client.
     *
     * @returns {ICalendar} The Calendar resource.
     */
    get calendar(): ICalendar;
    /**
     * Accesses the Courses resource within the Autogestion client.
     *
     * @returns {ICourse} The Courses resource.
     */
    get courses(): ICourse;
    /**
     * Accesses the Sections resource within the Autogestion client.
     *
     * @returns {IClientSections} The Sections resource.
     */
    get sections(): IClientSections;
    /**
     * Accesses the Exams resource within the Autogestion client.
     *
     * @returns {IExams} The Exams resource.
     */
    get exams(): IExams;
    /**
     * Accesses the Polling resource within the Autogestion client.
     *
     * @returns {IPolling} The Polling resource.
     */
    get polling(): IPolling;
    authenticate(): Promise<Student>;
    authenticate(hash: string): Promise<Student>;
}
