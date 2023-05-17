import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Usuario{
  id : number;
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
  conPassword: string;
  }

  const USERS_KEY ='my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServicesdatosService {

  private _storage : Storage;
  newUsuario: Usuario = <Usuario>{};

  constructor(private storage:Storage) {
    this.init();
   }

   //Metodo crear almacen de key, value
   async init(){
     const storage = await this.storage.create();
     this._storage = storage;
   }

   //Metodo Crear usuario

   async addUsuario(dato: Usuario):Promise<any>{
     return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{
       if (datos){
         datos.push(dato);
         return this.storage.set(USERS_KEY, datos);
       }
       else{
         return this.storage.set(USERS_KEY, [dato]);
       }
     })
   }//fin metrodo add

   //Metodo get usuarios del storage
   async getUsuarios(){
     return this.storage.get(USERS_KEY)
   }

   //Metodo actualizar info  por hacer xddd

}
