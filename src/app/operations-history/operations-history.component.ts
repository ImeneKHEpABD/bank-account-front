import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { OperationsService } from '../operations/operations.service';
import { Operations } from '../operations/operations.model';

@Component({
  selector: 'app-operations-history',
  templateUrl: './operations-history.component.html',
  styleUrls: ['./operations-history.component.css']
})

export class OperationsHistoryComponent implements OnInit {

  operations: Operations[];
  displayedColumns: string[] = ['position', 'Date', 'Description', 'Debit', 'Credit', 'Balance'];
  dataSource = new MatTableDataSource<Operations>();
 
  constructor(private operationsService: OperationsService) {
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getOperations();
  }

  getOperations() {
    this.operationsService
      .operations()
      .subscribe(operations => {
        this.operations = operations;
        this.dataSource = new MatTableDataSource<Operations>(this.operations);
        this.dataSource.paginator = this.paginator;
      });
  }

}

