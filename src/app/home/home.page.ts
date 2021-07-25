import { Orders } from './../orders/orders.model';
import { Component } from '@angular/core';
import { Toppings } from '../toppings/toppings.model';
import { ToppingsService } from '../toppings/toppings.service';
import { Sizes } from '../size/sizes.model';
import { SizesService } from '../size/sizes.service';
import { OrderService } from '../orders/orders.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toppings: Toppings[];
  orderList: Array<Orders> = [];
  sizes: Sizes[];
  order: Orders;
  sizeUpdate: string;
  toppingsUpdate: string;
  itemSelected: any;
  numberSelected: number;
  toppingsPrice: number;
  sizePrice: number;
  orderTotalPrice = 0;
  currentQuantity = 0;
  errorMessage: 'Quantity Value is 0';
  pricePizza: number;
  constructor(public alertCtrl: AlertController, private toppingsService: ToppingsService,
    private sizesService: SizesService, private orderService: OrderService) {}

  ngOnInit(){
    this.toppings = this.toppingsService.getAllToppings();
    this.sizes = this.sizesService.getAllSizes();
  }

  ionViewWillEnter(){ }

  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Success!',
      subHeader: 'Pizza Added',
      message: 'Your Order has ' + this.currentQuantity + ' pizzas, the total is ' + this.orderTotalPrice + ' CDN',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  async zeroAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Success!',
      subHeader: 'Pizza Added',
      message: 'Your Order has ' + this.currentQuantity + ' pizzas, the total is ' + this.orderTotalPrice + ' CDN',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
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

    if (this.orderService.orders.length === 0) {
      this.currentQuantity = 0;
      this.orderTotalPrice = 0;
    }
    if (this.numberSelected === 0) {

    } else {
      if (this.numberSelected > 1) {
        this.orderTotalPrice = this.orderTotalPrice + (this.numberSelected * this.sizePrice) + (this.numberSelected * this.toppingsPrice);
        this.currentQuantity = this.currentQuantity + this.numberSelected;
        this.pricePizza = (this.numberSelected * this.sizePrice) + (this.numberSelected * this.toppingsPrice);
      } else {
        this.orderTotalPrice = this.orderTotalPrice + this.sizePrice + this.toppingsPrice;
        this.currentQuantity = this.currentQuantity + this.numberSelected;
        this.pricePizza = (this.numberSelected * this.sizePrice) + (this.numberSelected * this.toppingsPrice);
      }

      this.order = new Orders();
      this.order.toppingName = this.toppingsUpdate;
      this.order.toppingPrice = this.toppingsPrice;
      this.order.sizeName = this.sizeUpdate;
      this.order.sizePrice = this.sizePrice;
      this.order.orderQuantity = this.currentQuantity;
      this.order.totalPrice = this.orderTotalPrice;
      this.order.pizzaPrice = this.pricePizza;
      this.orderService.addOrder(this.order);
    }
    this.showAlert();
  }
}
