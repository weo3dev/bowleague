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

    // standings: any[] = [
    //   {"tid":9,"tname":"LOCAL TEAM1","wid":8,"wins":23,"loss":9,"pcnt":0.719,"tpins":18282},
    //   {"tid":4,"tname":"LOCAL TEAM2","wid":8,"wins":21,"loss":11,"pcnt":0.656,"tpins":18456},
    //   {"tid":3,"tname":"LOCAL TEAM3","wid":8,"wins":21,"loss":11,"pcnt":0.656,"tpins":17948},
    //   {"tid":14,"tname":"LOCAL TEAM4","wid":8,"wins":20,"loss":12,"pcnt":0.625,"tpins":18285},
    //   {"tid":1,"tname":"LOCAL TEAM5","wid":8,"wins":19,"loss":13,"pcnt":0.594,"tpins":18102},
    //   {"tid":6,"tname":"LOCAL TEAM6","wid":8,"wins":18,"loss":14,"pcnt":0.563,"tpins":18030},
    //   {"tid":5,"tname":"LOCAL TEAM7","wid":8,"wins":18,"loss":14,"pcnt":0.563,"tpins":17891},
    //   {"tid":2,"tname":"LOCAL TEAM8","wid":8,"wins":16.5,"loss":15.5,"pcnt":0.516,"tpins":18294}
    //   ];

    constructor (private standingsService: StandingsService) {}

    ngOnInit() {
      this.getCurrentStandings();
    }

  getCurrentStandings() {
    this.standingsService.getLeagueStandings()
    .subscribe(standings => this.standings = standings, error => this.errorMessage = <any>error);
  }

}

