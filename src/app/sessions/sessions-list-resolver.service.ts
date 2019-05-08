import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SessionService } from './shared/session.service';
import { map } from 'rxjs/operators';

@Injectable()
export class SessionListResolver implements Resolve<any> {
  constructor(private sessionService: SessionService) {

  }

  resolve() {
    return this.sessionService.getSessions().pipe(map(sessions => sessions));
  }
}
