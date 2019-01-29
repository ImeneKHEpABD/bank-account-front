import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { OperationsComponent } from './operations.component';
import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsService } from './operations.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Operations } from './operations.model';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

class MockHttpClient {
  get(url: String, httpOptions): Array<Operations> {
    const resultat = new Operations();
    resultat.Value = 0;
    resultat.Message = '';
    resultat.Position = 0;
    resultat.Description = "Carrefour";
    resultat.Debit = 0;
    resultat.Credit = 100;
    resultat.Balance = -100;
    const results = new Array<Operations>();
    results.push(resultat);
    return results;
  }
}
class MockOperationsService extends OperationsService {
  operations(): Observable<Array<Operations>> {
    var mockData = [
      {
        "position": 1,
        "Date": "20/12/2018",
        "Description": "Carrefour",
        "Debit": 100,
        "Credit": 0,
        "Balance": -100
      },
      {
        "position": 2,
        "Date": "20/12/2018",
        "Description": "Carrefour",
        "Debit": 100,
        "Credit": 0,
        "Balance": -200
      }
    ];
    return Observable.create(mockData);
  }
}
describe('OperationsComponent', () => {

  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;
  let oldvalue: number;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialModule,
        NoopAnimationsModule,
        FormsModule, ReactiveFormsModule
      ],
      providers: [
        OperationsService,
        { provide: OperationsService, useClass: MockOperationsService },
        HttpClient,
        { provide: HttpClient, useClass: MockHttpClient }],
      declarations: [OperationsComponent]
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
  // it('should be created', inject([OperationsService], (service: OperationsService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should reject a negative deposit amount and keep the old amount value', () => {
    fixture.componentInstance.amount = -100;
    oldvalue = fixture.componentInstance.value;
    fixture.componentInstance.onDeposit();
    expect(fixture.componentInstance.value).toEqual(oldvalue);
  });

  it('should reject a negative withdraw amount and keep the old amount value', () => {
    fixture.componentInstance.amount = -100;
    oldvalue = fixture.componentInstance.value;
    fixture.componentInstance.onWithdraw();
    expect(fixture.componentInstance.value).toEqual(oldvalue);
  });

  it('should display a message with `The amount should not be negative!!` when a negative withdraw amount is entreded', () => {
    fixture.componentInstance.amount = -100;
    fixture.componentInstance.onWithdraw();
    expect(component.message).toMatch('The amount should not be negative!!');
  });

  it('should display a message with `The amount should not be negative!!` when a negative deposit amount is entreded', () => {
    fixture.componentInstance.amount = -100;
    fixture.componentInstance.onDeposit();
    expect(component.message).toMatch('The amount should not be negative!!');
  });

});
