import { Routes } from '@angular/router';
import { SesssionsListComponent } from './sessions/sessions-list.component';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';
import { CreateSessionComponent } from './sessions/create-session.component';

export const appRoutes: Routes = [
  {path: 'sessions', component: SesssionsListComponent},
  {path: 'sessions/new', component: CreateSessionComponent},
  {path: 'sessions/:id', component: SessionDetailsComponent},
  {path: '', redirectTo: '/sessions', pathMatch: 'full'}
];
