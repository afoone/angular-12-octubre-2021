import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'stock-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
})
export class TickerComponent implements OnInit {
  public stocks: Array<Stock>; // Stock[]
  //public favorito: boolean

  constructor() {
    this.stocks = [];
    //this.favorito = false
  }

  ngOnInit(): void {
    this.stocks.push(new Stock('Telefónica', 'TEL', 8.99, 8.5));
    this.stocks.push(new Stock('Gas Natural', 'NAT', 4.5, 5.0));
    this.stocks.push(new Stock('Octopus', 'OCT', 1.5, 5.0));
  }

  setFavorito(i: number) {
    this.stocks[i].favorito = true;
  }
}
