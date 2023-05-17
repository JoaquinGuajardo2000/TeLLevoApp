import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddViajePage } from './add-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: AddViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddViajePageRoutingModule {}
