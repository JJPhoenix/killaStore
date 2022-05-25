import {NgModule} from "@angular/core";
import { CardProductComponent } from './card-product/card-product.component';
import { BannerPageComponent } from './banner-page/banner-page.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';

@NgModule({
  declarations:[
    CardProductComponent,
    BannerPageComponent,
    ShoppingCartsComponent
  ],
  exports: [
    CardProductComponent,
    BannerPageComponent,
    ShoppingCartsComponent
  ]
})

export class ComponentsModule {}
