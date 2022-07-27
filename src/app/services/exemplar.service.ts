import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Exemplar } from '../models/exemplar.model';

const baseUrl = 'http://localhost:8080/api/exemplar';

@Injectable({
  providedIn: 'root'
})
export class ExemplarService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  createExemplar(data: any): Observable<any> {
  
    return this.http.post(baseUrl, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  findAllByIsbn(isbn: string): Observable<any> {

    return this.http.get(`${baseUrl}/isbn/${isbn}`, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }
  
  findExemplaresDisponiveis(isbn: string): Observable<any> {
   
    return this.http.get(`${baseUrl}/disponiveis/${isbn}`, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
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
