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
  it('should reject a negative deposit amount', () => {
    fixture.componentInstance.onDeposit(-100);
    expect(fixture.componentInstance.value).toBeGreaterThanOrEqual(0);
   
  });
  it('should reject a negative withdraw amount', () => {
    fixture.componentInstance.onWithdraw(-100);
    expect(fixture.componentInstance.value).toBeGreaterThanOrEqual(0);
   
  });
  
});
