/* tslint:disable:no-unused-variable */

import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';


import { TestBed, async, inject } from '@angular/core/testing';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
	let teamService: PlayersService;
	let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersService,MockBackend,BaseRequestOptions{
      	provide: Http,
      	useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
      	deps: [MockBackend, BaseRequestOptions]
      }]
    });
  });

  it('should return an Observable when "getPlayers" is called', async(() => {
    expect(TestBed.get(PlayersService).getPlayers()).toEqual(jasmine.any(Observable));
  }));

  it('should ...', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));

});

