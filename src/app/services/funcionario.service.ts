import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Funcionario } from '../models/funcionario.model';

const baseUrl = 'http://localhost:8080/api/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }


createFuncionario(data: any): Observable<any> {
 
  return this.http.post(`${baseUrl}`, data)
    .pipe(
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
