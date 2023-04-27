import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products?: Product[];

  private url = 'http://localhost:4000/product';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}/`);
  }

  addProduct(product: Product) {
    return this.httpClient.post(this.url + '/', product);
  }

  updateProduct(product: Product) {
    return this.httpClient.put(this.url + `/${product._id}`, product);
  }

  deleteProduct(product: Product) {
    return this.httpClient.delete(this.url + `/${product._id}`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    category = category.toLowerCase();
    return this.httpClient.get<Product[]>(`${this.url}/categories/${category}`);
  }
}
