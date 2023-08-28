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
export declare class StudentAcademic implements IStudentAcademic {
    private readonly _http;
    private readonly _status;
    constructor(_http: HttpClient);
    fetch(): Promise<HttpResponse<Array<AcademicStatusEntry>>>;
}
