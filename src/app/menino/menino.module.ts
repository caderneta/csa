import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeninoPageRoutingModule } from './menino-routing.module';

import { MeninoPage } from './menino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeninoPageRoutingModule
  ],
  declarations: [MeninoPage]
})
export class MeninoPageModule {}
