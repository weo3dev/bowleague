import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../shared/services/teams.service';
import { Team } from '../shared/models/Team';

@Component({
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [ TeamsService ]
})
export class TeamsComponent implements OnInit {

    errorMessage: string;
    teams: Team[];
    mode = 'Observable';

    constructor (private teamsService: TeamsService, private router:Router) {}

    ngOnInit() {
        this.getTeamList();
    }

    getTeamList() {
        this.teamsService.getTeams()
        .subscribe(teams => this.teams = teams, error => this.errorMessage = <any>error);
    }

    viewTeamPage(id: number): void {
      this.router.navigate(['/teams'], id);
    }

}

