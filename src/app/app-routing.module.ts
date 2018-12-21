import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperationsComponent} from './operations/operations.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';


export const routes: Routes = [
    { path: 'operationshistory',component: OperationsHistoryComponent},
    { path: 'operations', component: OperationsComponent},
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '404' }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {};