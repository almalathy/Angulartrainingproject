import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = 'angularpro1';
  public num1:any;
  public num2:any;
  public num3:any;
   
  add(){
    this.num3=this.num1+this.num2;
   }
   sub(){
    this.num3=this.num1-this.num2;
   }
   mul(){
    this.num3=this.num1*this.num2;
   }

  div(){
  this.num3=this.num1/this.num2;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
