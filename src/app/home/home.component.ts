import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../shared/services/standings.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StandingsService]
})
export class HomeComponent implements OnInit {

    errorMessage: string;
    standings: any[];
    mode = 'Observable';
    constructor (private standingsService: StandingsService) {}

    ngOnInit() {
      this.getCurrentStandings();
    }

  getCurrentStandings() {
    this.standingsService.getLeagueStandings()
    .subscribe(standings => this.standings = standings, error => this.errorMessage = <any>error);
  }

}

