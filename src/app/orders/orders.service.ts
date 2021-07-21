import { Injectable } from '@angular/core';
import { Orders } from './orders.model';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  public orders: Orders[] = [];

  constructor(){
  }

  addOrder(order: Orders){

    this.orders.push(order);
  }
}
