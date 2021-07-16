import { Injectable } from '@angular/core';
import { Orders } from './orders.model';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private orders: Orders[] = [];

}
