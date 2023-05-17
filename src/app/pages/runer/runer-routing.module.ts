import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunerPage } from './runer.page';

const routes: Routes = [
  {
    path: '',
    component: RunerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunerPageRoutingModule {}
