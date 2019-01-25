import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsHistoryComponent } from './operations-history.component';
import { MaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsService } from '../operations/operations.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Operations } from '../operations/operations.model';
import { Observable, of } from 'rxjs';


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
  operations(): Observable<Array<Operations>> {
    var mockData=[
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
class MockOperationsService extends OperationsService{
  operations(): Observable<Array<Operations>> {
    var mockData=[
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

describe('OperationsHistoryComponent', () => {
  let component: OperationsHistoryComponent;
  let fixture: ComponentFixture<OperationsHistoryComponent>;

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
        {provide :OperationsService,useClass:MockOperationsService},
        HttpClient,
        { provide: HttpClient, useClass: MockHttpClient }],
        
      declarations: [OperationsHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
