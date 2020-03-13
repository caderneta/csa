import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeninoPage } from './menino.page';

const routes: Routes = [
  {
    path: '',
    component: MeninoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeninoPageRoutingModule {}
