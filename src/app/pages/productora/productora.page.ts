import { Component, OnInit } from '@angular/core';
import {HOME_NAME} from "../../common/constants/routes.constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-productora',
  templateUrl: './productora.page.html',
  styleUrls: ['./productora.page.sass']
})
export class ProductoraPage implements OnInit {
  title:String = '';

  constructor(private router: Router) {
    this.title = HOME_NAME
  }

  goToEcommerce(){
    this.router.navigate(['home-store'])
  }

  ngOnInit(): void {
  }

}
