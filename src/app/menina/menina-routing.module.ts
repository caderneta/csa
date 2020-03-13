import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeninaPage } from './menina.page';

const routes: Routes = [
  {
    path: '',
    component: MeninaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeninaPageRoutingModule {}
