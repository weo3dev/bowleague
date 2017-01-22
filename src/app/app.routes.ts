import { ModuleWithProviders }			from '@angular/core';
import { Routes, RouterModule }			from '@angular/router';
import { HomeComponent }						from './home/home.component';
import { LeadersComponent }					from './leaders/leaders.component';
import { TeamsComponent }						from './teams/teams.component';
import { TeamPageComponent } 				from './team-page/team-page.component';
import { PlayersComponent }					from './players/players.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leaders', component: LeadersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeamPageComponent },
  { path: 'players', component: PlayersComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);