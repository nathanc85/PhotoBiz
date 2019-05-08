import { Routes } from '@angular/router';
import { SesssionsListComponent } from './sessions/sessions-list.component';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';
import { CreateSessionComponent } from './sessions/create-session.component';
import { Error404Component } from './errors/404error.component';
import { SessionRouteActivator } from './sessions/session-details/session-route-activator.service';
import { SessionListResolver } from './sessions/sessions-list-resolver.service';

export const appRoutes: Routes = [
  {path: 'sessions', component: SesssionsListComponent,
    resolve: {sessions: SessionListResolver}},
  {path: 'sessions/new', component: CreateSessionComponent,
    canDeactivate: ['canDeactivateCreateSession']
  },
  {path: 'sessions/:id', component: SessionDetailsComponent, canActivate: [SessionRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/sessions', pathMatch: 'full'}
];
