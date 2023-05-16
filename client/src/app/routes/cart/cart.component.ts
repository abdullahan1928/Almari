import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart-model';
import { OrderService } from 'src/app/services/order/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';


declare var StripeCheckout: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    address: 'SEECS, NUST',
    card: '',
    cvc: '',
  };
  userId: any = null;
  cartTotal: number = 0;
  userEmail: any = null;
  

  constructor(
    public cartService: CartService,
    private router: Router,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
  ) { }

  cartItems : CartItem[] = [];
  handler!: any;



  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.userEmail = localStorage.getItem('email');
    console.log(this.userId);  
    this.cartTotal = this.cartService.cartTotal();
    this.getCartItems();
    console.log(this.userEmail);

    this.handler = StripeCheckout.configure({
      key: 'pk_test_51N86YBALTDrEF6UyicxwGyfkkbqNC0tfTtP28yfr2mkXdx3VIePsDfvh8c6r83mGswXkRcZhxgasbyW1VPC5iFtg00OU8LwYms',
      image: 'https://static-01.daraz.com.bd/p/5ca78224f9945abae6b88eb00e878852.jpg_720x720.jpg_.webp',
      description: 'Lumber 1 Almari Purchase',
      locale: 'auto',
      email: this.userEmail,
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Payment Success!!');
        // Display Snack Bar
        this.snackBar.open('Payment Success!', 'OK', {
          duration: 5000
        });
      }
    });


  }

  checkout() {
    if (this.cartService.cartItems.length == 0 ) {
      alert('Cart is Empty');
      return;
    }
    else if (this.userEmail == null || this.userId == null) {
      alert('Please Login First');
      this.router.navigate(['/login']);
      return;
    }
    this.handler.open({
      name: 'Almari Ecommerce',
      description: 'Lumber 1 Almari Purchase',
      amount: this.cartTotal * 100,
      token: (token: any) => {
        console.log(token);
        this.createOrder();
        this.cartService.clearCart();
        this.router.navigate(['/']);
      }

    });
  }

  getCartItems() {
  for (let it of this.cartService.cartItems) {
    var item = {'prodId': it._id, 'name':it.name, 'quantity': it.quantity};
    this.cartItems.push(item);
  }
  }


    // Create a New Order/ Checkout
    createOrder() {
      this.orderService.addOrder(this.userId, this.cartItems, this.cartTotal, this.formData.address).subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    }


  // goToCheckout() {
  //   this.router.navigate(['/checkout']);
  // }
  

  onSubmit() {
    console.log("Submitted");
    this.checkout();
  }


}
