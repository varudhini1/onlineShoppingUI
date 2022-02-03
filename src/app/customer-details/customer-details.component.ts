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
  customers: Customer[] = [];
  constructor(private _customerService: CustomerService) {}

  ngOnInit(): void {}

  postCustomerDetails(data: Customer) {
    this._customerService.postCustomerDetails(data).subscribe({
      next: (res) => {
        localStorage.setItem('CustomerId', res.customerId);
        Swal.fire('Good Job!', 'Customer Details got posted', 'success');
      },
    });
  }
}
