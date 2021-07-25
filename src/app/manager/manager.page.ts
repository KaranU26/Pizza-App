import { OrderService } from './../orders/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {
  constructor(private orderservice: OrderService) { }

  ngOnInit() {

  }

  newOrder(){
    this.orderservice.clearOrders();
  }

}
