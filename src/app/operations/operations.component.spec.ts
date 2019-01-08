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
  it('should deposit a positive amount', () => {
    fixture.componentInstance.onDeposit(-100);
    expect(fixture.componentInstance.value).toBeGreaterThanOrEqual(0);
   
  });
  it('should Widhdraw a positive amount', () => {
    fixture.componentInstance.onWidhdraw(-100);
    expect(fixture.componentInstance.value).toBeGreaterThanOrEqual(0);
   
  });
  
});
