import { HttpHeaders } from '@angular/common/http';

export class HttpService {
  static SERVICE_PATH = "http://localhost:8080";

  static getDefaultHeaders(): HttpHeaders {
    const headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8'});
    return headers;
  }
}
