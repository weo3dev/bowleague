import { Component, OnInit } from '@angular/core';
// import { MensGameScratchService } from '../shared/services/mens-game-scratch/index';
// import { MensGameHandicapService } from '../shared/services/mens-game-handicap/index';

// import { MensSeriesScratchService } from '../shared/services/mens-series-scratch/index';
// import { MensSeriesHandicapService } from '../shared/services/mens-series-handicap/index';

// import { WomensGameScratchService } from '../shared/services/womens-game-scratch/index';
// import { WomensGameHandicapService } from '../shared/services/womens-game-handicap/index';

// import { WomensSeriesScratchService } from '../shared/services/womens-series-scratch/index';
// import { WomensSeriesHandicapService } from '../shared/services/womens-series-handicap/index';

import { Player } from '../shared/models/player';


@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
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

    constructor (
      // private mgsService: MensGameScratchService,
      // private mghService: MensGameHandicapService,
      // private mssService: MensSeriesScratchService,
      // private mshService: MensSeriesHandicapService,
      // private wgsService: WomensGameScratchService,
      // private wghService: WomensGameHandicapService,
      // private wssService: WomensSeriesScratchService,
      // private wshService: WomensSeriesHandicapService
    ) {}


    ngOnInit() {
      // this.getMensGameScratch();
      // this.getMensGameHandicap();
      // this.getMensSeriesScratch();
      // this.getMensSeriesHandicap();
      // this.getWomensGameScratch();
      // this.getWomensGameHandicap();
      // this.getWomensSeriesScratch();
      // this.getWomensSeriesHandicap();
    }

/**
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
*/

}

