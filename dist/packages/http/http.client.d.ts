export declare class HttpClient {
    #private;
    constructor(baseUri: string, username: string, password: string);
    request<T>(resource: string, method: "POST" | "GET" | "DELETE", headers?: any, body?: any): Promise<T>;
}
