import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  // mainURL:string = "http://localhost:3000";
  tempUser: any = {};
  constructor(private http: Http) { }
  
  handleError(e) {
    return throwError(console.log(e));
  }

  signup(user) {
    return this.http.post(`${environment.BASE_URL}/signup`, user, {withCredentials:true}).pipe(map(res => res.json()),catchError(this.handleError));
  }

  login(user) {
    return this.http.post(`${environment.BASE_URL}/login`, user, {withCredentials:true}).pipe(map(res => res.json()), catchError(this.handleError));
  }

  logout() {
    return this.http.post(`${environment.BASE_URL}/logout`, {}, {withCredentials: true}).pipe(map(res => {console.log('logout in sesson service'); return this.tempUser= null;}), catchError(this.handleError));
  }

  isLoggedIn() {
    return this.http.get(`${environment.BASE_URL}/loggedin`, {withCredentials: true})
    .pipe(map(res => { 
        this.tempUser = res;
        console.log('in sesson logged in is: ', JSON.parse(this.tempUser._body))
        return JSON.parse(this.tempUser._body)
      }
    ),
    catchError(this.handleError)
  );
      
  }

  getPrivateData() {
    return this.http.get(`${environment.BASE_URL}/private`, {withCredentials:true}).pipe(map(res => res.json()),catchError(this.handleError));
  }
}