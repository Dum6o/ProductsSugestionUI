import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductsResponse } from '../interfaces/products-response';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ProductsRequest } from '../interfaces/products-request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  checkConnection(): Observable<boolean> {
    return this.http.get<boolean>(this.baseURL).pipe(
      tap(data => console.log('Connected: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProducts(request: ProductsRequest) {
    const query = Object.keys(request)
      .filter(key => request[key] != null)
      .map(key => key + '=' + encodeURI(request[key]))
      .join('&');
    const path = `${this.baseURL}/products?${query}`;
    console.log(path);
    return this.http.get<ProductsResponse>(path).pipe(
      map(p => {
        if (!p.success) {
          throw new Error();
        }
        return p.products;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err.error);
  }
}
