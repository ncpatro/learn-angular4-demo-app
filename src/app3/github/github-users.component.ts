import { Component } from '@angular/core';

@Component({
    selector: 'github-users',
    templateUrl: './github-users.component.html'
})
export class GithubUsersComponent {
    pageTitle: string = 'Github Users';
    githubUsers: any[] = [
        {
            "id": 139426,
            "name": "Angular",
            "created_at": "2009-10-13T22:16:19Z",
            "blog": "https://angular.io",
            "public_repos": 169,
            "avatar_url": "https://avatars3.githubusercontent.com/u/139426?v=4"
        },
        {
            "id": 70142,
            "name": "jQuery",
            "created_at": "2009-04-03T15:18:52Z",
            "blog": "http://jquery.com",
            "public_repos": 45,
            "avatar_url": "https://avatars1.githubusercontent.com/u/70142?v=4"
        },
    ];
}