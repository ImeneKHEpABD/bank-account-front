import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '404' }
  ];
export class AppRoutingModule {};