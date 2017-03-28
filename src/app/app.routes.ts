import { ModuleWithProviders }			from '@angular/core';
import { Routes, RouterModule }			from '@angular/router';

import { HomeComponent }						from './home/home.component';
import { LeadersComponent }					from './leaders/leaders.component';
import { TeamsComponent }						from './teams/teams.component';
import { TeampageComponent } 				from './team-page/team-page.component';
import { PlayersComponent }					from './players/players.component';


export const routing: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leaders', component: LeadersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeampageComponent },
  { path: 'players', component: PlayersComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routing);
