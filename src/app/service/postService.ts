import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


export interface Posts {
    userId: number,
    id: number,
    title: string,
    body: string,
}


@Injectable({
    providedIn: 'root'
  })
export class PostService {

    private apiURL = "https://jsonplaceholder.typicode.com/posts"; //YOUR API URL
    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json'
    //     })
    // }
    constructor(private httpClient: HttpClient) {}
    getPosts(): Observable < Posts[] > {
        return this.httpClient.get < Posts[] > (this.apiURL).pipe(catchError(this.errorHandler));
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