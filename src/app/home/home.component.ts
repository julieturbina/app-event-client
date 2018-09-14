import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  
  constructor(
  private session: SessionService, private route:Router
) { }

ngOnInit(){
  this.session.isLoggedIn()
  .toPromise()
  .then(userFromApi => {
    console.log('response in home is: ', userFromApi)
    this.user = userFromApi;
  })
  .catch( (err) => {
    console.log(err);
  })
}
  }