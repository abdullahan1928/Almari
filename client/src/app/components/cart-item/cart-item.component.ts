import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from 'src/app/model/cart-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  @Input()
  cartItem!: CartModel;
}
