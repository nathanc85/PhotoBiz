import { Component, Input, Output, EventEmitter } from "@angular/core"
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'session-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <div>{{session.name}}</div>
      <div>{{session.date}}</div>
      <div>{{session.time}}</div>
      <div>\${{session.price}}</div>
      <div>
        <span>{{session.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{session.location.city}}, {{session.location.country}}</span>
      </div>
    </div>
  `
})
export class SessionThumbnailComponent {
  @Input() session: any;
  @Output() sessionClick = new EventEmitter();
  session_message = 'Session #1';

  handleClick() {
    console.log('Clicked');
  }
} 