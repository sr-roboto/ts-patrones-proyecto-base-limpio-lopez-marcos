import { IHttpClient } from '../interfaces/IHttpClient';
import { AxiosAdapter } from './AxiosAdapter';
import { FetchAdapter } from './FetchAdapter';

export class SimpleHttpClient {
  constructor(private adapter: IHttpClient) {}

  setAdapter(adapter: IHttpClient) {
    this.adapter = adapter;
  }

  get<T>(url: string): Promise<T> {
    return this.adapter.get(url);
  }
}
