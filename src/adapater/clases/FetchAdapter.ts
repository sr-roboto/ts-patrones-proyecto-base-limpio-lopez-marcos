import { IHttpClient } from '../interfaces/IHttpClient';

export class FetchAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`GET: ${url} - Usando FetchAdapter`);
    return data as T;
  }
}
