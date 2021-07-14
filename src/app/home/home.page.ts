import { Component } from '@angular/core';
import { Toppings } from '../toppings/toppings.model';
import { ToppingsService } from '../toppings/toppings.service';
import { Sizes } from '../size/sizes.model';
import { SizesService } from '../size/sizes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toppings: Toppings[];
  sizes: Sizes[];
  itemSelected: any;
  constructor(private toppingsService: ToppingsService, private sizesService: SizesService) {}

  ngOnInit(){
    this.toppings = this.toppingsService.getAllToppings();
    this.sizes = this.sizesService.getAllSizes();
  }

  ionViewWillEnter(){ }

  onClick(size){
    if(this.isSelected(size)){
      this.itemSelected = null;
  }else{
      this.itemSelected = size;
  }
  return this.itemSelected === size;
}
}
