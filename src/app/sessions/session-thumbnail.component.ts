import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-session-thumbnail',
  template: `
    <div [routerLink]="['/sessions', session.id]" class="well hoverwell thumbnail">
      <div>{{session?.name}}</div>
      <div>Date: {{session?.date}}</div>
      <div [ngClass]="getSessionTimeClasses()"
        [ngStyle]="getSessionTimeStyles()"
        [ngSwitch]="session.time">
        Time: {{session?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early)</span>
        <span *ngSwitchCase="'10:00 am'">(Late)</span>
        <span *ngSwitchDefault>(Normal)</span>
      </div>
      <div>Price: \${{session?.price}}</div>
      <div *ngIf='session?.location'>
        Location:
        <span>{{session?.location?.address}}</span>
        <span class='pad-left'>{{session?.location?.city}}, {{session?.location?.country}}</span>
      </div>
      <div *ngIf='session?.onlineUrl'>Online url: {{session?.onlineUrl}}</div>
    </div>
  `,
  styles: [`
    .green{
      color: green !important;
    }

    .bold{
      font-weight: bold;
    }

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

  getSessionTimeClasses(){
    if (this.session && this.session.time === '8:00 am') {
        return ['green', 'bold'];
    }
    return [];
  }

  getSessionTimeStyles(){
    if (this.session && this.session.time === '10:00 am') {
      return {color: 'red', 'font-style': 'italic'};
  }
  return [];
  }

}

