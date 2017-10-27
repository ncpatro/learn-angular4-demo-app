import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IGithubUser } from './github';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GithubUsersService {
    constructor(private _http: HttpClient) {
    }
    private _githubUsersUrl: string = "http://www.mocky.io/v2/59f389ec320000771aa62618";

    getGithubUsers(): Observable<IGithubUser[]> {
        return this._http.get<IGithubUser[]>(this._githubUsersUrl)
            .catch(this.handleError)
            .do(data => console.log(`Data: ${JSON.stringify(data)}`));
    }

    handleError(error: HttpErrorResponse) {
        return Observable.throw(error.message);
    }
}