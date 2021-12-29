import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  orderProduct(data: Order) {
    return this.http.post(environment.postOrder, data);
  }

  getOrderById(orderId: string) {
    return this.http.get<string>(
      `${environment.getOrderById}?productId=${orderId}`
    );
  }

  viewOrderDetails(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.getOrder);
  }

  updateOrder(orderId: string, quantity: number) {
    return this.http.put(
      `${environment.updateOrder}?orderId=${orderId}&quantity=${quantity}`,
      quantity
    );
  }

  cancelOrder(orderId: string) {
    return this.http.put<string>(
      `${environment.cancelOrder}?orderId=${orderId}`,
      orderId
    );
  }
}
