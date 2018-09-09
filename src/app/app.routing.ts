import { Routes } from '@angular/router';

import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent  } from './event-list/event-list.component';
import { AddEventComponent } from './add-event/add-event.component';

export const routes: Routes = [
    { path: '', component: EventListComponent  },
    { path: 'add', component: AddEventComponent },
    { path: 'event/:id', component: EventDetailComponent },
    { path: '**', redirectTo: '' }
];