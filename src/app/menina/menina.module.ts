import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeninaPageRoutingModule } from './menina-routing.module';

import { MeninaPage } from './menina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeninaPageRoutingModule
  ],
  declarations: [MeninaPage]
})
export class MeninaPageModule {}
