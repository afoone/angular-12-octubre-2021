import { Component } from '@angular/core';

@Component({
  selector: 'car-component',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
})
export class CocheComponent {
  public marca: string;
  public modelo: string;
  public year: number;
  private _hola: string;
  public counter: number;

  constructor() {
    console.log('constructor');
    this.marca = 'BMW';
    this.modelo = 'M2';
    this.year = 2020;
    this._hola = 'Hola mundo';
    this.counter = 0;
    this.holaMundo();
  }

  get hola() {
    return this._hola;
  }

  holaMundo() {
    console.log(this._hola);
  }

  sumar() {
    this.counter++;
  }

  restar() {
    this.counter--;
  }
}
