import { Component, OnInit } from '@angular/core';
import { IProducts } from '../models/product';
import { ProductsService } from 'src/services/product/products.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private _productService: ProductsService,
    private _route: Router
  ) {}
  ngOnInit(): void {}
  postProduct(data: IProducts) {
    this._productService.postProduct(data).subscribe({
      next: (res: any) => {
        Swal.fire('Good Job!', 'Product got posted', res.toLocaleLowerCase());
        this._route.navigate(['/products']);
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
