import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})

export class NewaccountComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  form;
  constructor(private fb: FormBuilder) {
    this.minDate = new Date(1950, 0, 1);
    this.maxDate = new Date(2019, 0, 1);
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      name:['',Validators.requiredTrue]
    });
  }

  ngOnInit() {
  }

}
