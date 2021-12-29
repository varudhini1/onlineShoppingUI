import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductId(productId: string) {
    return this.http.get<string>(
      `${environment.getProductId}?productId=${productId}`
    );
  }

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(environment.getProduct);
  }

  postProduct(data: IProducts) {
    return this.http.post<IProducts>(environment.postProduct, data);
  }

  editProduct(data: IProducts): Observable<any> {
    return this.http.put(environment.editProduct, data);
  }

  deleteProduct(productId: string) {
    return this.http.delete<string>(
      `${environment.deleteProduct}?productId=${productId}`
    );
  }
}
