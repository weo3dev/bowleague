/* tslint:disable:no-unused-variable */
<<<<<<< HEAD
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';


=======
>>>>>>> 954dfc5c77f5fbcae2bdd6b4433a07d4f26a7585

import { TestBed, async, inject } from '@angular/core/testing';
import { TeamsService } from './teams.service';

describe('TeamsService', () => {
<<<<<<< HEAD
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


=======
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsService]
    });
  });

  it('should ...', inject([TeamsService], (service: TeamsService) => {
    expect(service).toBeTruthy();
  }));
});
>>>>>>> 954dfc5c77f5fbcae2bdd6b4433a07d4f26a7585
