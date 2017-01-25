/* tslint:disable:no-unused-variable */

import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { TestBed, async, inject } from '@angular/core/testing';
import { StandingsService } from './standings.service';

describe('StandingsService', () => {
	let teamService: StandingsService;
	let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandingsService,MockBackend,BaseRequestOptions{
      	provide: Http,
      	useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
      	deps: [MockBackend, BaseRequestOptions]
      }]
    });
  });

  it('should return an Observable when "getLeagueStandings" is called', async(() => {
    expect(TestBed.get(StandingsService).getLeagueStandings()).toEqual(jasmine.any(Observable));
  }));

  it('should ...', inject([StandingsService], (service: StandingsService) => {
    expect(service).toBeTruthy();
  }));

});