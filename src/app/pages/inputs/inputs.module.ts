import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputsPageRoutingModule } from './inputs-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InputsPage } from './inputs.page';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputsPageRoutingModule
  ],
  declarations: [InputsPage]
})
export class InputsPageModule {}
