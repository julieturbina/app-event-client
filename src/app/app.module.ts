import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from "@angular/http";
// import { FileUploadModule } from "ng2-file-upload"; //added recently

import { FormsModule } from "@angular/forms";

import { FileSelectDirective } from "ng2-file-upload";

import { SessionService } from "./services/session.service";
import { EventService } from './services/event.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AddEventComponent } from './add-event/add-event.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    EventDetailComponent,
    FileSelectDirective,
    AddEventComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
  ],
  providers: [ SessionService, EventService ],  //??????EventService recent addition
  bootstrap: [AppComponent]
})
export class AppModule { }
