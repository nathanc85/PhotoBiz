import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SesssionsListComponent } from './sessions/sessions-list.component';
import { SessionThumbnailComponent } from './sessions/session-thumbnail.component';
import { NavbarComponent} from './nav/navbar.component';
import { SessionService } from './sessions/shared/session.service';
import { ToastrService } from './common/toastr.service';
import { SessionDetailsComponent } from './sessions/session-details/session-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateSessionComponent } from './sessions/create-session.component';
import { Error404Component } from './errors/404error.component';
import { SessionRouteActivator } from './sessions/session-details/session-route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    SesssionsListComponent,
    SessionThumbnailComponent,
    SessionDetailsComponent,
    CreateSessionComponent,
    Error404Component,
    NavbarComponent
  ],
  providers: [
    SessionService,
    ToastrService,
    SessionRouteActivator,
    {
      provide: 'canDeactivateCreateSession',
      useValue: checkIfMoveOn
    }
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkIfMoveOn(comp: CreateSessionComponent) {
  if (comp.moveOn) {
    return window.confirm('Are you sure you want to move on?');
  }
}
