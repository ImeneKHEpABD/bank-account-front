import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common"

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router:Router;
  let location:Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([])
      ]


    })
      .overrideModule(AppModule, {
        remove: {
          imports: [
            AppRoutingModule
          ]
        },
        add: {
          declarations: [
            NavigationComponent,
            RouterOutletStubComponent
          ]
        }
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
