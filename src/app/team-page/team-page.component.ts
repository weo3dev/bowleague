import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Team } from '../shared/models/team';
import { TeamsService } from '../shared/services/teams.service';

import { BaseChartComponent, ColorHelper } from '@swimlane/ngx-charts';

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
  chartData: any[];

  // options
  //single: any[];
  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population'; 

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#336699']
  };


single = [
  {
    "name": "Germany",
    "value": 8940
  },
  {
    "name": "USA",
    "value": 5000
  },
  {
    "name": "France",
    "value": 7200
  },
  {
    "name": "Canada",
    "value": 3500
  }

];  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TeamsService,
    private winRef: WindowRef
  ) {

    Object.assign(this, this.single );

    this.chartWidth = winRef.nativeWindow.innerWidth * .8;
    this.chartHeight = winRef.nativeWindow.innerHeight * .5;
  }

  ngOnInit() {

    //Object.assign(this, this.chartData);

    this.view = [this.chartWidth, this.chartHeight];

    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 6)); i++) {
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


