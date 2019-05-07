import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SessionService } from '../shared/session.service';

@Injectable()
export class SessionRouteActivator implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const sessionExists = !!this.sessionService.getSession(+route.params['id']);
    if (!sessionExists) {
      this.router.navigate(['/404']);
    }
    return sessionExists;
  }
}
