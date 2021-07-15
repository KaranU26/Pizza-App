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
  sizeUpdate: string;
  toppingsUpdate: string;
  itemSelected: any;
  numberSelected: number;
  constructor(private toppingsService: ToppingsService, private sizesService: SizesService) {}

  ngOnInit(){
    this.toppings = this.toppingsService.getAllToppings();
    this.sizes = this.sizesService.getAllSizes();
  }

  ionViewWillEnter(){ }

  sizeValue($event){
    this.sizeUpdate = $event.target.value;
  }


  toppingValue($event){
    this.toppingsUpdate = $event.target.value;
  }

  buttonOneClicked(){
    this.numberSelected = 1;
  }
  buttonTwoClicked(){
    this.numberSelected = 2;
  }
  buttonThreeClicked(){
    this.numberSelected = 3;
  }
  buttonFourClicked(){
    this.numberSelected = 4;
  }
  buttonFiveClicked(){
    this.numberSelected = 5;
  }
  buttonSixClicked(){
    this.numberSelected = 6;
  }
  buttonSevenClicked(){
    this.numberSelected = 7;
  }
  buttonEightClicked(){
    this.numberSelected = 8;
  }
  buttonNineClicked(){
    this.numberSelected = 9;
  }
  buttonZeroClicked(){
    this.numberSelected = 0;
  }

  resetButton(){
    this.numberSelected = 0;
  }

  addButtonClicked(){

  }
}
