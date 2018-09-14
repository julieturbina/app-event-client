import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from "../services/session.service";
import { FileSelectDirective, FileUploader } from "ng2-file-upload";
import { EventService } from '../services/event.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

// ========= FOR TESTING NOT WORKING EFFECTIVELY =========???????????
export class AddEventComponent implements OnInit {
 
  newEvent = {
    genre: '',
    name: '',
    image: '',
    specs: []
  };

  user;

  feedback: string = "";

  uploader = new FileUploader({
    url: environment.BASE_URL + "/api/events",
    itemAlias: "eventImg"
  });

  constructor(private session:SessionService, private router: Router,
  private eventService: EventService) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .toPromise()
    .then( userFromApi => {
      this.user = userFromApi;
    })
    .catch(err => {
      this.router.navigate(['/home']);
    })
     
  }

  addSpec(spec) {
    this.newEvent.specs.push(spec);
  }
      
  submit() {
    if (this.uploader.getNotUploadedItems().length === 0) {
      this.saveEventNoImage();
    } else {
      this.saveEventWithImage();
    }  }


  private saveEventNoImage(){
    console.log('event to be sent: ', this.newEvent)
    this.eventService.createEvent(this.newEvent)
    .toPromise()
    .then( () => {
      this.newEvent = {
        genre: '',
        name: '',
        image: '',
        specs: []
      };
      this.router.navigate(['/home'])
    })
    .catch( err => {
      this.feedback = "Well, saving event with no image went bad. Sorry!";
    })
  }





  private saveEventWithImage(){
    this.uploader.onBuildItemForm = (item, form) => {
      console.log("=============================")
      console.log("in onBuildItemForm - item", item);
      console.log("in onBuildItemForm - form", form);
      console.log("=============================");

      form.append('genre', this.newEvent.genre);
      form.append("name", this.newEvent.name);
      form.append("specs", this.newEvent.specs);
    }
    this.uploader.onSuccessItem = (item, response) =>{
      console.log("=============================");
      console.log("in onSuccessItem - item", item);
      console.log("in onSuccessItem - response", response);
      console.log("=============================");
      this.newEvent = {
        genre: '',
        name: '',
        image: '',
        specs: []
      };
        this.feedback = ""
        this.router.navigate(["/home"]);
    }
    this.uploader.onErrorItem = (item, response) => {
      this.feedback = "Saving phone with image went bad. Sorry!";
    }
    this.uploader.uploadAll();
  }

  isFormClean(): boolean {
    console.log('name == genre: ', this.newEvent.name === '' || this.newEvent.genre === '')

    if (this.newEvent.name === '' || this.newEvent.genre === '') {
      return window.confirm(`
          Unsaved changes.
          Are you sure you want to quit?
      `);
    }
  
    return true;
  }

}

