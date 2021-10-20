import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imagina-interruptor',
  templateUrl: './interruptor.component.html',
  styleUrls: ['./interruptor.component.css'],
})
export class InterruptorComponent implements OnInit {
  public luz: string;

  constructor() {
    this.luz = 'off';
  }

  ngOnInit(): void {}

  interruptor() {
    this.luz = this.luz === 'off' ? 'on' : 'off';
  }
}
