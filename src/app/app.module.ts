import { BrowserModule }                 from '@angular/platform-browser';
import { NgModule }                      from '@angular/core';
import { FormsModule }                   from '@angular/forms';
import { HttpModule }                    from '@angular/http';
import { routing, appRoutingProviders }  from './app.routes';

import { AppComponent }                  from './app.component';
import { HeaderComponent }               from './shared/header/header.component';
import { NavigationComponent }           from './shared/navigation/navigation.component';


import { HomeComponent }                 from './home/home.component';
import { LeadersComponent }              from './leaders/leaders.component';
import { PlayersComponent }              from './players/players.component';
import { TeamsComponent }                from './teams/teams.component';
import { TeamPageComponent }             from './team-page/team-page.component';

import { BarchartComponent }             from './shared/barchart/barchart.component';


import { MaterialModule }                from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    LeadersComponent,
    TeamsComponent,
    TeamPageComponent,
    PlayersComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }