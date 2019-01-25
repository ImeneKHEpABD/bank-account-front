import { Component, OnInit, Input } from '@angular/core';
import { AotSummaryResolverHost } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() name:string;
  dynColor:string;

  constructor() {
    this.name='Welcome to the Online Banking Home Page!!!';
    this.dynColor='blue';
  }

  ngOnInit() {
  }

}
