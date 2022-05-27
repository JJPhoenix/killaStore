import {NgModule} from "@angular/core";
import { CardProductComponent } from './card-product/card-product.component';
import { BannerPageComponent } from './banner-page/banner-page.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import {CommonModule} from "@angular/common";
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
    declarations: [
        CardProductComponent,
        BannerPageComponent,
        ShoppingCartsComponent,
        ContactFormComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardProductComponent,
        BannerPageComponent,
        ShoppingCartsComponent,
        ContactFormComponent
    ]
})

export class ComponentsModule {}
