import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-ver-viajes',
  templateUrl: './ver-viajes.page.html',
  styleUrls: ['./ver-viajes.page.scss'],
})
export class VerViajesPage {


  viaje = {
    id: 0,
    destino: "Dirección viaje",
		comuna: "Comuna viaje",
		capacidad: "capacidad",
		cuota: 999,
		hora: "19:30",
		telefono: "948700114",
		patente: "XDFH23"
  }

  constructor(private viajeServ:ViajesService, private router:Router) { }

  ionViewWillEnter(){
    this.verViajeByID(this.getIdFromURL())
  }
  
  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
    return id
  }

  verViajeByID(viajeID: Number){
    this.viajeServ.verViajeByID(viajeID).subscribe(
      (resp:any) => {
        this.viaje = {
          id: resp[0].id,
          destino: resp[0].destino,
          comuna: resp[0].comuna,
          capacidad: resp[0].capacidad,
          cuota: resp[0].cuota,
          hora: resp[0].hora,
          telefono: resp[0].telefono,
          patente: resp[0].patente

        }
      }
    )
  }

}
