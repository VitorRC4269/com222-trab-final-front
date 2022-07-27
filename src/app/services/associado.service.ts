import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Associado } from '../models/associado.model';
const baseUrl = 'http://localhost:8080/api/associado';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }



  createAssociado(data: any): Observable<any> {
   
    return this.http.post(baseUrl, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  findAllAssociados(): Observable<any> {
  
    return this.http.get(baseUrl, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  login(data: any): Observable<any> {
   
    return this.http.post(`${baseUrl}/login`, data).pipe(
      catchError(this.errorHandler)
    )
     
  }



  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
