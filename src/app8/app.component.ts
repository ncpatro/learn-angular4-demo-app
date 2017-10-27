import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      <nav class='navbar navbar-default'>
          <div class='container-fluid'>
              <a class='navbar-brand'>{{pageTitle}}</a>
              <ul class='nav navbar-nav'>
                  <li><a [routerLink]="['/home']">Home</a></li>
                  <li><a [routerLink]="['/githubUsers']">Github Users</a></li>
              </ul>
          </div>
      </nav>
      <div class='container'>
          <router-outlet></router-outlet>
      </div>
   </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Github Viewer Application';
}
