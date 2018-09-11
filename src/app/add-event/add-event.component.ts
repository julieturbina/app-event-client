import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from "ng2-file-upload";
import { NgModule } from '@angular/core';
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

// ========= FOR TESTING NOT WORKING EFFECTIVELY =========???????????
export class AddEventComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api`, itemAlias: 'file'
  });

  newEvent = {
    genre: '',
    name: '',
    brand: '',
    specs: []
  };

  feedback: string = "";


  constructor(private session:SessionService) { }

  ngOnInit() {
      this.session.isLoggedIn()
      .subscribe(
        (user) => console.log("LOGG = ", user)
      );

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  addSpec(spec) {
    this.newEvent.specs.push(spec);
  }
      
  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('genre', this.newEvent.genre);
      form.append('name', this.newEvent.name);
      form.append('specs', JSON.stringify(this.newEvent.specs));
    };
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