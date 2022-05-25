import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.sass']
})
export class CardProductComponent implements OnInit {
  @Input() priceProduct: number = 0;
  @Input() nameProduct: String|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
