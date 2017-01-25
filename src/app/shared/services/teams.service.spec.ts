/* tslint:disable:no-unused-variable */
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';



import { TestBed, async, inject } from '@angular/core/testing';
import { TeamsService } from './teams.service';

describe('TeamsService', () => {
	let teamService: TeamsService;
	let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsService,MockBackend,BaseRequestOptions{
      	provide: Http,
      	useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
      	deps: [MockBackend, BaseRequestOptions]
      }]
    });
  });

  it('should return an Observable when "getTeams" is called', async(() => {
    expect(TestBed.get(TeamsService).getTeams()).toEqual(jasmine.any(Observable));
  }));

  it('should ...', inject([TeamsService], (service: TeamsService) => {
    expect(service).toBeTruthy();
  }));

});


