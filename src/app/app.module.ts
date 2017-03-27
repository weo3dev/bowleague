import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { Router, RouterModule }   from '@angular/router';

import { appRoutes }              from './app.routes';

import { AppComponent }           from './app.component';
import { HeaderComponent }        from './shared/header/header.component';
import { NavigationComponent }    from './shared/navigation/navigation.component';

import { HomeComponent }          from './home/home.component';
import { TeamsComponent }         from './teams/teams.component';
import { LeadersComponent }       from './leaders/leaders.component';
import { TeampageComponent }      from './team-page/team-page.component';
import { PlayersComponent }       from './players/players.component';

import { MaterialModule }         from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    appRoutes,
    BrowserAnimationsModule,
    NgxChartsModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
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
