export declare class HttpClient {
    #private;
    constructor(baseUri: string, username: string, password: string, timeout?: number);
    request<T>(resource: string, method: "POST" | "GET" | "DELETE", headers?: any, body?: any): Promise<T>;
}
