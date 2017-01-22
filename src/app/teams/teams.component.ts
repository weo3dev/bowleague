import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../shared/services/teams.service';
import { Team } from '../shared/models/team';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamsService]
})
export class TeamsComponent implements OnInit {

  locprod = environment.production;
	errorMessage: string;
	teams: Team[];

    constructor (private teamService: TeamsService, private router:Router) {}

  ngOnInit() {
  	if(this.locprod) {
  		// production mode; use api for services
  		this.getTeamList();

  	} else {
  		// development mode; use local vars for services
			this.teams = [
				{"id":10,"name":"Bowlamania LOCAL"},
				{"id":4,"name":"Bowlkake LOCAL"},
				{"id":6,"name":"Butt Chuggers LOCAL"},
				{"id":16,"name":"C&M LOCAL"},
				{"id":9,"name":"Guttermouths LOCAL"},
				{"id":7,"name":"Hand Party LOCAL"},
				{"id":2,"name":"J.C. on M.T. LOCAL"},
				{"id":11,"name":"Keglers LOCAL"},
				{"id":1,"name":"Little Jerrys LOCAL"},
				{"id":13,"name":"PG-13 LOCAL"},
				{"id":12,"name":"Shots & Gutters LOCAL"},
				{"id":14,"name":"Split Happens LOCAL"},
				{"id":15,"name":"Team#15 LOCAL"},
				{"id":8,"name":"Team#8 LOCAL"},
				{"id":5,"name":"The Bowl Movements LOCAL"},
				{"id":3,"name":"Three & A Half Amigos LOCAL"}
			];
  	}
  }

  getTeamList() {
      this.teamService.getTeams()
      .subscribe(teams => this.teams = teams, error => this.errorMessage = <any>error);
  }

  viewTeamPage(id: number): void {
    this.router.navigate(['/teams'], id);
  }

}


