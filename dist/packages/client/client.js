"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autogestion = void 0;
const course_calendar_1 = require("../course/calendar/course.calendar");
const course_1 = require("../course/course");
const exam_1 = require("../exam/exam");
const http_client_1 = require("../http/http.client");
const polling_1 = require("../polling");
const sections_1 = require("./sections/sections");
/**
 * Represents an authenticated instance of the Autogestion service.
 *
 * @class
 */
class Autogestion {
    student;
    _calendar;
    _courses;
    _sections;
    _exams;
    _polling;
    _http;
    #username;
    #password;
    constructor(username, password) {
        this.#username = username;
        this.#password = password;
        this._http = new http_client_1.HttpClient("https://webservice.frvm.utn.edu.ar/autogestion", null, null);
    }
    /**
     * Change the client's current username to perform a re-auth.
     *
     * @param {string} username The new username to use.
     *
     * @returns {void}
     */
    set username(username) {
        this.#username = username;
    }
    /**
     * Change the client's current password to perform a re-auth.
     *
     * @param {string} password The new password to use.
     *
     * @returns {void}
     */
    set password(password) {
        this.#password = password;
    }
    /**
     * Accesses the Calendar resource within the Autogestion client.
     *
     * @returns {ICalendar} The Calendar resource.
     */
    get calendar() {
        return this._calendar ?? (this._calendar = new course_calendar_1.Calendar(this._http));
    }
    /**
     * Accesses the Courses resource within the Autogestion client.
     *
     * @returns {ICourse} The Courses resource.
     */
    get courses() {
        return this._courses ?? (this._courses = new course_1.Course(this._http));
    }
    /**
     * Accesses the Sections resource within the Autogestion client.
     *
     * @returns {IClientSections} The Sections resource.
     */
    get sections() {
        return this._sections ?? (this._sections = new sections_1.ClientSections(this._http));
    }
    /**
     * Accesses the Exams resource within the Autogestion client.
     *
     * @returns {IExams} The Exams resource.
     */
    get exams() {
        return this._exams ?? (this._exams = new exam_1.Exams(this._http));
    }
    /**
     * Accesses the Polling resource within the Autogestion client.
     *
     * @returns {IPolling} The Polling resource.
     */
    get polling() {
        return this._polling ?? (this._polling = new polling_1.Polling(this._http));
    }
    async authenticate(hash) {
        try {
            if (hash) {
                // Hash provided, just validate against the server.
                this.#password = hash;
                this._http = new http_client_1.HttpClient("https://webservice.frvm.utn.edu.ar/autogestion", this.#username, hash);
                const valid = await this._http.request("validar-hash", "GET");
                if (!valid)
                    throw new Error("Invalid hash.");
                return null;
            }
            const student = await this._http.request("login", "GET", {
                nick: this.#username,
                password: this.#password,
            });
            this.student = student;
            // Instance the client.
            this._http = new http_client_1.HttpClient("https://webservice.frvm.utn.edu.ar/autogestion", this.#username, student.hashActual);
            return student;
        }
        catch (e) {
            throw e;
        }
    }
}
exports.Autogestion = Autogestion;
