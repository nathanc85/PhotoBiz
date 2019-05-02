import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-sessions-list></app-sessions-list>
  `
})
export class AppComponent {
  title = 'PhotoBiz';
}
