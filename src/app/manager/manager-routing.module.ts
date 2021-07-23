import { CheckOrderPage } from './../chkorder/chkorder.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerPage } from './manager.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerPage
  },
  {
    path: 'checkorder',
    component: CheckOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerPageRoutingModule {}
