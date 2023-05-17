import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddViajePageRoutingModule } from './add-viaje-routing.module';

import { AddViajePage } from './add-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddViajePageRoutingModule
  ],
  declarations: [AddViajePage]
})
export class AddViajePageModule {}
