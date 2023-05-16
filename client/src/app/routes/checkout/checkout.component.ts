import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart-model';
import { OrderService } from 'src/app/services/order/order.service';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    address: '',
    card: '',
    cvc: '',
  };

  cartItems : CartItem[] = [];
  cartTotal: number = 0;

  userId: any = null;
  
  constructor( public authService: AuthService,
    public cartService: CartService,
    private router: Router,
    private orderService: OrderService) {
     }



    ngOnInit(): void {
      this.userId = localStorage.getItem('userId');
      console.log(this.userId);  
      this.cartTotal = this.cartService.cartTotal();
      // this.getCartItems();
    }

  // getCartItems() {
  //   for (let it of this.cartService.cartItems) {
  //     var item = {'prodId': it._id, 'name':it.name, 'quantity': it.quantity};
  //     this.cartItems.push(item);
  //   }
  //   // console.log(this.cartItems);
  //   }
  





}
