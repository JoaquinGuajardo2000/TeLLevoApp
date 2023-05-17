import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    
    {
      icon: 'newspaper',
      name: 'Inicio',
      redirecTo:'/card',
    },
    {
      icon: 'car-sport',
      name: 'Drivers',
      redirecTo:'/inputs',
    },
    {
      icon: 'car-sport',
      name: 'Runners',
      redirecTo: '/runer',
    },
    {
      icon: 'accessibility',
      name: 'Mi Cuenta',
      redirecTo:'/cuenta',
    },
    
    
  ];




}
