import { Component } from '@angular/core';
import { Toppings } from '../toppings/toppings.model';
import { ToppingsService } from '../toppings/toppings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toppings: Toppings[];
  constructor(private toppingsService: ToppingsService) {}

  ngOnIntit(){
    this .toppings = this.toppingsService.getAllToppings();
  }

  ionViewWillEnter(){ }

}
