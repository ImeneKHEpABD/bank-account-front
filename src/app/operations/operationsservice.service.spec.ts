import { Operationsservice } from './operationsservice.service';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operations } from "./operations.model";

class MockHttpClient {
  get(url: String, httpOptions): Array<Operations> {
    const resultat = new Operations();
    resultat.value = 0;
    resultat.message = '';
    const results = new Array<Operations>();
    results.push(resultat);
    return results;
  }
}

describe('Operationsservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
            Operationsservice,
            HttpClient,
            { provide: HttpClient, useClass: MockHttpClient }
        ]
    });
  });

  /*test('should be created', inject([Operationsservice], (service: Operationsservice) => {
    expect(service).toBeTruthy();
  }));*/

});
