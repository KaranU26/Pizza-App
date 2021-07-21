import { ManagerPage } from './manager.page';
import { ManagerPageRoutingModule } from './manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerPageRoutingModule
  ],
  declarations: [ManagerPage]
})
export class ManagerPageModule {}
