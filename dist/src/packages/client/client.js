"use strict";
var _Autogestion_username, _Autogestion_password;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autogestion = void 0;
const tslib_1 = require("tslib");
const course_calendar_1 = require("../course/calendar/course.calendar");
const course_1 = require("../course/course");
const exam_1 = require("../exam/exam");
const http_client_1 = require("../http/http.client");
const sections_1 = require("./sections/sections");
/**
 * Represents an authenticated instance of the Autogestion service.
 *
 * @class
 */
class Autogestion {
    constructor(username, password) {
        _Autogestion_username.set(this, void 0);
        _Autogestion_password.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _Autogestion_username, username, "f");
        tslib_1.__classPrivateFieldSet(this, _Autogestion_password, password, "f");
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
        tslib_1.__classPrivateFieldSet(this, _Autogestion_username, username, "f");
    }
    /**
     * Change the client's current password to perform a re-auth.
     *
     * @param {string} password The new password to use.
     *
     * @returns {void}
     */
    set password(password) {
        tslib_1.__classPrivateFieldSet(this, _Autogestion_password, password, "f");
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
     * @returns {ICourseResource} The Courses resource.
     */
    get courses() {
        return this._courses ?? (this._courses = new course_1.CourseResource(this._http));
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
     * Authenticates the current instance with the given credentials.
     *
     * @returns {Promise<Student>} The authenticated student information.
     */
    async authenticate() {
        try {
            const student = await this._http.request("login", "GET", {
                nick: tslib_1.__classPrivateFieldGet(this, _Autogestion_username, "f"),
                password: tslib_1.__classPrivateFieldGet(this, _Autogestion_password, "f"),
            });
            this.student = student;
            // Instance the client.
            this._http = new http_client_1.HttpClient("https://webservice.frvm.utn.edu.ar/autogestion", tslib_1.__classPrivateFieldGet(this, _Autogestion_username, "f"), student.hashActual);
            return student;
        }
        catch (e) {
            throw e;
        }
    }
}
exports.Autogestion = Autogestion;
_Autogestion_username = new WeakMap(), _Autogestion_password = new WeakMap();
