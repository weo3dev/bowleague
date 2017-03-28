import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Team } from '../shared/models/team';
import { TeamsService } from '../shared/services/teams.service';

import { WindowRef } from '../WindowRef';

import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css'],
  providers: [TeamsService, WindowRef]
})
export class TeampageComponent implements OnInit {
  
  errorMessage: string;
  team: Team;  

  chartType = 'bar-vertical';
  chart: any;
  chartWidth:number;
  chartHeight:number;

  chartData = [
    {
      "name": "weekly scores",
      "series": [
        {
          "value": 2154,
          "name": "week 1"
        },
        {
          "value": 2808,
          "name": "week 2"
        },
        {
          "value": 2918,
          "name": "week 3"
        },
        {
          "value": 3276,
          "name": "week 4"
        },
        {
          "value": 2470,
          "name": "week 5"
        }
      ]
    }
  ];

  // options
  //single: any[];
  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'xAxis';
  showYAxisLabel = false;
  yAxisLabel = 'yAxis';
  showToolTip = false;
  fitContainer = true;
  autoScale = true;


  // small detail for color scheme, match the teams color(s)
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#336699']
  }; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TeamsService,
    private winRef: WindowRef
  ) {

    //Object.assign(this, this.single );

    this.chartWidth = winRef.nativeWindow.innerWidth * .8;
    this.chartHeight = winRef.nativeWindow.innerHeight * .5;
  }

  ngOnInit() {
    Object.assign(this, this.chartData);
    this.view = [this.chartWidth, this.chartHeight];
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


