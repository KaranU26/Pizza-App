import { CheckOrderPage } from './chkorder/chkorder.page';
import { ManagerPage } from './manager/manager.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlacedOrderPage } from './placedorder/placedorder.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'manager', component: ManagerPage
  },
  {
    path: 'checkorder', component: CheckOrderPage
  },
  {
    path: 'placedorders', component: PlacedOrderPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ManagerPage, CheckOrderPage, PlacedOrderPage];
