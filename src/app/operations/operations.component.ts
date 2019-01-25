import { Component, OnInit } from '@angular/core';
import { OperationsService } from './operations.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  value = 0;
  message: string;
  amount: number = 0;

  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
  }

  onDeposit() {
    this.operationsService.depositAmount(this.amount);
    this.message = this.operationsService.message;
  }

  onWithdraw() {
    this.operationsService.withdrawAmount(this.amount);
    this.message = this.operationsService.message;
  }

}
