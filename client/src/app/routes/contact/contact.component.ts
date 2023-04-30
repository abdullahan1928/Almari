import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/services/order/order.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/model/cart-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  orders: any[] = [];


  constructor(private orderService: OrderService) { }
  userId: any = null;
  ngOnInit(): void {

    this.userId = localStorage.getItem('userId');
    this.orderService.getUserOrders(this.userId).subscribe(data => {
        console.log(data);
        for (let it of data) {
          if(it.userId == this.userId)
          this.orders.push(it);
        }
    });
  }

  deleteOrder(orderId: any) {
    this.orderService.deleteOrder(orderId).subscribe(data => {
      console.log(data);
      this.orders = this.orders.filter(item => item._id !== orderId);
    });
  }

}
