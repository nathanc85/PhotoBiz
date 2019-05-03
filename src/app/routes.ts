import { Routes } from '@angular/router';
import { SesssionsListComponent } from './sessions/sessions-list.component';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';

export const appRoutes: Routes = [
  {path: 'sessions', component: SesssionsListComponent},
  {path: 'sessions/:id', component: SessionDetailsComponent},
  {path: '', redirectTo: '/sessions', pathMatch: 'full'}
];
