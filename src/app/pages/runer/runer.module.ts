import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunerPageRoutingModule } from './runer-routing.module';

import { RunerPage } from './runer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunerPageRoutingModule
  ],
  declarations: [RunerPage]
})
export class RunerPageModule {}
