import {NgModule} from "@angular/core";
import { CardProductComponent } from './card-product/card-product.component';
import { BannerPageComponent } from './banner-page/banner-page.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import {CommonModule} from "@angular/common";
import { ContactModalComponent } from './contact-modal/contact-modal.component';

@NgModule({
    declarations: [
        CardProductComponent,
        BannerPageComponent,
        ShoppingCartsComponent,
        ContactModalComponent
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
