import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent  } from './event-list/event-list.component';
import { AddEventComponent  } from './add-event/add-event.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: EventListComponent  },
    { path: 'add', component: AddEventComponent },
    { path: 'add', component: EventListComponent },
    { path: 'event/:id', component: EventDetailComponent },
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '' }
];