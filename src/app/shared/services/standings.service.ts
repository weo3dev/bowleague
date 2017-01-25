import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

<<<<<<< HEAD

/**
 * This class provides the StandingsList service with methods to read current standings.
 */
=======
>>>>>>> 954dfc5c77f5fbcae2bdd6b4433a07d4f26a7585
@Injectable()
export class StandingsService {

  private apiUrl: string = '/ng-bla/api/standings';

  constructor(private http: Http) {}

<<<<<<< HEAD
  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
=======
>>>>>>> 954dfc5c77f5fbcae2bdd6b4433a07d4f26a7585
  getLeagueStandings(): Observable<any[]> {
    return this.http.get(this.apiUrl)
    .map(res => res.json())
    .catch(this.handleError);
  }

<<<<<<< HEAD
  /**
    * Handle HTTP error
    */
=======
>>>>>>> 954dfc5c77f5fbcae2bdd6b4433a07d4f26a7585
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

