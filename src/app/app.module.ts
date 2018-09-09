import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { FileSelectDirective } from "ng2-file-upload";

import { SessionService } from "./services/session.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    EventDetailComponent,
    FileSelectDirective,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,

  ],
  providers: [ SessionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
