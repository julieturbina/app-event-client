import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `/events/`
  });

  newEvent = {
    type: '',
    name: '',
    details: []
  };

  feedback: string;

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  addDetails(detail) {
    this.newEvent.details.push(detail);
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('type', this.newEvent.type);
      form.append('name', this.newEvent.name);
      form.append('specs', JSON.stringify(this.newEvent.details));
    };

    this.uploader.uploadAll();
  }
}

