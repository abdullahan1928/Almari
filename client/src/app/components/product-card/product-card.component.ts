import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from 'src/app/model/cart-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  @Input()
  product: any;
}
