import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage {
  count: any;

  constructor() {
    this.count = 0;
  }

  click() {
    this.count = this.count + 1;
  }

  reset() {
    this.count = 0;
  }
}
