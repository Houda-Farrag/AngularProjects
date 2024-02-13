import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Modules/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductsApiService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts_API(): Observable<Product[]> {

    return this.httpClient.get<Product[]>('http://localhost:3000/products')

  }

  getProductById(prdId: string): Observable<Product[]> {

    return this.httpClient.get<Product[]>(`http://localhost:3000/products?id=${prdId}`)

  }

  FilterWithApiCatID(catID: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:3000/products?categoryID=${catID}`)
  }

  AddNewProduct(newProd: Product) {
    return this.httpClient.post(`http://localhost:3000/products`, newProd)
  }

  UpdateProduct(updatedProd: {}, id: string) {
    return this.httpClient.patch(`http://localhost:3000/products/${id}`, updatedProd)
  }

  DeleteProduct(id: string): Observable<Product> {

    return this.httpClient.delete<Product>(`http://localhost:3000/products/${id}`)

  }
  
  getAllProductsIDs(): Observable<Product[]> {

    return this.httpClient.get<Product[]>('http://localhost:3000/products')

  }
}
