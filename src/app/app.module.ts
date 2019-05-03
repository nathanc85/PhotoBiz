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

@NgModule({
  declarations: [
    AppComponent,
    SesssionsListComponent,
    SessionThumbnailComponent,
    SessionDetailsComponent,
    NavbarComponent
  ],
  providers: [SessionService, ToastrService],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
