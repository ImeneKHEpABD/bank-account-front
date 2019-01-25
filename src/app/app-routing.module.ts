import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperationsComponent } from './operations/operations.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: 'operationshistory', component: OperationsHistoryComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'newaccount', component: NewaccountComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };