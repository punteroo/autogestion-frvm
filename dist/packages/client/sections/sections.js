"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSections = void 0;
class ClientSections {
    _http;
    _sections = "secciones";
    constructor(_http) {
        this._http = _http;
    }
    async fetchAll() {
        const sections = await this._http.request(this._sections, "GET");
        return sections;
    }
}
exports.ClientSections = ClientSections;
