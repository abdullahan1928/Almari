export interface CartModel {
    _id: string;
    name: string;
    quantity: number;
    price: number;
    imageUrl: string;
}


export interface CartItem {
    prodId: string;
    name: string;
    quantity: number;
  }