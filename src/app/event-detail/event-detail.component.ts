import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEventDetails(params['id']);
    });
  }

  getEventDetails(id) {
    this.eventService.get(id)
      .subscribe((event) => {
        this.event = event;
      });
  }
}
