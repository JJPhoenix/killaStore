import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePage} from "./home.page";
import {ComponentsModule} from "../../components/components.module";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
