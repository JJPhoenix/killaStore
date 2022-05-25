import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../common/interfaces/product.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.sass']
})
export class HomePage implements OnInit {

  products: IProduct[];

  constructor() {
    this.products = [
      {
        id: 1,
        code: '002',
        name: 'Harry Potter',
        price: 23.50
      },
      {
        id: 2,
        code: '003',
        name: 'Narnia',
        price: 30.59
      },
      {
        id: 3,
        code: '003',
        name: 'Narnia',
        price: 30.59
      },
      {
        id: 4,
        code: '003',
        name: 'Narnia',
        price: 30.59
      },
      {
        id: 5,
        code: '003',
        name: 'Narnia',
        price: 30.59
      }
    ]
  }

  ngOnInit(): void {
  }

}
