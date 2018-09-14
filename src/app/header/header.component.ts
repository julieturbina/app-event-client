import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private session:SessionService, private router: Router) { }
  logoutError: string = '';

  ngOnInit() {
  }

  logout() {
    this.session
      .logout()
      .toPromise()
      .then(() => {
        this.router.navigate(["/home"]);
        location.reload();

      })
      .catch(() => {
        this.logoutError = "Log out went bad.";
      });
  } 
}
