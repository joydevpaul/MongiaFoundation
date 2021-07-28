import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://mongiafoundationapi.ourdemoservers.com/api/Volunteers")
            .pipe(map((data: any) => data.data ), 
                  catchError(error => { return throwError('Its a Trap!')})
            );
  }
}
