import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Operationsservice {
    value = 0;
    private url = '/api/unsecure/operations';
    constructor(private http: HttpClient) { }

    WithdrawAmount(amount: number) {
        this.value -= amount;
    }

    DepositAmount(amount: number) {
        this.value += amount;
    }
}
