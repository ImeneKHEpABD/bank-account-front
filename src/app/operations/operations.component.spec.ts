import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsComponent } from './operations.component';
import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('OperationsComponent', () => {
  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        FormsModule, ReactiveFormsModule
      ],
      declarations: [ OperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should reject a negative deposit amount and set the value to zero', () => {
    fixture.componentInstance.onDeposit(-100);
    expect(fixture.componentInstance.value).toBeGreaterThanOrEqual(0);
   
  });
  it('should reject a negative withdraw amount and set the value to zero', () => {
    fixture.componentInstance.onWithdraw(-100);
    expect(fixture.componentInstance.value).toBeGreaterThanOrEqual(0);
   
  });
  it('should display a message with `The amount should not be negative!!` when a negative withdraw amount is entreded', () => {
    fixture.componentInstance.onWithdraw(-100);
    expect(component.message).toMatch('The amount should not be negative!!');   
  });
  it('should display a message with `The amount should not be negative!!` when a negative deposit amount is entreded', () => {
    fixture.componentInstance.onDeposit(-100);
    expect(component.message).toMatch('The amount should not be negative!!');   
  });
  
});
