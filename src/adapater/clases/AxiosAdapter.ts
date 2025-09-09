import { IHttpClient } from '../interfaces/IHttpClient';
import axios from 'axios';

export class AxiosAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await axios.get(url);
    console.log(`GET: ${url} - Usando AxiosAdapter`);
    return response.data as T;
  }
}
