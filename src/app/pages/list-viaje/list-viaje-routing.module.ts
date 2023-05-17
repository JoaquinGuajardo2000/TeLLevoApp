import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViajePage } from './list-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: ListViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListViajePageRoutingModule {}
