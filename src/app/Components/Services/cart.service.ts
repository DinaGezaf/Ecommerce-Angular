import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cart } from '../Model/ICart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  URL: string = 'http://localhost:8080/cart';

  constructor(public http: HttpClient) {}

  getCartDetails(id: number) {
    return this.http.get<Cart[]>(this.URL);
  }
}
