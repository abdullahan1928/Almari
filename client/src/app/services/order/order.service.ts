import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = 'http://localhost:4000';


  constructor(private http: HttpClient) { }


    addOrder(userId: string, products: any[], amount: number, address: string): Observable<any> {
      const url = `${this.url}/order`;
      const body = { userId, products, amount, address };
      return this.http.post(url, body);
    }

    getUserOrders(userId: string): Observable<any> {
      const url = `${this.url}/order?id=${userId}`;
      return this.http.get(url);
    }

    deleteOrder(orderId: string): Observable<any> {
      const url = `${this.url}/order/${orderId}`;
      return this.http.delete(url);
    }
    











}

