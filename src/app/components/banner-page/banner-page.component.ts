import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-page',
  templateUrl: './banner-page.component.html',
  styleUrls: ['./banner-page.component.sass']
})
export class BannerPageComponent implements OnInit {

  @Input() contenido:string|undefined
  @Input() btnComprar:string|undefined

  constructor() {

  }

  ngOnInit(): void {
  }

}
