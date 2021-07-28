import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://mongiafoundationapi.ourdemoservers.com/api/Statics")
            .pipe(map((data: any) => data.data ), 
                  catchError(error => { return throwError('Its a Trap!')})
            );
  }
}
