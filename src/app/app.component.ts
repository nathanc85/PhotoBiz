import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Hello World</h2>
    <img src="assets/images/basic-shield.png"/>
    <sessions-list></sessions-list>
  `
})
export class AppComponent {
  title = 'PhotoBiz';
}
