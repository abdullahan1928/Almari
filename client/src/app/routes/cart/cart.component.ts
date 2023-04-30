import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart-model';
import { Order } from 'src/app/services/order/order.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    address: '',
    card: '',
    cvc: '',
  };
  userId: any = null;
  cartTotal: number = 0;
  

  constructor(
    public cartService: CartService,
    private router: Router,
    private orderService: OrderService
  ) { }

  cartItems : CartItem[] = [];

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);  
    this.cartTotal = this.cartService.cartTotal();
    this.getCartItems();

  }

  getCartItems() {
  for (let it of this.cartService.cartItems) {
    var item = {'prodId': it._id, 'name':it.name, 'quantity': it.quantity};
    this.cartItems.push(item);
  }
  // console.log(this.cartItems);
  }


  // Create a New Order/ Checkout
  createOrder() {
    this.orderService.addOrder(this.userId, this.cartItems, this.cartTotal, this.formData.address).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  onSubmit() {
    this.createOrder();
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

}
