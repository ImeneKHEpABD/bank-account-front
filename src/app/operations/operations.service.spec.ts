import { OperationsService } from './operations.service';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operations } from "./operations.model";
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
    return of(new Array());
  }
}

let oldvalue: number;
let amount: number;
let result: boolean;
describe('OperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        OperationsService,
        HttpClient,
        { provide: HttpClient, useClass: MockHttpClient }
      ]
    });
  });

  it('should be created', inject([OperationsService], (service: OperationsService) => {
    expect(service).toBeTruthy();
  }));

  it('should reject a negative deposit amount and keep the old amount value', inject([OperationsService], (service: OperationsService) => {
    amount = -100;
    oldvalue = service.value;
    service.depositAmount(amount);
    expect(service.value).toEqual(oldvalue);
  }));

  it('should reject a negative withdraw amount and keep the old amount value', inject([OperationsService], (service: OperationsService) => {
    amount = -100;
    oldvalue = service.value;
    service.withdrawAmount(amount);
    expect(service.value).toEqual(oldvalue);

  }));

  it('should display a message with `The amount should not be negative!!` when a negative withdraw amount is entreded', inject([OperationsService], (service: OperationsService) => {
    amount = -100;
    oldvalue = service.value;
    service.withdrawAmount(amount);
    expect(service.message).toMatch('The amount should not be negative!!');
  }));

  it('should display a message with `The amount should not be negative!!` when a negative deposit amount is entreded', inject([OperationsService], (service: OperationsService) => {
    amount = -100;
    oldvalue = service.value;
    service.depositAmount(amount);
    expect(service.message).toMatch('The amount should not be negative!!');
  }));

  it('should return false when the amount is negative', inject([OperationsService], (service: OperationsService) => {
    amount = -100;
    oldvalue = service.value;
    result = service.isAmountValid(amount);
    expect(result).toEqual(false);
  }));
  /*
 it('should return true when the deposit amount is positive', () => {
 
 });
 it('should return false when the withdraw amount is negative', () => {
 
 });
 it('should return true when the withdraw amount is positive', () => {
 
 });*/

});
