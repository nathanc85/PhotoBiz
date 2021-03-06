import { Component, OnInit } from '@angular/core';
import { SessionService } from './shared/session.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sessions-list',
  template: `
  <h1>Scheduled Photosessions</h1>
  <div class="row">
    <div class="col-md-5" *ngFor='let session_object of session_objects'>
      <app-session-thumbnail
      (click)="handleClickOnSession(session_object.name)"
      [session]='session_object'>
      </app-session-thumbnail>
    </div>
  </div>
  `
})
export class SesssionsListComponent implements OnInit {
  session_objects: any[];
  constructor(private photo_sessions: SessionService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.session_objects = this.route.snapshot.data['sessions'];
  }

  handleClickOnSession(session_name) {
    this.toastr.success(session_name, 'Note2');
  }
}
