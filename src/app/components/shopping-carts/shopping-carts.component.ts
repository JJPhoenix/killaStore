import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../common/interfaces/product.interface";

@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.sass']
})
export class ShoppingCartsComponent implements OnInit {
  @Input() products: IProduct[];
  @Input() totalPrice: number| undefined;
  @Output() closeModal: EventEmitter<void>=new EventEmitter<void>();

  @Input() tituloCart: string|undefined
  @Input() precioCart: string|undefined
  @Input() cuentaDirectaCart: string|undefined
  @Input() pagarCart: string|undefined
  @Input() continuarPagandoCart: string|undefined

  constructor() {
    this.products = []
  }

  ngOnInit(): void {
  }

  closeCart(){
    this.closeModal.emit()
  }
}
