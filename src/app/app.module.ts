import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SesssionsListComponent } from './sessions/sessions-list.component';
import { SessionThumbnailComponent } from './sessions/session-thumbnail.component';
import { NavbarComponent} from './nav/navbar.component';
import { SessionService } from './sessions/shared/session.service';

@NgModule({
  declarations: [
    AppComponent,
    SesssionsListComponent,
    SessionThumbnailComponent,
    NavbarComponent
  ],
  providers: [SessionService],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
