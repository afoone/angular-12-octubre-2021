import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent implements OnInit, DoCheck, OnDestroy, OnChanges {
  public dummy: number[];
  public total: number;

  @Input() public multiplicador: number = 1;

  constructor() {
    this.dummy = [];
    this.total = 0;
    console.log('constructor');
    // inicializar las variables a sus valores por defecto, por ejemplo, un array de pacientes a []
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }

  ngOnInit(): void {
    console.log('on init');
    // ir a por elementos a un servicio
    setTimeout(() => {
      this.dummy = [1, 2, 3];
    }, 3000);
  }

  ngDoCheck(): void {
    console.log('do check');
    this.total = this.dummy.reduce((acc, curr) => acc + curr, 0);
    // esto se ejecuta cuando detecta algún cambio en las propiedades del componente
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    // para cerrar websockets, para limpiar cache de un servicio
  }
}
