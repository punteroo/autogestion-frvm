"use strict";
var _Autogestion_username, _Autogestion_password;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autogestion = void 0;
const tslib_1 = require("tslib");
const course_calendar_1 = require("../course/calendar/course.calendar");
const course_1 = require("../course/course");
const http_client_1 = require("../http/http.client");
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
    set username(username) {
        tslib_1.__classPrivateFieldSet(this, _Autogestion_username, username, "f");
    }
    set password(password) {
        tslib_1.__classPrivateFieldSet(this, _Autogestion_password, password, "f");
    }
    get calendar() {
        return this._calendar ?? (this._calendar = new course_calendar_1.Calendar(this._http));
    }
    get courses() {
        return this._courses ?? (this._courses = new course_1.CourseResource(this._http));
    }
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
