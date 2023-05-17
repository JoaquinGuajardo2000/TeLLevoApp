import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard} from './guards/no-ingresado.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [NoIngresadoGuard] && [IngresadoGuard]
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard] && [IngresadoGuard]
  },
  {
    path: 'runer',
    loadChildren: () => import('./pages/runer/runer.module').then( m => m.RunerPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'contra',
    loadChildren: () => import('./pages/contra/contra.module').then( m => m.ContraPageModule),
    canActivate: [NoIngresadoGuard] && [IngresadoGuard]
  },
  {
    path: 'add-viaje',
    loadChildren: () => import('./pages/add-viaje/add-viaje.module').then( m => m.AddViajePageModule)
  },
  {
    path: 'list-viaje',
    loadChildren: () => import('./pages/list-viaje/list-viaje.module').then( m => m.ListViajePageModule)
  },
  {
    path: 'ver-viajes/:id',
    loadChildren: () => import('./pages/ver-viajes/ver-viajes.module').then( m => m.VerViajesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
