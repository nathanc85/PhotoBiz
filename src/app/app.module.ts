import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SesssionsListComponent } from './sessions/sessions-list.component'
import { SessionThumbnailComponent } from './sessions/session-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    SesssionsListComponent,
    SessionThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
