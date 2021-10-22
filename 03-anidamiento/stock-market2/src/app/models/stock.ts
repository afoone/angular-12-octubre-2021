export class Stock {
  public name: string; // Telefonica
  public code: string; // TEL
  public price: number;
  public previousPrice: number;
  public favorito: boolean;

  constructor(
    name: string,
    code: string,
    price: number,
    previousPrice: number
  ) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.previousPrice = previousPrice;
    this.favorito = false;
  }

  isSubiendo() {
    return this.price >= this.previousPrice;
  }

  cambioFuerte() {
    return Math.abs(this.price - this.previousPrice) > 2;
  }
}
