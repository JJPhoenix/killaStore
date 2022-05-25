import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductoraPage} from "./productora.page";
import {ComponentsModule} from "../../components/components.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ProductoraPage
  }
];

@NgModule({
  declarations: [
    ProductoraPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductoraModule { }
