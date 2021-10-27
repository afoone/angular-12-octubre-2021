import { Component, OnInit } from '@angular/core';
import {
  state,
  transition,
  trigger,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.css'],
  animations: [
    trigger('open-close', [
      // transition('open=>close', animate('0.5s')),
      // transition('close=>open', animate('1s')),
      // transition('*=>close', animate('0.5s')),
      // transition('*=>open', animate('1s')),
      transition('open<=>close', animate('2s 0ms ease-out')),
      state(
        'open',
        style({
          padding: '0.3rem',
          opacity: 1,
          backgroundColor: 'yellow',
          transform: 'translateX(100px)'
        })
      ),
      state(
        'close',
        style({
          height: '1.2rem',
          opacity: 0.5,
          backgroundColor: 'blue',
          color: 'white',
          transform: 'translateX(200px)'
        })
      ),
    ]),
  ],
})
export class AnimationTestComponent implements OnInit {
  public open: boolean;

  constructor() {
    this.open = false;
  }

  ngOnInit(): void {}

  toggle = () => {
    this.open = !this.open;
  };
}
