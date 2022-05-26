import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IProduct} from "../../common/interfaces/product.interface";

@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.sass']
})
export class ShoppingCartsComponent implements OnInit {
  products: IProduct[];
  @Output()closeModal: EventEmitter<void>=new EventEmitter<void>();

  constructor() {
    this.products = [
      {
        id: 1,
        code: '001',
        name: 'Abrigo Siale',
        imgPath: 'AbrigoSiale.png',
        price: 23.50,
        offer:true
      },
      {
        id: 2,
        code: '002',
        name: 'Bolsa escudo Nacional',
        imgPath: 'BolsoEscudoNacional.png',
        price: 23.50,
        offer:true
      }
    ]
  }

  ngOnInit(): void {
  }

  closeCart(){
    this.closeModal.emit()
  }
}
