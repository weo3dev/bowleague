import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { TeampageComponent }               from './teampage/teampage.component';

const appRoutes: Routes = [
  { path: '', component: TeampageComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);