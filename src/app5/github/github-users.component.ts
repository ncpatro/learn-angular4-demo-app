import { Component } from '@angular/core';
import { GithubUsersService } from './github-users.service';

@Component({
    selector: 'github-users',
    templateUrl: './github-users.component.html'
})
export class GithubUsersComponent {

    constructor(private _githubUsersService: GithubUsersService) {
    }

    pageTitle: string = 'Github Users';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'js';
    githubUsers: any[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.githubUsers = this._githubUsersService.getGithubUsers();
    }
}