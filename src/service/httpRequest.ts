export enum METHOD {
  'GET' = 'get'
}

export class HttpRequest {
  private readonly baseUrl: string 
  constructor (baseURL: string) {
    this.baseUrl = baseURL
  }

  private async request<T> (method: METHOD, { endpoint = '', params, data }: { endpoint?: string, params?: RequestInit, data?: T }): Promise<T> {
    const options: RequestInit = {
      ...params,
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data && JSON.stringify(data)
    }

    const response = await fetch(this.baseUrl + endpoint, options)
    const results = await response.json() as Promise<T>
    return results    
  }

  async get<T> (endpoint?: string, params?: RequestInit): Promise<T> {
    return await this.request(METHOD.GET, { endpoint, params })
  }

}

export const http = new HttpRequest(process.env.URL_API || "")