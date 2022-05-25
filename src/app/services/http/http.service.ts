import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../../common/interfaces/product.interface";
import {PRODUCTS_MOCK} from "../../common/mocks/products.mocks";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpSuccessCode = 200;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {}
}
