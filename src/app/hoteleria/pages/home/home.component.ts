import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CiudadResponseDatum, Imagen } from '../../interfaces/ciudades.interface';
import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {



  public get ciudades(): CiudadResponseDatum[] {
    return this.ciudadService.ciudadesReponse
  }


  constructor(
    private ciudadService: CiudadService
  ) { }


  ngOnInit(): void {
    this.ciudadService.obtenerCiudades();
  }

  ngAfterViewInit(): void {
  }


  getImagen(imagen: Imagen): string {
    return `${environment.urlEnpoints}${imagen.data.attributes?.formats.thumbnail?.url}`;
  }
}
