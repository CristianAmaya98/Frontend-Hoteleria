import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CiudadResponse } from '../../interfaces/ciudad.interface';

import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [` 
  img {
    max-width: 100%;
    height: 350px;
    object-fit: cover;
  }`]
})
export class DetalleComponent implements OnInit {


  public get ciudad(): CiudadResponse {
    return this.ciudadService.ciudad
  }


  constructor(
    private activedRoute: ActivatedRoute,
    private ciudadService: CiudadService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params
      .subscribe(resp => {
        this.ciudadService.obtenerInfoCiudad(resp["id"]);
      });
  }


  getImagen() {
    return environment.urlEnpoints + this.ciudad.data?.attributes.imagen.data.attributes.formats?.small?.url;
  }

  validateHoteles(): boolean {
    return this.ciudad.data?.attributes.hotels.data.length <= 0;
  }
}
