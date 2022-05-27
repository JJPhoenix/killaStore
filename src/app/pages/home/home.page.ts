import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../common/interfaces/product.interface";
import {
  CONTENIDOACERCA,
  CONTENIDOBANNER,
  CONTENIDOBANNERBTN,
  CONTENIDOBTNCONTACTO,
  CONTENIDOBTNHOME,
  CONTENIDOBTNTIENDA,
  CONTENIDOCARTCONTINUARPAGANDO,
  CONTENIDOCARTPAGARCUENTA,
  CONTENIDOCARTSTOTAL,
  CONTENIDOCARTTITULO, CONTENIDOMISION, CONTENIDOMISIONTITULO,
  CONTENIDOPRODUCTO, CONTENIDOVISION, CONTENIDOVISIONTITULO
} from "../../common/constants/contenido.constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.sass']
})
export class HomePage implements OnInit {

  products: IProduct[];
  showCart: boolean;
  productsSelected: IProduct[];
  price: number;
  language: boolean;

  misionTitulo:string|undefined
  mision:string|undefined
  visionTitulo:string|undefined
  vision:string|undefined

  conteidoBanner: string|undefined
  btnBanner: string|undefined

  btnHome: string|undefined
  btnTienda: string|undefined
  btnContacto: string|undefined

  labelProducts: string|undefined

  tituloCart: string|undefined
  precioCart: string|undefined
  cuentaDirectaCart: string|undefined
  pagarCart: string|undefined
  continuarPagandoCart: string|undefined


  acerca: string|undefined

