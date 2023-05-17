import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(public alertController: AlertController,
              private menuController: MenuController,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'actualizar-class',
      header: 'Actualizar mis datos',
      inputs: [
        {
          name: 'nombres',
          type: 'text',
          id: 'nombres-id',
          placeholder: 'Ingrese Nombre'
        },
        {
          name: 'apellidos',
          type: 'text',
          id: 'apellidos-id',
          placeholder: 'Ingrese Apellidos'
        },        
        //Fecha de nacimiento!!!!*******
        {
          name: 'Teléfono',
          type: 'text',
          id: 'telefono-id',
          placeholder: 'Número de telefono',
          attributes:{
            maxlength:9,
            minlength:9
          }
        },
        {
          name: 'correo',
          type: 'text',
          id: 'correo-id',
          placeholder: 'Correo Electrónico'
        }, 
        {
          name: 'contraseña',
          type: 'password',
          placeholder: 'Contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 12,
            minLength: 8,
            inputmode: 'decimal'
          }
        },
        {
          name: 'confirmarContraseña',
          type: 'password',
          placeholder: 'Confirmar Contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 12,
            minLength: 8,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Actualización Cancelada');
          }
        }, {
          text: 'Confirmar',
          handler:() => {
            console.log('Actualización Confirmada');
          }
        }
      ]
    });

    await alert.present();
  }

  async cerrarSesion() {
    const alert = await this.alertController.create({
      cssClass: 'cerrarSesion-class',
      header: '¿Estás seguro de que quieres cerrar tu sesión?',
      message: '<strong>Hasta pronto</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('La sesión no cerró');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Sesión Cerrada'),
            this.router.navigate(['inicio']);
          }
        }
      ]
    });

    await alert.present();
  }

}
