import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from 'src/app/model/cart-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  @Input()
  cartItem!: CartModel;

  @Input()
  key: any;
}
