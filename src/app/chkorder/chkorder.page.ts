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
  tPrice: number;
  i: number;
  constructor(private orderservice: OrderService) {
   }

  ngOnInit() {
    this.orders = this.orderservice.getAllOrders();
  }

}
