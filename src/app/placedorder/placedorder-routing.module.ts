
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacedOrderPage } from './placedorder.page';

const routes: Routes = [
  {
    path: '',
    component: PlacedOrderPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacedOrderRoutingModule {}
