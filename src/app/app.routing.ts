import { Routes } from '@angular/router';

import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent  } from './event-list/event-list.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';

export const routes: Routes = [
    { path: '', component: EventListComponent  },
    { path: 'add', component: AddPhoneComponent },
    { path: 'event/:id', component: EventDetailComponent },
    { path: '**', redirectTo: '' }
];