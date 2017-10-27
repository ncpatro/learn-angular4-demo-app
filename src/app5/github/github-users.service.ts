import { Injectable } from '@angular/core';

@Injectable()
export class GithubUsersService {
    getGithubUsers() {
        let githubUsers = [
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
            {
                "id": 6412038,
                "name": "React Community",
                "created_at": "2014-01-15T17:46:37Z",
                "blog": "https://reactcommunity.org",
                "public_repos": 29,
                "avatar_url": "https://avatars3.githubusercontent.com/u/6412038?v=4"
            }
        ];
        return githubUsers;
    }
}