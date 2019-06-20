import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment'

const api = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})


export class PhimService {

  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get(api + url).pipe(
      tap(
        () => { },
        catchError((err: HttpErrorResponse) => { 
          return this.handleError(err); 
        })
      )
    );
  }
  handleError(err) {
    console.log('Loi ne!')
    return err;
  }

}
