import { Component, OnInit } from '@angular/core';
import {HOME_NAME} from "../../common/constants/routes.constants";
import {Router} from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productora',
  templateUrl: './productora.page.html',
  styleUrls: ['./productora.page.sass']
})
export class ProductoraPage implements OnInit {
  title:String = '';

  constructor(private router: Router, private modalService: NgbModal) {
    this.title = HOME_NAME
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy:'contact-modal' });
  }

  goToEcommerce(){
    this.router.navigate(['home-store'])
  }

  ngOnInit(): void {
  }

}
