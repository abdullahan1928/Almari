import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from 'src/app/model/cart-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'minicart-item',
  templateUrl: './minicart-item.component.html',
  styleUrls: ['./minicart-item.component.scss']
})
export class MinicartItemComponent implements OnInit {

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  @Input()
  cartItem!: CartModel;

}
