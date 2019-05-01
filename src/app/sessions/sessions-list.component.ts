import { Component } from "@angular/core";

@Component({
  selector: 'sessions-list',
  template: `
  <h1>Scheduled Photosessions</h1>
  <div>
    <session-thumbnail [session]='session_value'></session-thumbnail>
  </div>
  `
})
export class SesssionsListComponent {
  session_value = {
    id: 1,
    name: 'The Smiths',
    date: '02/05/2019',
    time: '10:00AM',
    price: 300,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '123 Main St.',
      city: 'Charlotte',
      country: 'US'
    }
  };
}