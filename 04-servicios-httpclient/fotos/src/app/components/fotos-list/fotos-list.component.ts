import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/models/foto';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-fotos-list',
  templateUrl: './fotos-list.component.html',
  styleUrls: ['./fotos-list.component.css'],
})
export class FotosListComponent implements OnInit {
  public fotos: Array<Foto> = [];

  constructor(private fotosService: UnsplashService) {}

  ngOnInit(): void {
    // usar el servicio para recuperar las fotos
    this.search("angular");
  }

  search(search: string) {
    this.fotosService.getFotos(search).subscribe((res) => {
      this.fotos = res.results;
    });
  }
}
