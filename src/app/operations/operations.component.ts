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
onDeposit(amount: number)
{
  if(amount.toString().trim()=='')
  {
    this.value=0;
    this.message="The amount should not be empty!!";
  }
  else
  {
    if(amount<0)
    {
      this.value=0;
      this.message="The amount should not be negative!!";
    }
    else
    {
      this.value=amount;
    }
  }
 
}
onWidhdraw(amount: number)
{
  if(amount.toString().trim()=='')
  {
    this.value=0;
    this.message="The amount should not be empty!!";
  }
  else
  {
    if(amount<0)
    {
      this.value=0;
      this.message="The amount should not be negative!!";
    }
    else
    {
      this.value=amount;
    }
  }
 
}
}
