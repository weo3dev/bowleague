import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../shared/services/players.service';
import { Player } from '../shared/models/Player';

@Component({
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService]
})
export class PlayersComponent implements OnInit {

    errorMessage: string;
    players: Player[];
    mode = 'Observable';
    constructor (private playersService: PlayersService) {}

    ngOnInit() {
        this.getPlayerList();
    }

  getPlayerList() {
    this.playersService.getPlayers()
    .subscribe(players => this.players = players, error => this.errorMessage = <any>error);
  }

  showPlayer() {
    console.log('player clicked');
  }
}

