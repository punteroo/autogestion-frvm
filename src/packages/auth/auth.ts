import { Calendar, ICalendar } from "../course/calendar/course.calendar";
import { CourseResource, ICourseResource } from "../course/course";
import { HttpClient } from "../http/http.client";
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
export class Autogestion implements IAutogestion {
  student?: Student;

  /** Access the classes calendar namespace. */
  private _calendar?: ICalendar;

  /** Access the courses namespace. */
  private _courses?: ICourseResource;

  /** HTTP client to make API requests. */
  private _http: HttpClient;

  #username: string;
  #password: string;

  constructor(username: string, password: string) {
    this.#username = username;
    this.#password = password;

    this._http = new HttpClient(
      "https://webservice.frvm.utn.edu.ar/autogestion",
      null,
      null
    );
  }

  set username(username: string) {
    this.#username = username;
  }

  set password(password: string) {
    this.#password = password;
  }

  get calendar(): ICalendar {
    return this._calendar ?? (this._calendar = new Calendar(this._http));
  }

  get courses(): ICourseResource {
    return this._courses ?? (this._courses = new CourseResource(this._http));
  }

  public async authenticate(): Promise<Student> {
    try {
      const student = await this._http.request<Student>("login", "GET", {
        nick: this.#username,
        password: this.#password,
      });

      this.student = student;

      // Instance the client.
      this._http = new HttpClient(
        "https://webservice.frvm.utn.edu.ar/autogestion",
        this.#username,
        student.hashActual
      );

      return student;
    } catch (e) {
      throw e;
    }
  }
}
