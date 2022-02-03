import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/product/products.service';
import { IProducts } from '../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProducts[] = [];
  productName: string;

  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this._productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  confirm(productId: string) {
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
        this._productService.deleteProduct(productId).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'Product got deleted.', 'success');
            this.getProducts();
          },
        });
      }
    });
  }

  searchProduct() {
    if (this.productName) {
      this.products = this.products.filter((val) => {
        return val?.productName
          ?.toLocaleLowerCase()
          .match(this.productName.toLocaleLowerCase());
      });
    } else if (this.productName == '') {
      this.getProducts();
    }
  }
}
