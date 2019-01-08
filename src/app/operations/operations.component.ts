import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  value = 0;
  message: string;
  onDeposit(amount: number) {
    if (this.isAmountValid(amount)) {
      this.value += amount;
    }
  }
  onWithdraw(amount: number) {
    if (this.isAmountValid(amount)) {
      this.value -= amount;
    }
  }

  private isAmountValid(amount: number): boolean {
    if (amount.toString().trim() == '') {
      this.message = "The amount should not be empty!!";
      return false;
    }
    if (amount < 0) {
      this.message = "The amount should not be negative!!";
      return false;
    }
    return true;
  }
}
