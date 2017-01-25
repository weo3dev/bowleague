/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LeadersComponent } from './leaders/leaders.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';

import { Router, RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: '', component: HomeComponent},
            {path: 'leaders', component: LeadersComponent},
            {path: 'teams', component: TeamsComponent},
            {path: 'players', component: PlayersComponent}
        ]),
        MaterialModule.forRoot()
      ],      
      declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        HomeComponent,
        LeadersComponent,
        TeamsComponent,
        PlayersComponent
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});


