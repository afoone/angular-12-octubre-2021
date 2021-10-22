import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'stock-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
})
export class TickerComponent implements OnInit {
  // Entrada al componente
  @Input()
  public stock: Stock | undefined;

  // Salida del componente: evento
  @Output() public setFavorite: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public favorite(code: string | undefined) {
    console.log('favorite', code);
    this.setFavorite.emit(code);
  }
}
