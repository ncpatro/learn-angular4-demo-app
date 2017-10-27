import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="pageTitle">{{pageTitle}}</h1>
    <github-users></github-users>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Github App';
}
