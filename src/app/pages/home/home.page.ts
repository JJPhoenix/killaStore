import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../common/interfaces/product.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.sass']
})
export class HomePage implements OnInit {

  products: IProduct[];
  showCart: boolean;

  constructor() {
    this.products = [
      {
        id: 1,
        code: '001',
        name: 'Abrigo Siale',
        imgPath: 'AbrigoSiale.png',
        price: 23.50,
        offer:false
      },
      {
        id: 2,
        code: '002',
        name: 'Bolsa escudo Nacional',
        imgPath: 'BolsoEscudoNacional.png',
        price: 23.50,
        offer: false
      },
      {
        id: 3,
        code: '003',
        name: 'Bomber Jacket',
        imgPath: 'BomberJacket.png',
        price: 23.50,
        offer: false
      },
      {
        id: 4,
        code: '004',
        name: 'Coleccion Mujeres Poderosa Warmis unidas',
        imgPath: 'COLECCIONUYARIWARMIPACHA.png',
        price: 23.50,
        offer: false
      },
      {
        id: 5,
        code: '005',
        name: 'Coleccion Mujeres Poderosa Micaela Morado',
        imgPath: 'ColecciónMujeresPoderosasMicaelaMorado.png',
        price: 23.50,
        offer: false
      },
      {
        id: 6,
        code: '006',
        name: 'Cuadro Condor Hembra',
        imgPath: 'CuadroCondorHembra.png',
        price: 23.50,
        offer: false
      },
      {
        id: 7,
        code: '007',
        name: 'Cuadro de la llegada del condor',
        imgPath: 'CuadroDeLaLlegadaDelCondor.png',
        price: 23.50,
        offer: false
      },
      {
        id: 8,
        code: '008',
        name: 'Cuadro Empollerate',
        imgPath: 'CuadroEmpollerate.png',
        price: 23.50,
        offer: false
      },
      {
        id: 9,
        code: '009',
        name: 'Cuadro la Candelaria',
        imgPath: 'CuadroLaCandelaria.png',
        price: 23.50,
        offer: false
      },
      {
        id: 10,
        code: '010',
        name: 'Muñeca Simona',
        imgPath: 'MuñecaSimona.png',
        price: 23.50,
        offer: false
      },
      {
        id: 11,
        code: '011',
        name: 'Pollera Rosas Ivory',
        imgPath: 'PolleraRosasIvory.png',
        price: 23.50,
        offer: false
      },
      {
        id: 12,
        code: '012',
        name: 'Warmis Unidas',
        imgPath: 'WarmisUnidas.png',
        price: 23.50,
        offer: false
      },
      {
        id: 13,
        code: '013',
        name: 'Pollera Rosas Ivory Sin Bordados',
        imgPath: 'PolleraRosasIvorySinBordados.png',
        price: 23.50,
        offer: false
      },
      {
        id: 14,
        code: '014',
        name: 'Pollera Coleccion Botanica Cantuta',
        imgPath: 'PolleraColeccionBotanicaCantuta.png',
        price: 23.50,
        offer: false
      },
    ]
    this.showCart = false
  }

  ngOnInit(): void {
  }

  showCartModal(){
    this.showCart = !this.showCart
  }

}
