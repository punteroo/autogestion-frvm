import { HttpClient } from "../../http/http.client";
/**
 * An entry in the course calendar.
 *
 * The calendar is composed of various entries for each week day until the course ends. This is used to form the full calendar for all weeks withing the university.
 */
export interface CourseCalendarEntry {
    /** The room number where the course takes place. */
    aula?: number;
    /** A clearer name for the room. */
    aulaNombre?: string;
    /** An unique identified for the course. */
    id: number;
    /** The course name that takes place in this room. */
    nombremateria: string;
    /** An ISO8601 timestamp where the course starts. */
    fechaInicio: string;
    /** An ISO8601 timestamp where the course ends. */
    fechaFin: string;
    /** Custom generated field that holds the day of the week the class takes place. */
    day?: number;
    /** Custom generated field that holds the time values for which the class takes place. */
    time?: {
        /** The time in GMT-3 for which the class starts. */
        starts: string;
        /** The time in GMT-3 for which the class ends. */
        ends: string;
    };
    /** The career this course belongs to. */
    especialidad: string;
    /** A concatenated string with all the teacher names in the course. */
    docente: string;
    /** The specific year the course is dictated in. */
    anio: number;
}
export interface ICalendar {
    /**
     * Searches for all calendar entries present for the logged in student.
     *
     * @noparams
     *
     * @returns {Promise<Array<CourseCalendarEntry> & CalendarMethods>} The course calendar entries.
     */
    fetch(): Promise<Array<CourseCalendarEntry> & CalendarMethods>;
}
interface CalendarMethods {
    /**
     * Filters all calendar entries by course name and returns only the day and time the course takes place.
     *
     * @noparams
     *
     * @returns {Array<CourseCalendarEntry>} The course calendar entries.
     */
    format(): Array<CourseCalendarEntry>;
}
export declare class Calendar implements ICalendar {
    private readonly _http;
    private readonly _base;
    constructor(_http: HttpClient);
    fetch(): Promise<Array<CourseCalendarEntry> & CalendarMethods>;
}
export {};
