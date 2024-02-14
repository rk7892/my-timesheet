import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Posts1 {
    userId: number,
    id: number,
    title: string,
    body: string,
    // date: Date,
    
}


@Injectable({
    providedIn: 'root'
  })
export class Post1Service {

    private apiURL = "https://jsonplaceholder.typicode.com/posts"; //YOUR API URL
    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json'
    //     })
    // }
    constructor(private httpClient: HttpClient) {}
    getPosts1(): Observable < Posts1[] > {
        return this.httpClient.get < Posts1[] > (this.apiURL).pipe(catchError(this.errorHandler));
    }

   

    
    errorHandler(error: {
        error: {
            message: string;
        };status: any;message: any;
    }) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}