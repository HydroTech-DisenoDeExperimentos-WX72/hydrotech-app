import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DataModel } from '../models/data.model';

@Injectable({
    providedIn: 'root'
})
export class DbService {
    baseUrl = 'http://localhost:3000/courses';

    constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };

    handleError(error: HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
        console.log(`An error ocurred ${error.status}, body was ${error.error}`);
      }
      else{
        console.log(`Backend returned code ${error.status}, body was ${error.error}`);
      }
      return throwError(
        'Something happened with request, please try again later'
      );
    }
    
    //GET
    getCourses(){
      return this.http.get<any[]>(this.baseUrl);
    }
}