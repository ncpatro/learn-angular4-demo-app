import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user-repo',
  templateUrl: './github-user-repo.component.html',
  styleUrls: ['./github-user-repo.component.css']
})
export class GithubUserRepoComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {

  }
  pageTitle: string = "";

  ngOnInit() {
    let name = this._route.snapshot.paramMap.get('name');
    this.pageTitle = `Repos of ${name}`;
  }

}
