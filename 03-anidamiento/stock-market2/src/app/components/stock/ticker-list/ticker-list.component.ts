import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'stock-ticker-list',
  templateUrl: './ticker-list.component.html',
  styleUrls: ['./ticker-list.component.css'],
})
export class TickerListComponent implements OnInit {
  public stocks: Stock[];

  constructor() {
    this.stocks = [];
  }

  ngOnInit(): void {
    this.stocks.push(new Stock('Telefónica', 'TEL', 8.99, 8.5));
    this.stocks.push(new Stock('Gas Natural', 'NAT', 4.5, 5.0));
    this.stocks.push(new Stock('Octopus', 'OCT', 1.5, 5.0));
    this.stocks.push(new Stock('Otra cosa', 'OTR', 8.99, 8.5));
    this.stocks.push(new Stock('Gas Natural', 'NET', 4.5, 5.0));
    this.stocks.push(new Stock('Octopus', 'OCC', 1.5, 5.0));
  }

  setFavorito(code: string) {
    console.log("set favorito "+ code)
    this.stocks = this.stocks.map((i) => {
      const newStock = new Stock(i.name, i.code, i.price, i.previousPrice);
      newStock.favorito = i.favorito || i.code === code;
      return newStock;
    });
  }
}
