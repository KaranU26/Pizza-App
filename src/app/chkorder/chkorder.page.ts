import { PlacedOrders } from './../placedorders/placedorders.model';
import { PlacedOrderService } from './../placedorders/placedorders.service';
import { Orders } from './../orders/orders.model';
import { OrderService } from './../orders/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chkorder',
  templateUrl: './chkorder.page.html',
  styleUrls: ['./chkorder.page.scss'],
})
export class CheckOrderPage implements OnInit {

  orders: Orders[];
  placedOrders: PlacedOrders;
  tPrice: number;
  i: number;
  totalprc: number;
  constructor(private orderservice: OrderService, private placedorderservice: PlacedOrderService) {
   }

  ngOnInit() {
    this.orders = this.orderservice.getAllOrders();
  }
  //couldnt get total price and quantity to show up for some reason, it is showing up just fine in the placed orders page
  ionViewDidLoad(){
    for (let index = 0; index < this.placedOrder.length; index++) {
      this.totalprc = this.totalprc + this.placedOrder[index].totalPrice;

    }
   }

  removeOrder(order){
    for (let index = 0; index < this.orders.length; index++) {
      if (this.orders[index] === order) {
        this.orders.splice(index, 1);
      }

    }
  }

  placedOrder(){
    this.placedOrders = new PlacedOrders();
    this.placedOrders.totalPrice = 0;
    for (let index = 0; index < this.orders.length; index++) {
      this.placedOrders.totalPrice = this.placedOrders.totalPrice + this.orders[index].totalPrice;
    }
    this.placedOrders.date = new Date().toISOString();
    this.placedorderservice.addOrder(this.placedOrders);
    this.orderservice.clearOrders();
  }


}
