import { Component, ViewChild, ElementRef} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { ViajesService } from 'src/app/services/viajes.service';
import { InfiniteScrollCustomEvent, LoadingController} from '@ionic/angular';
import { Viaje } from "src/app/interfaces/viaje";

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage{

  newViaje: Viaje = {
    destino: "Dirección viaje",
		comuna: "Comuna viaje",
		capacidad: "capacidad",
		cuota: 999,
		hora: "19:30",
		telefono: "948700114",
		patente: "XDFH23"
  }

  viajes = []

  @ViewChild('map')
    mapRef: ElementRef<HTMLElement>;
    newMap: GoogleMap;
    center: any = {
      lat: -33.51191,
      lng: -70.75169,
    }

  driver={
    destino:'',
    comuna:'',
    capacidad:'',
    cuota:'',
    hora:'',
  }

  constructor(private menuController: MenuController,
              private viajeServ: ViajesService,
              private viajesServ:ViajesService,
              private loadingCtrl:LoadingController,
              private router: Router) { }


  ionViewWillEnter(){
    this.loadViajes()
  }

  crearViaje(){
    this.viajeServ.crearViaje(this.newViaje).subscribe()
  }
            

  async loadViajes(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    }
    )
    await loading.present();

    this.viajesServ.listarViajes().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.viajes = JSON.parse(listString)
        event?.target.complete()
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )

  }

  ngAfterViewInit() {
    this.createMap();
  }

  async createMap(){
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,
        zoom: 6,
      },
    });
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  onSubmit(){
    console.log('submit');
    console.log(this.driver);
  }


}
