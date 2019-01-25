import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operations } from './operations.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OperationsService {
    value = 0;
    message = '';
    private url = 'http://localhost:3000/operations';

    constructor(private http: HttpClient) { }

    create(operations: Operations): Observable<Operations> {
        return this.http.post<Operations>(this.url, operations, httpOptions);
      }
    
      update(operations: Operations): Observable<Operations> {
        return this.http.put<Operations>(this.url + '/' + operations.Description, operations, httpOptions);
      }
    
      delete(operations: Operations): Observable<void> {
        return this.http.delete<void>(this.url + '/' + operations.Description, httpOptions);
      }
    withdrawAmount(amount: number) {

        if (this.isAmountValid(amount)) {
            this.value -= amount;
        }
    }

    depositAmount(amount: number) {
        if (this.isAmountValid(amount)) {
            this.value += amount;
        }
    }

    isAmountValid(amount: number): boolean {
        if (amount.toString().trim() == '') {
            this.updateWarningMessage("The amount should not be empty!!");
            return false;
        }
        if (amount < 0) {
            this.updateWarningMessage("The amount should not be negative!!");
            return false;
        }
        return true;
    }

    updateWarningMessage(message: string) {
        this.message = message;
    }

    operations(): Observable<Array<Operations>> {
        console.log('get Operations at ', this.url);
        return this.http.get<Array<Operations>>(this.url, httpOptions);
    }

}
