import { PlacedOrders } from './../placedorders/placedorders.model';
import { PlacedOrderService } from './../placedorders/placedorders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placedorder',
  templateUrl: './placedorder.page.html',
  styleUrls: ['./placedorder.page.scss'],
})
export class PlacedOrderPage implements OnInit {

  placedOrder: PlacedOrders[];
  totalprc: number;
  constructor(private placedOrderService: PlacedOrderService) { }

  ngOnInit() {
    this.placedOrder = this.placedOrderService.getAllOrders();
  }

  ionViewDidLoad(){
   for (let index = 0; index < this.placedOrder.length; index++) {
     this.totalprc = this.totalprc + this.placedOrder[index].totalPrice;

   }
  }

}
