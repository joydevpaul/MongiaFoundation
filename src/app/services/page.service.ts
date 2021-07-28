import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PageService {
  
  constructor(private http:HttpClient, private router: Router) {
    
  }
  getData(){
    var splitted = this.router.url.split("/", 10);
    return this.http.get("http://mongiafoundationapi.ourdemoservers.com/api/Page/" + splitted[2])
            .pipe(map((data: any) => data ), 
                  catchError(error => { return throwError('Its a Trap!')})
            );
  }
}
