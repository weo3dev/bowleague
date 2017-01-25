import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
<<<<<<< HEAD
import { Observable } from 'rxjs/Observable';

import { Team } from '../models/team';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
=======
import { Team } from '../models/team';
import { Observable } from 'rxjs/Observable';
>>>>>>> 954dfc5c77f5fbcae2bdd6b4433a07d4f26a7585

@Injectable()
export class TeamsService {

  private apiUrl: string = '/ng-bla/api/teams';

  constructor(private http: Http) {}

  getTeams(): Observable<Team[]> {
    return this.http.get(this.apiUrl)
    .map(res => res.json())
    .map(teams => teams.map(this.toTeam))
    .catch(this.handleError);
  }

<<<<<<< HEAD
  /* grab a single team */
=======
    /* grab a single team */
>>>>>>> 954dfc5c77f5fbcae2bdd6b4433a07d4f26a7585
  getTeam(id: any): Observable<Team> {
    return this.http.get(`${this.apiUrl}/${id}`)
    .map(res => res.json())
    .map(team => team.map(this.toTeam))
    .catch(this.handleError);
  }

<<<<<<< HEAD

=======
>>>>>>> 954dfc5c77f5fbcae2bdd6b4433a07d4f26a7585
  /* reformat the data to fit Team model */
  private toTeam(team:any): Team {
    return {
      id : team.tid,
      name : team.tname
    };
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}


