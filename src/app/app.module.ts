import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeampageComponent } from './teampage/teampage.component';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { routing, appRoutingProviders } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    TeampageComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }