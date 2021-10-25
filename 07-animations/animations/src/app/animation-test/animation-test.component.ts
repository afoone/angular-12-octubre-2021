import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.css']
})
export class AnimationTestComponent implements OnInit {

  public open: boolean;

  constructor() {
    this.open = false
   }

  ngOnInit(): void {
  }

  toggle = () => {
    this.open = !this.open
  }

}
