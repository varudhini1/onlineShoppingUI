import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  postCustomerDetails(data: Customer) {
    return this.http.post<Customer>(environment.postCustomerDetails, data);
  }
}
