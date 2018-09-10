import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  
  constructor(
  private session: SessionService
) { }
ngOnInit(){
  this.session.isLoggedIn()
    .subscribe(
      user => {
        this.user = user;
      },
      err => {
        console.error(err);
      })
    }
  }
