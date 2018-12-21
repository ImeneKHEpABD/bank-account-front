import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperationsComponent} from './operations/operations.component';

export const routes: Routes = [
    { path: 'operations', component: OperationsComponent},
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '404' }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {};