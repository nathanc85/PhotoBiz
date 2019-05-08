import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <h1>New Session<h1>
  <hr>
  <div>
    <h3>[CREATE NEW SESSION FORM HERE]</h3>
    <br /><br />
    <button type="submit" class='btn btn-primary'>Save</button>
    <button type="button" class='btn btn-default' (click)="cancel()">Cancel</button>
  </div>
  `
})
export class CreateSessionComponent {
  moveOn = true;
  constructor(private route: Router) { }

  cancel() {
    this.route.navigate(['/sessions']);
  }
}