  constructor() {
    this.language = false
    this.price = 0
    this.products = [
      {
        id: 1,
        code: '001',
        name: 'Abrigo Siale',
        imgPath: 'AbrigoSiale.png',
        price: 120.00,
        offer:false
      },
      {
        id: 2,
        code: '002',
        name: 'Bolsa escudo Nacional',
        imgPath: 'BolsoEscudoNacional.png',
        price: 40.00,
        offer: false
      },
      {
        id: 3,
        code: '003',
        name: 'Bomber Jacket',
        imgPath: 'BomberJacket.png',
        price: 150.00,
        offer: false
      },
      {
        id: 4,
        code: '004',
        name: 'Coleccion Mujeres Poderosa Warmis unidas',
        imgPath: 'COLECCIONUYARIWARMIPACHA.png',
        price: 110.00,
        offer: false
      },
      {
        id: 5,
        code: '005',
        name: 'Coleccion Mujeres Poderosa Micaela Morado',
        imgPath: 'ColecciónMujeresPoderosasMicaelaMorado.png',
        price: 110.00,
        offer: false
      },
      {
        id: 6,
        code: '006',
        name: 'Cuadro Condor Hembra',
        imgPath: 'CuadroCondorHembra.png',
        price: 60.00,
        offer: false
      },
      {
        id: 7,
        code: '007',
        name: 'Cuadro de la llegada del condor',
        imgPath: 'CuadroDeLaLlegadaDelCondor.png',
        price: 60.00,
        offer: false
      },
      {
        id: 8,
        code: '008',
        name: 'Cuadro Empollerate',
        imgPath: 'CuadroEmpollerate.png',
        price: 60.00,
        offer: false
      },
      {
        id: 9,
        code: '009',
        name: 'Cuadro la Candelaria',
        imgPath: 'CuadroLaCandelaria.png',
        price: 60.00,
        offer: false
      },
      {
        id: 10,
        code: '010',
        name: 'Muñeca Simona',
        imgPath: 'MuñecaSimona.png',
        price: 40.00,
        offer: false
      },
      {
        id: 11,
        code: '011',
        name: 'Colección Uyari Rosas Ivory',
        imgPath: 'PolleraRosasIvory.png',
        price: 110.00,
        offer: false
      },
      {
        id: 12,
        code: '012',
        name: 'Warmis Unidas',
        imgPath: 'WarmisUnidas.png',
        price: 110.00,
        offer: false
      },
      {
        id: 13,
        code: '013',
        name: 'Colección Uyari Rosas Ivory Sin Bordados',
        imgPath: 'PolleraRosasIvorySinBordados.png',
        price: 110.00,
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
      {
        id: 15,
        code: '015',
        name: 'Cartera Urbana Única Warmi',
        imgPath: 'CarteraUrbanaUnicaWarmi.png',
        price: 23.50,
        offer: false
      },
      {
        id: 16,
        code: '016',
        name: 'Casaca Aves 34 Warmi',
        imgPath: 'CasacaAves34Warmi.png',
        price: 23.50,
        offer: false
      },
      {
        id: 17,
        code: '017',
        name: 'Casaca de cuero Flor Warmi',
        imgPath: 'CasacaDeCueroFlorWarmi.png',
        price: 23.50,
        offer: false
      },
      {
        id: 18,
        code: '018',
        name: 'Casaca de cuero Warmi',
        imgPath: 'CasacaDeCueroWarmi.png',
        price: 23.50,
        offer: false
      },
      {
        id: 19,
        code: '019',
        name: 'Casaca Floreada Warmi 21.',
        imgPath: 'CasacaFloreadaWarmi21.png',
        price: 23.50,
        offer: false
      },
      {
        id: 20,
        code: '020',
        name: 'Casaca Floreada Warmi 56',
        imgPath: 'CasacaFloreadaWarmi56.png',
        price: 23.50,
        offer: false
      },
      {
        id: 21,
        code: '021',
        name: 'Casaca Jean Warmi',
        imgPath: 'CasacaJeanWarmi.png',
        price: 23.50,
        offer: false
      },
      {
        id: 22,
        code: '022',
        name: 'Casaca Tor 21 Warmi',
        imgPath: 'CasacaTor21Warmi.png',
        price: 23.50,
        offer: false
      },
      {
        id: 23,
        code: '023',
        name: 'Casaca Única Warmi 98',
        imgPath: 'CasacaUnicaWarmi98.png',
        price: 23.50,
        offer: false
      },
      {
        id: 24,
        code: '024',
        name: 'Jean Flor Warmi 5',
        imgPath: 'JeanFlorWarmi5.png',
        price: 23.50,
        offer: false
      },
    ]
    this.showCart = false
    this.productsSelected = []

    this.conteidoBanner = CONTENIDOBANNER.contenidoEsp
    this.btnBanner = CONTENIDOBANNERBTN.contenidoEsp

    this.btnHome = CONTENIDOBTNHOME.contenidoEsp
    this.btnTienda = CONTENIDOBTNTIENDA.contenidoEsp
    this.btnContacto = CONTENIDOBTNCONTACTO.contenidoEsp

    this.labelProducts = CONTENIDOPRODUCTO.contenidoEsp

    this.tituloCart = CONTENIDOCARTTITULO.contenidoEsp
    this.precioCart = CONTENIDOCARTSTOTAL.contenidoEsp
    this.pagarCart = CONTENIDOCARTPAGARCUENTA.contenidoEsp
    this.continuarPagandoCart = CONTENIDOCARTCONTINUARPAGANDO.contenidoEsp

    this.misionTitulo= CONTENIDOMISIONTITULO.contenidoEsp
    this.visionTitulo= CONTENIDOVISIONTITULO.contenidoEsp

    this.vision=CONTENIDOVISION.contenidoEsp
    this.mision=CONTENIDOMISION.contenidoEsp

    this.acerca = CONTENIDOACERCA.contenidoEsp
  }

  ngOnInit(): void {
  }

  showCartModal(){
    this.showCart = !this.showCart
  }

  changeLanguage(){
    if (this.language){

      this.conteidoBanner = CONTENIDOBANNER.contenidoEsp

      this.btnBanner = CONTENIDOBANNERBTN.contenidoEsp

      this.btnHome = CONTENIDOBTNHOME.contenidoEsp
      this.btnTienda = CONTENIDOBTNTIENDA.contenidoEsp
      this.btnContacto = CONTENIDOBTNCONTACTO.contenidoEsp

      this.labelProducts = CONTENIDOPRODUCTO.contenidoEsp

      this.tituloCart = CONTENIDOCARTTITULO.contenidoEsp
      this.precioCart = CONTENIDOCARTSTOTAL.contenidoEsp
      this.pagarCart = CONTENIDOCARTPAGARCUENTA.contenidoEsp
      this.continuarPagandoCart = CONTENIDOCARTCONTINUARPAGANDO.contenidoEsp


      this.misionTitulo= CONTENIDOMISIONTITULO.contenidoEsp
      this.visionTitulo= CONTENIDOVISIONTITULO.contenidoEsp

      this.vision=CONTENIDOVISION.contenidoEsp
      this.mision=CONTENIDOMISION.contenidoEsp

      this.acerca = CONTENIDOACERCA.contenidoEsp
    }else {
      this.conteidoBanner = CONTENIDOBANNER.contenidoQuechua
      this.btnBanner = CONTENIDOBANNERBTN.contenidoQuechua

      this.btnHome = CONTENIDOBTNHOME.contenidoQuechua
      this.btnTienda = CONTENIDOBTNTIENDA.contenidoQuechua
      this.btnContacto = CONTENIDOBTNCONTACTO.contenidoQuechua

      this.labelProducts = CONTENIDOPRODUCTO.contenidoQuechua

      this.tituloCart = CONTENIDOCARTTITULO.contenidoQuechua
      this.precioCart = CONTENIDOCARTSTOTAL.contenidoQuechua
      this.pagarCart = CONTENIDOCARTPAGARCUENTA.contenidoQuechua
      this.continuarPagandoCart = CONTENIDOCARTCONTINUARPAGANDO.contenidoQuechua


      this.misionTitulo= CONTENIDOMISIONTITULO.contenidoQuechua
      this.visionTitulo= CONTENIDOVISIONTITULO.contenidoQuechua

      this.vision=CONTENIDOVISION.contenidoQuechua
      this.mision=CONTENIDOMISION.contenidoQuechua

      this.acerca = CONTENIDOACERCA.contenidoQuechua
    }
  }

  showCarModal(products:IProduct[]){
    this.products = products
    this.showCart = !this.showCart
  }

  addProductCart(product: IProduct){
    this.price = 0;
    this.productsSelected.push(product)
    this.productsSelected.forEach(product =>{
      this.price = this.price + product.price;
    })
  }

}
