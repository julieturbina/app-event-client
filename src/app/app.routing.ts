import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent  } from './event-list/event-list.component';
import { AddEventComponent  } from './add-event/add-event.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'signup', component: SignupComponent},
    // {path: 'login', component: LoginComponent},
    {path: 'home', component:  HomeComponent},
    { path: 'add', component: AddEventComponent},
    { path: 'list', component: EventListComponent},
    { path: 'events/:id', component: EventDetailComponent },
    
    { path: '**', redirectTo: '' }
];