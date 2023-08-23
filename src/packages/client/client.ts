import { Calendar, ICalendar } from "../course/calendar/course.calendar";
import { CourseResource, ICourseResource } from "../course/course";
import { Exams, IExams } from "../exam/exam";
import { HttpClient } from "../http/http.client";
import { Student } from "./client.student";
import { ClientSections, IClientSections } from "./sections/sections";

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
export class Autogestion implements IAutogestion {
  student: Student;

  private _calendar: ICalendar;
  private _courses: ICourseResource;
  private _sections: IClientSections;
  private _exams: IExams;

  private _http: HttpClient;

  #username: string;
  #password: string;

  constructor(username: string);
  constructor(username: string, password: string);
  constructor(username: string, password?: string) {
    this.#username = username;
    this.#password = password;

    this._http = new HttpClient(
      "https://webservice.frvm.utn.edu.ar/autogestion",
      null,
      null
    );
  }

  /**
   * Change the client's current username to perform a re-auth.
   *
   * @param {string} username The new username to use.
   *
   * @returns {void}
   */
  set username(username: string) {
    this.#username = username;
  }

  /**
   * Change the client's current password to perform a re-auth.
   *
   * @param {string} password The new password to use.
   *
   * @returns {void}
   */
  set password(password: string) {
    this.#password = password;
  }

  /**
   * Accesses the Calendar resource within the Autogestion client.
   *
   * @returns {ICalendar} The Calendar resource.
   */
  get calendar(): ICalendar {
    return this._calendar ?? (this._calendar = new Calendar(this._http));
  }

  /**
   * Accesses the Courses resource within the Autogestion client.
   *
   * @returns {ICourseResource} The Courses resource.
   */
  get courses(): ICourseResource {
    return this._courses ?? (this._courses = new CourseResource(this._http));
  }

  /**
   * Accesses the Sections resource within the Autogestion client.
   *
   * @returns {IClientSections} The Sections resource.
   */
  get sections(): IClientSections {
    return this._sections ?? (this._sections = new ClientSections(this._http));
  }

  /**
   * Accesses the Exams resource within the Autogestion client.
   *
   * @returns {IExams} The Exams resource.
   */
  get exams(): IExams {
    return this._exams ?? (this._exams = new Exams(this._http));
  }

  public async authenticate(): Promise<Student>;
  public async authenticate(hash: string): Promise<Student>;
  public async authenticate(hash?: string): Promise<Student> {
    try {
      if (hash) {
        // Hash provided, just validate against the server.
        this.#password = hash;
        this._http = new HttpClient(
          "https://webservice.frvm.utn.edu.ar/autogestion",
          this.#username,
          hash
        );

        const valid = await this._http.request<boolean>("validar-hash", "GET");

        if (!valid) throw new Error("Invalid hash.");

        return null;
      }

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
