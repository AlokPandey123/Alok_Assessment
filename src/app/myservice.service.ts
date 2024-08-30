import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  getData(apiUrl: string): Observable<any[]> {
    return this.http.get<any[]>(apiUrl);
  }
}
