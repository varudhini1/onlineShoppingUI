import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/services/order/order.service';
import { ProductsService } from 'src/services/product/products.service';
import { Order } from '../models/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss'],
})
export class OrderProductComponent implements OnInit {
  private productId?: string;
  orderDetails = new Order();
  productDetail: any;

  constructor(
    private _route: Router,
    private _router: ActivatedRoute,
    private _orderService: OrderService,
    private _productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productId = this._router.snapshot.paramMap.get('id');
    this.productDetails();
  }

  productDetails() {
    this._productService.getProductId(this.productId).subscribe((data) => {
      this.productDetail = data;
    });
  }

  orderProduct() {
    this.orderDetails.productId = this.productId;
    this.orderDetails.product = this.productDetail;
    this._orderService.orderProduct(this.orderDetails).subscribe({
      next: (res: any) => {
        Swal.fire('Good Job!', 'Product got ordered', res.toLocaleLowerCase());
        this._route.navigate(['/orderDetails']);
      },
      error: (err: any) => {
        Swal.fire(
          'Invalid input!',
          err.status.toString() + ' ' + 'Error',
          'error'
        );
      },
    });
  }
}
