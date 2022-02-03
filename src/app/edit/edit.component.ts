import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/services/product/products.service';
import { IProducts } from '../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  private productId?: string;
  productItem: any;

  constructor(
    private _router: ActivatedRoute,
    private _route: Router,
    private _productService: ProductsService
  ) {
    this.productId = this._router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productDetails();
  }

  productDetails() {
    this._productService.getProductId(this.productId).subscribe((data) => {
      this.productItem = data;
    });
  }
  editProduct() {
    const updateList: IProducts = {
      productId: this.productItem.productId,
      productName: this.productItem.productName,
      totalQuantity: this.productItem.totalQuantity,
    };
    this._productService.editProduct(updateList).subscribe({
      next: () => {
        Swal.fire('Good Job!', 'Product got edited', 'success');
        this._route.navigate(['/products']);
      },
      error: (err: any) => {
        Swal.fire('Try again', err.status.toString() + ' ' + 'Error', 'error');
      },
    });
  }
}
