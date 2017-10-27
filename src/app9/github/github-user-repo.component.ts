import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubUserRepoService } from './github-user-repo.service';

@Component({
  selector: 'app-github-user-repo',
  templateUrl: './github-user-repo.component.html',
  styleUrls: ['./github-user-repo.component.css']
})
export class GithubUserRepoComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _githubUserRepoService: GithubUserRepoService,
    private _router: Router) {

  }
  pageTitle: string = "";
  gitHubUserRepos: any[] = [];

  ngOnInit() {
    let name = this._activatedRoute.snapshot.paramMap.get('name');
    this.pageTitle = `Repos of ${name}`;
    this._githubUserRepoService.getGithubUserRepos(name).subscribe(
      repos => { this.gitHubUserRepos = repos; console.log(this.gitHubUserRepos) },
      error => console.log(error))
  }

  onBack() {
    this._router.navigate(['/githubUsers']);
  }
}
