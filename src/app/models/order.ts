import { Customer } from './customer';

export class Order {
  orderId?: string;
  customerId = '0e27dadd-e835-40dc-b9fa-6e87011cc710';
  productId?: string;
  quantity: number;
  product;
  customer: Customer;
}
