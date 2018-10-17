import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formInfo:any = {
    username: '',
    password: ''
  };

  user: any;
  error: string;
  privateData: any = '';

  constructor(private session: SessionService, private route: Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .toPromise()
    .then(userFromApi => {
      console.log('response in login is: ', userFromApi)
      this.user = userFromApi;
      // this.route.navigate(['/add'])
    })
    .catch( err => console.log('Error from login component: ',err))
      // .subscribe(
      //   (user) => this.successCb(user)
      // );
  }

  login() {
    this.session.login(this.formInfo)
      .subscribe(
        (user) => {
          console.log('am i here?????')
          this.successCb(user);
          this.route.navigate(['/add'])
        },
        (err) => this.errorCb(err)
      );
  }

  

  logout() {
    this.session.logout()
      .subscribe(
        () => this.successCb(null),
        (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }
  
  successCb(user) {
    this.user = user;
    this.error = null;
  }


}