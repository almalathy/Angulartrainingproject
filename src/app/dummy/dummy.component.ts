import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl:'./dummy.component.html',
})
export class DummyComponent implements OnInit {
  
  // message = 'Hello, World!';
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
 
  sayMessage() {
    alert(this.message);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
