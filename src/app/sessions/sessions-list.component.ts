import { Component, OnInit } from '@angular/core';
import { SessionService } from './shared/session.service';

@Component({
  selector: 'app-sessions-list',
  template: `
  <h1>Scheduled Photosessions</h1>
  <div class="row">
    <div class="col-md-5" *ngFor='let session_object of session_objects'>
      <app-session-thumbnail
      [session]='session_object'>
      </app-session-thumbnail>
    </div>
  </div>
  `
})
export class SesssionsListComponent implements OnInit{
  session_objects: any[];
  constructor(private photo_sessions: SessionService) {

  }

  ngOnInit() {
    this.session_objects = this.photo_sessions.getSessions();
  }
}
