import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeampageComponent } from './teampage/teampage.component';
import { BarchartComponent } from './shared/barchart/barchart.component';

import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { routing, appRoutingProviders } from './app.routes';

import { MaterialModule } from '@angular/material';
import { LeadersComponent } from './leaders/leaders.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    TeampageComponent,
    BarchartComponent,
    LeadersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }