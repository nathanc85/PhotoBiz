import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session.service';
import { ActivatedRoute } from '@angular/router';

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

export class SessionDetailsComponent implements OnInit {
  photoSession: any;

  constructor(private sessionService: SessionService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id_found = +this.route.snapshot.params['id'];
    console.log(id_found);
    this.photoSession = this.sessionService.getSession(id_found);
    //this.photoSession = this.sessionService.getSession(1);
  }
}
