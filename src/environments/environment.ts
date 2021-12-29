// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'https://proindia-onlineshop-api.azurewebsites.net';

export const environment = {
  production: false,
  postCustomerDetails: baseUrl + '/api/Customer/CreateCustomer',
  getProductId: baseUrl + '/api/Product/GetProductById',
  getProduct: baseUrl + '/api/Product/GetAllProduct',
  postProduct: baseUrl + '/api/Product/AddProduct',
  editProduct: baseUrl + '/api/Product/EditProduct',
  deleteProduct: baseUrl + '/api/Product/DeleteProduct',
  getOrder: baseUrl + '/api/Order/GetAllOrder',
  postOrder: baseUrl + '/api/Order/AddOrder',
  updateOrder: baseUrl + '/api/Order/UpdateOrder',
  cancelOrder: baseUrl + '/api/Order/CancelOrder',
  getOrderById: baseUrl + '/api/Order/GetOrderById',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
