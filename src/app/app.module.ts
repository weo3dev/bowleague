import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { RouterModule }           from '@angular/router';

import { MaterialModule }         from '@angular/material';
import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './home/home.component';
import { TeamsComponent }         from './teams/teams.component';
import { LeadersComponent }       from './leaders/leaders.component';
import { TeampageComponent }      from './team-page/team-page.component';
import { PlayersComponent }       from './players/players.component';


const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeampageComponent },
  { path: 'leaders', component: LeadersComponent },
  { path: 'players', component: PlayersComponent },
  { path: '**', redirectTo: 'home' }  
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    LeadersComponent,
    TeampageComponent,
    PlayersComponent
  ],
  exports: [
    MaterialModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
