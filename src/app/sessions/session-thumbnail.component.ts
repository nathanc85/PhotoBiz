import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-session-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <div>{{session?.name}}</div>
      <div>Date: {{session?.date}}</div>
      <div>Time: {{session?.time}}</div>
      <div>Price: \${{session?.price}}</div>
      <div *ngIf='session.location'>
        Location:
        <span>{{session?.location?.address}}</span>
        <span class='pad-left'>{{session?.location?.city}}, {{session?.location?.country}}</span>
      </div>
      <div *ngIf='session.onlineUrl'>Online url: {{session?.onlineUrl}}</div>
    </div>
  `,
  styles: [`
    .thumbnail{
      min-height:180px;
    }

    .pad-left{
      margin-left: 10px;
    }

    .well div {
      color: #bbb;
    }
  `]
})
export class SessionThumbnailComponent {
  @Input() session: any;
}

