import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Viaje } from '../interfaces/viaje';
import { Viajes } from '../interfaces/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private http:HttpClient) { }

  listarViajes(): Observable<Viajes>{
      return this.http.get<Viajes>(`${environment.apiURL}/viajes`)
  }

  crearViaje(newViaje:Viaje): Observable<Viaje>{
    return this.http.post<Viaje>(`${environment.apiURL}/viajes` , newViaje)
  }

  verViajeByID(id:Number): Observable<Viajes>{
    return this.http.get<Viajes>(`${environment.apiURL}/viajes/?id=${id}`)
    
  }

}


