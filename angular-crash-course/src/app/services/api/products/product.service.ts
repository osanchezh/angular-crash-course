import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string ='https://fakestoreapi.com/';

  constructor(private http:HttpClient) { }

  getAllProductsWithLimit(limit = 5){
    //const productsUrl=this.baseUrl+'products?limit='+limit;
    const productsUrl = `${this.baseUrl}products?limit=${limit}`;
    //const productsUrl = this.baseUrl+'products?='+limit;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product: ProductRepresentation) {
    const productsUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }

}
