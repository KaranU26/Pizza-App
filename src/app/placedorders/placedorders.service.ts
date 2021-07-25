import { Injectable } from '@angular/core';
import { PlacedOrders } from './placedorders.model';

@Injectable({
  providedIn: 'root'
})

export class PlacedOrderService {

  public placedOrders: PlacedOrders[] = [];

  constructor(){
  }

  addOrder(placedorder: PlacedOrders){

    this.placedOrders.push(placedorder);
  }

  getAllOrders(){
    return this.placedOrders;
  }

}
