import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number):void {
    this.counter += 1;
  }

  decreaseBy(value: number):void {
    this.counter -= 1;
  }

  reset() {
    this.counter = 10;
  }

}
