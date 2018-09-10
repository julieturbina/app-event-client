import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
 

})
export class EventListComponent implements OnInit {
  events: any;
  phones;

  constructor(private event: EventService) { }

  ngOnInit() {
    this.event.getList()
      .subscribe((events) => {
        this.events = events;
      });
  }
}
