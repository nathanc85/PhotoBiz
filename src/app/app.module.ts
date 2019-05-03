import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SesssionsListComponent } from './sessions/sessions-list.component';
import { SessionThumbnailComponent } from './sessions/session-thumbnail.component';
import { NavbarComponent} from './nav/navbar.component';
import { SessionService } from './sessions/shared/session.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    SesssionsListComponent,
    SessionThumbnailComponent,
    NavbarComponent
  ],
  providers: [SessionService, ToastrService],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
