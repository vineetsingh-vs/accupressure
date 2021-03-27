import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CoreHttpService {


  constructor(private http: HttpClient) {
  }

  public getData(url: string, options?: any): Observable<any> {
    return this.http.get(url, options);
  }

  public postData(url: string, body: any, options?: any): Observable<any> {
    return this.http.post<any>(url, body, options);
  }

  public putData(url: string, body: any, options?: any): Observable<any> {
    return this.http.put(url, body, options);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
