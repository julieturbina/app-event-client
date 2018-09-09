import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
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
  }

}
