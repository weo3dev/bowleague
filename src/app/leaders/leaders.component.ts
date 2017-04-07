import { Component, OnInit } from '@angular/core';
import { MensGameScratchService } from '../shared/services/mens-game-scratch.service';
import { MensGameHandicapService } from '../shared/services/mens-game-handicap.service';

import { MensSeriesScratchService } from '../shared/services/mens-series-scratch.service';
import { MensSeriesHandicapService } from '../shared/services/mens-series-handicap.service';

import { WomensGameScratchService } from '../shared/services/womens-game-scratch.service';
import { WomensGameHandicapService } from '../shared/services/womens-game-handicap.service';

import { WomensSeriesScratchService } from '../shared/services/womens-series-scratch.service';
import { WomensSeriesHandicapService } from '../shared/services/womens-series-handicap.service';

import { TeamSeriesScratchService } from '../shared/services/team-series-scratch.service';
import { TeamSeriesHandicapService } from '../shared/services/team-series-handicap.service';

import { Player } from '../shared/models/Player';
import { Team } from '../shared/models/Team';


@Component({
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css'],
  providers: [
    MensGameHandicapService,
    MensGameScratchService,
    MensSeriesHandicapService,
    MensSeriesScratchService,
    WomensGameHandicapService,
    WomensGameScratchService,
    WomensSeriesHandicapService,
    WomensSeriesScratchService,
    TeamSeriesScratchService,
    TeamSeriesHandicapService
  ]
})
export class LeadersComponent implements OnInit {

    errorMessage: string;
    mensGameScratch: Player[];
    mensGameHandicap: Player[];

    mensSeriesScratch: Player[];
    mensSeriesHandicap: Player[];

    womensGameScratch: Player[];
    womensGameHandicap: Player[];

    womensSeriesScratch: Player[];
    womensSeriesHandicap: Player[];

    teamSeriesScratch: Team[];
    teamSeriesHandicap: Team[];

    //mode = 'Observable';

    constructor (
      private mgsService: MensGameScratchService,
      private mghService: MensGameHandicapService,
      private mssService: MensSeriesScratchService,
      private mshService: MensSeriesHandicapService,
      private wgsService: WomensGameScratchService,
      private wghService: WomensGameHandicapService,
      private wssService: WomensSeriesScratchService,
      private wshService: WomensSeriesHandicapService,
      private tssService: TeamSeriesScratchService,
      private tshService: TeamSeriesHandicapService

    ) {}

    ngOnInit() {
      this.getMensGameScratch();
      this.getMensGameHandicap();
      this.getMensSeriesScratch();
      this.getMensSeriesHandicap();
      this.getWomensGameScratch();
      this.getWomensGameHandicap();
      this.getWomensSeriesScratch();
      this.getWomensSeriesHandicap();
      this.getTeamSeriesScratch();
      this.getTeamSeriesHandicap();
    }

    getMensGameScratch() {
      this.mgsService.getLeaders()
      .subscribe(mensGameScratch => this.mensGameScratch = mensGameScratch, error => this.errorMessage = <any>error);
    }

    getMensGameHandicap() {
      this.mghService.getLeaders()
      .subscribe(mensGameHandicap => this.mensGameHandicap = mensGameHandicap, error => this.errorMessage = <any>error);
    }

    getMensSeriesScratch() {
      this.mssService.getLeaders()
      .subscribe(mensSeriesScratch => this.mensSeriesScratch = mensSeriesScratch, error => this.errorMessage = <any>error);
    }

    getMensSeriesHandicap() {
      this.mshService.getLeaders()
      .subscribe(mensSeriesHandicap => this.mensSeriesHandicap = mensSeriesHandicap, error => this.errorMessage = <any>error);
    }

    getWomensGameScratch() {
      this.wgsService.getLeaders()
      .subscribe(womensGameScratch => this.womensGameScratch = womensGameScratch, error => this.errorMessage = <any>error);
    }

    getWomensGameHandicap() {
      this.wghService.getLeaders()
      .subscribe(womensGameHandicap => this.womensGameHandicap = womensGameHandicap, error => this.errorMessage = <any>error);
    }

    getWomensSeriesScratch() {
      this.wssService.getLeaders()
      .subscribe(womensSeriesScratch => this.womensSeriesScratch = womensSeriesScratch, error => this.errorMessage = <any>error);
    }

    getWomensSeriesHandicap() {
      this.wshService.getLeaders()
      .subscribe(womensSeriesHandicap => this.womensSeriesHandicap = womensSeriesHandicap, error => this.errorMessage = <any>error);
    }

    getTeamSeriesScratch() {
      this.tssService.getLeaders()
      .subscribe(teamSeriesScratch => this.teamSeriesScratch = teamSeriesScratch, error => this.errorMessage = <any>error);
    }

    getTeamSeriesHandicap() {
      this.tshService.getLeaders()
      .subscribe(teamSeriesHandicap => this.teamSeriesHandicap = teamSeriesHandicap, error => this.errorMessage = <any>error);
    }

}

