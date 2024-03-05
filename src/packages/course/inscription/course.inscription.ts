import {
  AvailableCourse,
  AvailableCourseCommission,
  EnrollCoursePayload,
  EnrollCourseResponse,
  UnenrollCourseResponse,
} from "../../../types/course/course.inscription";
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
  enroll(
    course: AvailableCourse,
    commission: AvailableCourseCommission
  ): Promise<EnrollCourseResponse>;

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

export class CourseInscription implements ICourseInscription {
  private readonly _inscription_available = "inscripcion-cursado";
  private readonly _inscription_commisions = "inscripcion-cursado/comisiones";
  private readonly _inscription = "inscripcion-cursado/inscribir";
  private readonly _unenroll = "inscripcion-cursado/anular";

  constructor(private readonly _http: HttpClient) {}

  public async fetchAvailable(): Promise<CourseInscriptionResponse> {
    const available = await this._http.request<CourseInscriptionResponse>(
      this._inscription_available,
      "GET"
    );

    return available;
  }

  public async fetchCommissions(
    course: AvailableCourse
  ): Promise<CourseCommissionsResponse> {
    const commissions = await this._http.request<CourseCommissionsResponse>(
      this._inscription_commisions,
      "POST",
      undefined,
      course
    );

    return commissions;
  }

  public async enroll(
    course: AvailableCourse,
    commission: AvailableCourseCommission
  ): Promise<EnrollCourseResponse> {
    // Build the enrollment payload.
    const payload: EnrollCoursePayload = {
      especialidad: commission.especialidad,
      plan: commission.plan,
      materia: commission.materia,
      comision: commission.comision,
      detalleMateria: course,
    };

    // Enroll the student into the course.
    const response = await this._http.request<EnrollCourseResponse>(
      this._inscription,
      "POST",
      undefined,
      payload
    );

    return response;
  }

  public async unenroll(
    course: AvailableCourse
  ): Promise<UnenrollCourseResponse> {
    // Build the unenrollment payload.
    const payload: EnrollCoursePayload = {
      especialidad: course.especialidadHomogenea,
      plan: course.planHomogenea,
      materia: course.codigoMateria,
      comision: course.comisionActual,
      detalleMateria: course,
    };

    // Unenroll the student from the course.
    const response = await this._http.request<UnenrollCourseResponse>(
      this._unenroll,
      "POST",
      undefined,
      payload
    );

    return response;
  }
}
