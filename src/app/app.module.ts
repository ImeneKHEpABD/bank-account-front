import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module'
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperationsComponent } from './operations/operations.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';
import { NewaccountComponent } from './newaccount/newaccount.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'
import { OperationsService } from './operations/operations.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OperationsComponent,
    NavigationComponent,
    OperationsHistoryComponent,
    NewaccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [OperationsService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
