import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Emprestimo } from '../models/emprestimo.model';


const baseUrl = 'https://com222-trab-final-back-production.up.railway.app/api/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createEmprestimo(data: any): Observable<any> {
  
    return this.http.post(baseUrl, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  
  findAtrasados(): Observable<any> {
 
    return this.http.get(`${baseUrl}/atrasados`, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  devolverExemplar(data: any): Observable<any> {
   
    return this.http.post(`${baseUrl}/devolver`, data)
      .pipe(
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
