import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  URL: string = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get(this.URL);
  }
  getOrderById(userId: any) {
    return this.http.get(`${this.URL}/${userId}`);
  }
  addOrder(order: any) {
    return this.http.post(this.URL, order);
  }

  editOrder(userId: any, order: any) {
    return this.http.post(`${this.URL}/${userId}`, order);
  }
  deleteOrder(userId: any) {
    return this.http.delete(`${this.URL}/${userId}`);
  }
}
