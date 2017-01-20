import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TeampageComponent } from './teampage.component';
import { BarchartComponent } from '../shared/barchart/barchart.component';

import { routing, appRoutingProviders } from '../app.routes';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	TeampageComponent,
  	BarchartComponent
  ],
  providers: [appRoutingProviders],
  exports: [TeampageComponent] 
})
export class TeampageModule { }

