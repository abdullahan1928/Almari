import { Injectable } from '@angular/core';
import { CartModel } from 'src/app/model/cart-model';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  cartItems: CartModel[] = [];

  cartCount: number = 0;

//   stripePromise = loadStripe('pk_test_51N86YBALTDrEF6UyicxwGyfkkbqNC0tfTtP28yfr2mkXdx3VIePsDfvh8c6r83mGswXkRcZhxgasbyW1VPC5iFtg00OU8LwYms');

//   async checkout(products: any[]) {
//     const line_items = products.map(product => ({
//         price_data: {
//             currency: 'usd',
//             product_data: {
//                 name: product.name,
//             },
//             unit_amount: product.price,
//         },
//         quantity: 1,
//     }));

//     const response = await this.http.post<{ sessionId: string }>('/create-checkout-session', {
//         line_items,
//         success_url: window.location.origin + '/success?session_id={CHECKOUT_SESSION_ID}',
//         cancel_url: window.location.origin + '/cancel',
//     }).toPromise();

//     if (!response) {
//         throw new Error("Failed to create checkout session");
//     }

//     const { sessionId } = response;

//     const stripe = await this.stripePromise;
//     await stripe?.redirectToCheckout({ sessionId });
// }




  getCartItems() {
    return this.cartItems;
  }

  getCartCount() {
    return this.cartCount;
  }

  addToCart(item: any) {
    console.log(item);
    if (this.cartItems.includes(item)) {
      item.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.cartCount++;
  }

  removeItem(item: any) {
    this.cartItems.splice(this.cartItems.indexOf(item), 1);
    this.cartCount = this.cartItems.length;
  }

  incQuantity(item: any) {
    item.quantity++;
    this.cartCount++;
  }

  decQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartCount--;
    }
  }

  clearCart() {
    this.cartItems = [];
    this.cartCount = 0;
  }

  cartTotal() {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.price * item.quantity;
    })
    return total;
  }
}
