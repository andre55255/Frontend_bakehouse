import { BASE_URL_API } from "../config";

interface ICustomOptions {
    refresh?: boolean,
    apiLocal?: boolean
}

interface IReturnFetch {
    ok?: boolean,
    status?: number,
    statusText?: string,
    body?: any
}

export async function httpClient(fetchUrl: RequestInfo, fetchOptions: RequestInit, customOptions: ICustomOptions) : Promise<IReturnFetch> {
    const defaultHeaders = fetchOptions.headers || {};
    const options = {
        ...fetchOptions,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            ...defaultHeaders,
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    };

    return fetch(customOptions.apiLocal ? fetchUrl : `${BASE_URL_API}${fetchUrl}`, options)
                .then(async (resp) => {
                    return {
                        ok: resp.ok,
                        status: resp.status,
                        statusText: resp.statusText,
                        body: await resp.json()
                    }
                })
                .catch(err => {
                    console.log(err);
                    throw new Error("Erro ao realizar requisição");
                });
}
