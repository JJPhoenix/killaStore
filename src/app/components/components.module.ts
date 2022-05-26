import {NgModule} from "@angular/core";
import { CardProductComponent } from './card-product/card-product.component';
import { BannerPageComponent } from './banner-page/banner-page.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        CardProductComponent,
        BannerPageComponent,
        ShoppingCartsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardProductComponent,
        BannerPageComponent,
        ShoppingCartsComponent
    ]
})

export class ComponentsModule {}
