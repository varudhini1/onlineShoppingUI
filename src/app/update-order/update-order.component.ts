import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/services/order/order.service';
import { Order } from '../models/order';
import Swal from 'sweetalert2';
import { ProductsService } from 'src/services/product/products.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss'],
})
export class UpdateOrderComponent implements OnInit {
  orders = new Order();
  private orderId: string;
  orderDetail: any;
  productDetail: any;

  constructor(
    private _orderService: OrderService,
    private _route: Router,
    private _router: ActivatedRoute,
    private _productService: ProductsService
  ) {
    this.orderId = this._router.snapshot.paramMap.get('id');
    this.orders.orderId = this.orderId;
  }

  ngOnInit(): void {
    this.order();
  }

  order() {
    this._orderService.getOrderById(this.orderId).subscribe((data) => {
      this.orderDetail = data;
      this._productService
        .getProductId(this.orderDetail?.productId)
        .subscribe((data) => {
          this.productDetail = data;
        });
    });
  }
  updateOrder(orderId: string, quantity: number) {
    this._orderService.updateOrder(orderId, quantity).subscribe({
      next: () => {
        Swal.fire('Good Job', 'You have updated the order!', 'success');
        this._route.navigate(['/orderDetails']);
      },
    });
  }
}
