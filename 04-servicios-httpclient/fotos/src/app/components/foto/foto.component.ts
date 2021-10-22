import { Component, Input, OnInit } from '@angular/core';
import { Foto } from 'src/app/models/foto';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  @Input("item")
  public foto: Foto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
