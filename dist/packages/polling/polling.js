"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polling = void 0;
const polling_available_1 = require("./polling.available");
class Polling {
    constructor(_http) {
        this._http = _http;
        this.available = new polling_available_1.PollingAvailable(_http);
    }
}
exports.Polling = Polling;
