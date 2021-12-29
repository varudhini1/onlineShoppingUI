import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import Swal from 'sweetalert2';
import { CustomerService } from 'src/services/customer/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  constructor(private _customerService: CustomerService) {}

  postCustomerDetails(data: Customer) {
    this._customerService.postCustomerDetails(data).subscribe({
      next: (res: any) => {
        Swal.fire(
          'Good Job!',
          'Customer Details got posted',
          res.toLocaleLowerCase()
        );
      },
    });
  }
  ngOnInit(): void {}
}
