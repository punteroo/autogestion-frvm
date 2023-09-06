"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
class Calendar {
    _http;
    _base = "fechas-cursado";
    constructor(_http) {
        this._http = _http;
    }
    async fetch() {
        try {
            const calendar = await this._http.request(this._base, "GET");
            calendar.format = () => {
                // Get only unique entries looking at the attached course name.
                const uniqueEntries = calendar.reduce((acc, curr) => {
                    if (!acc.some((entry) => entry.nombremateria === curr.nombremateria)) {
                        acc.push(curr);
                    }
                    return acc;
                }, []);
                // Sort the entries by course name.
                uniqueEntries.sort((a, b) => a.nombremateria.localeCompare(b.nombremateria));
                // Use fechaInicio and fechaFin to get the day and time the course takes place.
                uniqueEntries.forEach((entry) => {
                    const date = new Date(entry.fechaInicio);
                    entry["day"] = date.getDay();
                    entry["time"] = {
                        starts: entry.fechaInicio.split("T")?.[1]?.replace("Z", ""),
                        ends: entry.fechaFin.split("T")?.[1]?.replace("Z", ""),
                    };
                    delete entry.fechaInicio;
                    delete entry.fechaFin;
                });
                return uniqueEntries;
            };
            return calendar;
        }
        catch (e) {
            throw e;
        }
    }
}
exports.Calendar = Calendar;
