import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GithubUsersComponent } from './github/github-users.component';
import { GithubUsersService } from './github/github-users.service';
import { GithubUserRepoComponent } from './github/github-user-repo.component';
import { HomeComponent } from './home/home.component';
import { GithubUserRepoService } from './github/github-user-repo.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent,
    GithubUserRepoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'githubUsers', component: GithubUsersComponent },
      { path: 'githubUsers/:name', component: GithubUserRepoComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [GithubUsersService, GithubUserRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }


