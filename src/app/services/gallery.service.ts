import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://mongiafoundationapi.ourdemoservers.com/api/Gallery")
            .pipe(map((data: any) => data.data.ImageList ), 
                  catchError(error => { return throwError('Its a Trap!')})
            );
  }
}
