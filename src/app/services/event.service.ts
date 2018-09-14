import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn:'root'
})
export class EventService {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/events`)
      .pipe(map((res) => res.json()));
  }

  createEvent(event){
    console.log('event in service is: ', event)
    return this.http.post(`${environment.BASE_URL}/api/events`, event, {withCredentials: true})
    .pipe(map((res) => res.json()));
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/events/${id}`)
      .pipe(map((res) => res.json()));
  }

  edit(id,event) {
    console.log("id is : ", id)
    console.log('event is: ', event)
    return this.http.put(`${environment.BASE_URL}/api/events/${id}`, event, {withCredentials: true})
      .pipe(map((res) => res.json()));
  }

  remove(id) {
    return this.http.delete(`${environment.BASE_URL}/api/events/${id}`, {withCredentials: true})
      .pipe(map((res) => res.json()));
  }
}
