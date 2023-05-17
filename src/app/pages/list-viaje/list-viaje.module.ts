import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListViajePageRoutingModule } from './list-viaje-routing.module';

import { ListViajePage } from './list-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListViajePageRoutingModule
  ],
  declarations: [ListViajePage]
})
export class ListViajePageModule {}
