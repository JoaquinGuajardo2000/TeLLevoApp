import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicesdatosService, Usuario } from '../../services/servicesdatos.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  UntypedFormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: UntypedFormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] = [];

  constructor(private router: Router,
              private servicesDatos: ServicesdatosService,
              private navController: NavController,
              private alertController: AlertController,
              private toastController: ToastController,
              private fb: UntypedFormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre': new UntypedFormControl("", Validators.required),
                  'apellidos': new UntypedFormControl("", Validators.required),
                  'email': new UntypedFormControl("", [Validators.required, Validators.email]),
                  'password': new UntypedFormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(12),
                  ])),
                  'conPassword': new UntypedFormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(12),
                  ]))

                });
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form= this.formularioRegistro.value;
    var existe = 0;

    if(this.formularioRegistro.invalid){
      this.alertError();
    }
    else{
    this.newUsuario.nombre = form.nombre;
    this.newUsuario.apellidos = form.apellidos;
    this.newUsuario.email = form.email;
    this.newUsuario.password = form.password;
    this.newUsuario.conPassword = form.conPassword;

    this.servicesDatos.getUsuarios().then(datos =>{
      this.usuarios = datos;

      if (!datos || datos.length==0){
        this.servicesDatos.addUsuario(this.newUsuario).then(dato=>{
          this.newUsuario=<Usuario>{};
          this.showToast('Usuario Creado correctamente');
        });
        this.formularioRegistro.reset();
        this.navController.navigateRoot('inicio');
      }else{
        for (let obj of this.usuarios){
          if (this.newUsuario.email == obj.email){
            existe = 1;
          }
        }//fin del for

          if(existe ==1){
            this.alertCorreoDuplicado();
            this.formularioRegistro.reset();
          }
          else{
            this.servicesDatos.addUsuario(this.newUsuario).then(dato=>{
              this.newUsuario=<Usuario>{};
              this.showToast('Usuario Creado Correctamente');
            });
            this.formularioRegistro.reset();
            this.navController.navigateRoot('inicio');
          }
        }
        })

  }//fin Else  

  }//fin metodo


  async alertError(){
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'Debe completar todos los datos',
      buttons:['Aceptar']
    })
    await alert.present();
  }

  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons:['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
