import { Injectable } from '@angular/core';
import { CartModel } from 'src/app/model/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems: CartModel[] = [];

  cartCount: number = 0;


  getCartItems() {
    return this.cartItems;
  }

  getCartCount() {
    return this.cartCount;
  }

  addToCart(item: any) {
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
