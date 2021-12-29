import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/product/products.service';
import { OrderService } from 'src/services/order/order.service';
import { Order } from '../models/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  orders: Order[] = [];

  constructor(
    private _productService: ProductsService,
    private _orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.viewOrderDetails();
  }
  viewOrderDetails() {
    this._orderService.viewOrderDetails().subscribe((data) => {
      data.forEach((orderItem) => {
        this.getProductDetail(orderItem.productId).subscribe((res) => {
          orderItem.product = res;
        });
      });
      this.orders = data;
    });
  }

  getProductDetail(productid: string) {
    return this._productService.getProductId(productid);
  }

  confirmation(orderId: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        this._orderService.cancelOrder(orderId).subscribe({
          next: (res: any) => {
            Swal.fire(
              'Cancelled',
              'You have cancelled the order!',
              res.toLocaleLowerCase()
            );
            this.viewOrderDetails();
          },
        });
      }
    });
  }
}
