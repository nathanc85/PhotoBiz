import { Component } from '@angular/core';
import { SessionService } from '../shared/session.service';

@Component({
  templateUrl: 'session-details.component.html',
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .photo-session-image {
      height:100px;
    }
  `
  ]
})
export class SessionDetailsComponent {
  photoSession: any;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.photoSession = this.sessionService.getSession(1);
  }
}
