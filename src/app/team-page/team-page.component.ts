import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Team } from '../shared/models/team';
import { Player } from '../shared/models/player';

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
  teamID: number;
  team: Team;  

  chartType = 'bar-vertical';
  chart: any;
  // chartWidth:number;
  // chartHeight:number;

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
  tooltipDisabled = true;
  autoScale = true;


  // future addition for color scheme: match the teams color(s) 
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#336699']
  }; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TeamsService,
    private winRef: WindowRef
  ) {

    this.teamID = this.route.snapshot.params['id'];

    // need to re-think this approach. Not exactly correct for all cases.
    // this.chartWidth = winRef.nativeWindow.innerWidth * .8;
    // this.chartHeight = winRef.nativeWindow.innerHeight * .5;
  }

  tab: number = 1;

  setTab(num: number) {
  this.tab = num;
  }

  isSelected(num: number) {
  return this.tab === num;
  }

  ngOnInit() {
    this.getTeam(this.teamID);
    Object.assign(this, this.chartData);
    // this.view = [this.chartWidth, this.chartHeight];
  }

/* temp name; orig was ngOnInit */
  getTeam(tid) {
    this.route.params
      .switchMap((params: Params) => this.service.getTeam(tid))
      .subscribe((team: Team) => this.team = team);
  }

  showTeam(which:string) {
    console.log('showing', which);
  }

  onSelect(event:any) {
    console.log(event);
  }

}


