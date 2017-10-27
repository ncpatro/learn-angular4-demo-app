import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from './github-users.service';
import { IGithubUser } from './github';

@Component({
    selector: 'github-users',
    templateUrl: './github-users.component.html',
    styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

    constructor(private _githubUsersService: GithubUsersService) {
    }

    pageTitle: string = 'Github Users';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    githubUsers: IGithubUser[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.githubUsers = this._githubUsersService.getGithubUsers();
        this.filterGithubUsers = this.githubUsers;
    }

    filterGithubUsers: IGithubUser[];
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filterGithubUsers = this.listFilter ? this.performFilter(this.listFilter) : this.githubUsers;
    }

    performFilter(value: string) {
        value = value.toLowerCase();
        return this.githubUsers.filter((githubUser) => {
            return githubUser.name.toLowerCase().indexOf(value) !== -1;
        });
    }
}