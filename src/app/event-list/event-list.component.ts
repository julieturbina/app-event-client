import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventService]
})
export class EventListComponent implements OnInit {
  events:any=[];
  user: any;
  constructor(private event: EventService, private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .toPromise()
    .then((userFromApi) => {
      this.user = userFromApi;
      console.log('user in event list : ', this.user);
    
    })
    .catch( err => err.json())
    this.event.getList()
    .subscribe((events) => {
      console.log('events up in the house')
      this.events = events;
      console.log('events from api are: ', this.events)
    });
    } 
  }
  


