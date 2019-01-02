import { Component,OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  Date: string;
  position: number;
  Description: string;
  Debit: number;
  Credit: number;
  Balance: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -100},
  {position: 2, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -200},
  {position: 3, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -300},
  {position: 4, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -400},
  {position: 5, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -500},
  {position: 6, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -600},
  {position: 7, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -700},
  {position: 8, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -800},
  {position: 9, Date: '20/12/2018', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -900},
  {position: 10, Date: '20/01/2019', Description: 'Wemanity', Debit: 0, Credit: 1000, Balance: 100},
  {position: 11, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: 0},
  {position: 12, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -100},
  {position: 13, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -200},
  {position: 14, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -300},
  {position: 15, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -400},
  {position: 16, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -500},
  {position: 17, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -600},
  {position: 18, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -700},
  {position: 19, Date: '20/01/2019', Description: 'Carrefour', Debit: 100, Credit: 0, Balance: -800},
  {position: 20, Date: '20/01/2019', Description: 'Wemanity', Debit: 0, Credit: 1000, Balance: 200},
];
@Component({
  selector: 'app-operations-history',
  templateUrl: './operations-history.component.html',
  styleUrls: ['./operations-history.component.css']
})
export class OperationsHistoryComponent implements OnInit{

  constructor() { }
  displayedColumns: string[] = ['position', 'Date', 'Description', 'Debit','Credit','Balance'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

