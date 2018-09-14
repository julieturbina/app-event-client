import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SessionService],
})
export class SignupComponent implements OnInit {
  formInfo = {
    username: '',
    password: ''
  }
 
  error: string;

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        user => {
          return ;
        },
        err => {
          console.error(err)
        }
      )
  }


  signup(){
    this.session.signup(this.formInfo)
      .subscribe(
        user => {
          this.router.navigate(['/add'])
        },
        err => {
          console.error(err);
          this.error = err;
        }
      )
  }

}