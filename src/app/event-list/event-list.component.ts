import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventService]
})
export class EventListComponent implements OnInit {
  events:any=[];
  constructor(private event: EventService) { }

  ngOnInit() {
      // console.log(this.event);
      this.event.getList()
      .subscribe((events) => {
        console.log('events up in the house')
        this.events = events;
        console.log('events from api are: ', this.events)
      });
    }
  }
  


