import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Team } from '../shared/models/team';
import { TeamsService } from '../shared/services/teams.service';

import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css'],
  providers: [TeamsService]
})
export class TeampageComponent implements OnInit {
  
  errorMessage: string;
  team: Team;  
  private chartData: Array<any>;

  constructor( private route: ActivatedRoute, private router: Router, private service: TeamsService) {}

  ngOnInit() {

    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

/* temp name; orig was ngOnInit */
  getAllDaTeams() {
    this.route.params
      .switchMap((params: Params) => this.service.getTeam(+params['id']))
      .subscribe((team: Team) => this.team = team);
  }

  onSelect(event:any) {
    console.log(event);
  }

}


