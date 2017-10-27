import { Component } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styles: ['h2 { font-weight: normal; }']
})
export class HomeComponent {
    public pageTitle: string = 'Learn Angular4';
}