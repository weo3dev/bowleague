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

      // this.players = [
      //   {"id":59,"name":"Allison LOCAL","teamname":"Team#15","totalpins":2406,"games":18,"average":134,"handicap":47},
      //   {"id":50,"name":"Andy LOCAL","teamname":"PG-13","totalpins":2627,"games":24,"average":109,"handicap":76},
      //   {"id":52,"name":"B52 LOCAL","teamname":"PG-13","totalpins":2492,"games":24,"average":104,"handicap":88},
      //   {"id":63,"name":"B63 LOCAL","teamname":"C&M","totalpins":1800,"games":15,"average":120,"handicap":64},
      //   {"id":64,"name":"B64 LOCAL","teamname":"C&M","totalpins":1800,"games":15,"average":120,"handicap":64},
      //   {"id":77,"name":"B77 LOCAL","teamname":"Bowlamania","totalpins":371,"games":3,"average":124,"handicap":61},
      //   {"id":54,"name":"Ben LOCAL","teamname":"Split Happens","totalpins":3424,"games":24,"average":143,"handicap":44},
      //   {"id":26,"name":"Big LOCAL","teamname":"Hand Party","totalpins":2949,"games":24,"average":123,"handicap":66},
      //   {"id":56,"name":"Bill LOCAL","teamname":"Split Happens","totalpins":4200,"games":24,"average":175,"handicap":13},
      //   {"id":30,"name":"Blux LOCAL","teamname":"Team#8","totalpins":3024,"games":24,"average":126,"handicap":35},
      //   {"id":24,"name":"Brad LOCAL","teamname":"Butt Chuggers","totalpins":3816,"games":24,"average":159,"handicap":25},
      //   {"id":71,"name":"Brian LOCAL","teamname":"Team#15","totalpins":1603,"games":12,"average":134,"handicap":48},
      //   {"id":35,"name":"Britney LOCAL","teamname":"Guttermouths","totalpins":2987,"games":21,"average":142,"handicap":33},
      //   {"id":20,"name":"Bromilator LOCAL","teamname":"The Bowl Movements","totalpins":1206,"games":9,"average":134,"handicap":45},
      //   {"id":48,"name":"Brooksy LOCAL","teamname":"Shots & Gutters","totalpins":3040,"games":24,"average":127,"handicap":64}
      // ];

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


