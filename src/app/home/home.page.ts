import { Orders } from './../orders/orders.model';
import { Component } from '@angular/core';
import { Toppings } from '../toppings/toppings.model';
import { ToppingsService } from '../toppings/toppings.service';
import { Sizes } from '../size/sizes.model';
import { SizesService } from '../size/sizes.service';
import { OrderService } from '../orders/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toppings: Toppings[];
  orderList: Array<Orders> = [];
  sizes: Sizes[];
  order: Orders = {};
  orders: Orders[];
  sizeUpdate: string;
  toppingsUpdate: string;
  itemSelected: any;
  numberSelected: number;
  toppingsPrice: number;
  sizePrice: number;
  orderTotalPrice: number;
  currentQuantity: number;
  errorMessage: 'Quantity Value is 0';
  constructor(private toppingsService: ToppingsService, private sizesService: SizesService, private orderService: OrderService) {}

  ngOnInit(){
    this.toppings = this.toppingsService.getAllToppings();
    this.sizes = this.sizesService.getAllSizes();
  }

  ionViewWillEnter(){ }

  sizeValue($event){
    //this.sizeUpdate = $event.target.value;

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

  selectSizeValue(size){
    this.sizeUpdate = size.name;
    this.sizePrice = size.price;
  }

  selectToppingValue(topping){
    this.toppingsUpdate = topping.name;
    this.toppingsPrice = topping.price;
  }

  addButtonClicked(){

    if (this.numberSelected === 0) {
      alert('Quantity Value is Zero!');
    } else {
      if (this.numberSelected > 1) {
        this.orderTotalPrice = this.orderTotalPrice + (this.numberSelected * this.sizePrice) + (this.numberSelected * this.toppingsPrice);
        this.currentQuantity = this.currentQuantity + this.numberSelected;
      } else {
        this.orderTotalPrice = this.orderTotalPrice + this.sizePrice + this.toppingsPrice;
        this.currentQuantity = this.currentQuantity + this.numberSelected;
      }


      this.order.toppingName = this.toppingsUpdate;
      this.order.toppingPrice = this.toppingsPrice;
      this.order.sizeName = this.sizeUpdate;
      this.order.sizePrice = this.sizePrice;
      this.order.orderQuantity = this.currentQuantity;
      this.order.totalPrice = this.orderTotalPrice;
      this.orderService.addOrder(this.order);
    }
    //alert('Your order now has ' + this.currentQuantity + 'and the total is ' + this.orderTotalPrice + ' CND');
  }
}
