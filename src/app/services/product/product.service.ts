import { Injectable } from '@angular/core';
import {IProduct} from "../../common/interfaces/product.interface";
import {PRODUCTS_MOCK} from "../../common/mocks/products.mocks";
import {HttpService} from "../http/http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpService) {

  }

  getProducts(): IProduct[]{
    return [];
    // return PRODUCTS_MOCK.success;
  }

}
