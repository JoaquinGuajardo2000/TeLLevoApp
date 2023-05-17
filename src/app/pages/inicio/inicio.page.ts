import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServicesdatosService, Usuario } from '../../services/servicesdatos.service';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  UntypedFormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  formularioInicio : UntypedFormGroup;
  usuarios : Usuario[] = [];

 
  constructor(private alertController: AlertController,
              private navController: NavController,
              private ServicesdatosService: ServicesdatosService,
              private fb: UntypedFormBuilder,
              private menuController: MenuController,
              private router: Router) { 
                this.formularioInicio = this.fb.group ({
                  'email' : new UntypedFormControl("", Validators.required),
                  'password' : new UntypedFormControl("", Validators.required)
                })
              }


  async Ingresar(){
    var f = this.formularioInicio.value;
    var a = 0;
    this.ServicesdatosService.getUsuarios().then(datos=>{
      this.usuarios = datos;
      if (datos.length==0)
      {
        return null;
      }

      for (let obj of this.usuarios){
        if (obj.email == f.email && obj.password==f.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('card');
        }
      }
      console.log(a);
      if (a==0){
        this.alertMsg();
      }
    });
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: '¡Los datos ingresados no coinciden!',
      buttons: ['Aceptar'],
    });
      await alert.present();
      return;
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuarios);
  }

}
