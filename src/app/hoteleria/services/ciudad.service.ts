import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { CiudadesResponse, CiudadResponseDatum, } from '../interfaces/ciudades.interface';
import { tap } from 'rxjs';
import { CiudadResponse } from '../interfaces/ciudad.interface';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private urlEndpoints: string = environment.urlEnpoints;

  private _ciudades: CiudadResponseDatum[] = [];

  private _ciudad !: CiudadResponse;


  public get ciudadesReponse(): CiudadResponseDatum[] {
    return [...this._ciudades];
  }



  public get ciudad(): CiudadResponse {
    return { ...this._ciudad };
  }


  constructor(
    private _http: HttpClient
  ) { }


  obtenerCiudades(): void {
    this._http.get<CiudadesResponse[]>(`${this.urlEndpoints}/api/ciudads?populate=imagen`)
      .pipe(
        tap(console.warn),
      )
      .subscribe(dataCiudades => {
        this._ciudades = dataCiudades.data;
      });
  }

  obtenerInfoCiudad(identificador: number) {
    this._http.get<CiudadResponse>(`${this.urlEndpoints}/api/ciudads/${identificador}?populate=%2A`)
      .pipe(tap(console.warn))
      .subscribe(infoCiudad => {
        this._ciudad = infoCiudad;
      });
  }
}
