import { AcademicStatusEntry } from "../../../../types";
import { HttpResponse } from "../../../../types/http.resource.response";
import { HttpClient } from "../../../http/http.client";

export interface IStudentAcademic {
  /**
   * Searches for the authenticated student's academic status.
   *
   * @noparams
   *
   * @returns {Promise<HttpResponse<Array<AcademicStatusEntry>>>}
   */
  fetch(): Promise<HttpResponse<Array<AcademicStatusEntry>>>;
}

export class StudentAcademic implements IStudentAcademic {
  private readonly _status = "estado-academico";

  constructor(private readonly _http: HttpClient) {}

  public async fetch(): Promise<HttpResponse<Array<AcademicStatusEntry>>> {
    try {
      const status = await this._http.request<
        HttpResponse<Array<AcademicStatusEntry>>
      >(this._status, "GET");

      return status;
    } catch (e) {
      throw e;
    }
  }
}
