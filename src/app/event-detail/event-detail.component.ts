import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EventService } from '../services/event.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [EventService]
})
export class EventDetailComponent implements OnInit {
  event: any = {};
  user: any;
  public updatedEvent: Object = {};
  genre: string;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
    private session: SessionService
  ) { }

  
    ngOnInit() {    
      this.session.isLoggedIn()
      .toPromise()
      .then( res => {
        this.user = res;
      })
      .catch(err => {
        this.router.navigate(['/home']);
      })
      this.route.params.subscribe(params => {
        this.showEventDetails(params["id"]);
      });
    }
  
    showEventDetails(id){
      this.eventService.get(id)
      .toPromise()
      .then( oneEvent => {
        this.event = oneEvent;
      })
      .catch( err => console.log('Error while getting details in the event details component: ', err));
    }


    doTheUpdate(id,formData) {
      // console.log("=============== id: ", id);
      const formInfo = formData.form.controls;
      console.log("=============== formData: ", formInfo.phoneName);
      this.genre = formInfo.genre.value;
      this.name = formInfo.name.value;
      this.sendUpdatesToApi(id);
    }
  
    sendUpdatesToApi(id){
      this.updatedEvent = { genre: this.event.genre, name: this.event.name };
      console.log("updates:", this.updatedEvent)
      this.eventService.edit(id, this.updatedEvent)
        .toPromise()
        .then(()=>{
          this.router.navigate(['/home'])
        })
        .catch()
    }



  
  deleteEvent() {
    if (window.confirm('Are you sure?')) {
      this.eventService.remove(this.event._id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }
}
