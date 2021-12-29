import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { ProductsComponent } from './products/products.component';
import { UpdateOrderComponent } from './update-order/update-order.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', component: ProductsComponent },
  { path: 'form', component: FormComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'customerDetails', component: CustomerDetailsComponent },
  { path: 'orderProduct/:id', component: OrderProductComponent },
  { path: 'orderDetails', component: OrderDetailsComponent },
  { path: 'updateOrder/:id', component: UpdateOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
