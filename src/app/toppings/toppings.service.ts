import { Injectable } from '@angular/core';
import { Toppings } from './toppings.model';

@Injectable({
  providedIn: 'root'
})

export class ToppingsService {

  private toppings: Toppings[] = [
    {
      name: 'Vegetables',
      price: 5.95
    },
    {
      name: 'Meat Balls',
      price: 7.00
    },
    {
      name: 'Pepperoni',
      price: 4.30
    },
    {
      name: 'Mushrooms',
      price: 3.25
    }
  ];

  getAllToppings(){
    return [...this.toppings];
  }

}
