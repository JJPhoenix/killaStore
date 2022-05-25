import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {COMMERCE_NAME, COMMERCE_ROUTE, HOME_NAME, HOME_ROUTE} from "./common/constants/routes.constants";
import {HomePage} from "./pages/home/home.page";
import {ProductoraPage} from "./pages/productora/productora.page";

const routes: Routes = [
  {
    path:"",
    redirectTo: HOME_ROUTE,
    pathMatch: "full"
  },
  {
    path: COMMERCE_ROUTE,
    component: HomePage,
    data:{
      title: COMMERCE_NAME
    }
  },
  {
    path: HOME_ROUTE,
    component: ProductoraPage,
    data:{
      title: COMMERCE_NAME
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
