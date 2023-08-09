import axios from "axios";
import { HttpClient } from "../http/http.client";

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

  /** The career this course belongs to. */
  especialidad: string;

  /** A concatenated string with all the teacher names in the course. */
  docente: string;

  /** The specific year the course is dictated in. */
  anio: number;
}

export interface CourseCalendar {
  /**
   * Searches for all calendar entries present for the logged in student.
   *
   * @noparams
   *
   * @returns {Promise<Array<CourseCalendarEntry>>} The course calendar entries.
   */
  fetch(): Promise<Array<CourseCalendarEntry>>;
}

export class Calendar implements CourseCalendar {
  private readonly _calendar = "fechas-cursado";

  constructor(private readonly _http: HttpClient) {}

  public async fetch(): Promise<Array<CourseCalendarEntry>> {
    try {
      const calendar = await this._http.request<Array<CourseCalendarEntry>>(
        this._calendar,
        "GET"
      );

      return calendar;
    } catch (e) {
      throw e;
    }
  }
}
