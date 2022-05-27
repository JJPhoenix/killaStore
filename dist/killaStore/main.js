"use strict";
(self["webpackChunkkillaStore"] = self["webpackChunkkillaStore"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/constants/routes.constants */ 3754);
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.page */ 8774);
/* harmony import */ var _pages_productora_productora_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/productora/productora.page */ 3570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






const routes = [
    {
        path: "",
        redirectTo: _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__.HOME_ROUTE,
        pathMatch: "full"
    },
    {
        path: _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__.COMMERCE_ROUTE,
        component: _pages_home_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
        data: {
            title: _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__.COMMERCE_NAME
        }
    },
    {
        path: _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__.HOME_ROUTE,
        component: _pages_productora_productora_page__WEBPACK_IMPORTED_MODULE_2__.ProductoraPage,
        data: {
            title: _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__.COMMERCE_NAME
        }
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AppComponent {
    constructor() {
        this.title = 'killaStore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.module */ 5129);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ 7693);
/* harmony import */ var _pages_productora_productora_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/productora/productora.module */ 6524);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _pages_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
            _pages_productora_productora_module__WEBPACK_IMPORTED_MODULE_4__.ProductoraModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _pages_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _pages_productora_productora_module__WEBPACK_IMPORTED_MODULE_4__.ProductoraModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule] }); })();


/***/ }),

/***/ 3297:
/*!*********************************************************!*\
  !*** ./src/app/common/constants/contenido.constants.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTENIDOBANNER": () => (/* binding */ CONTENIDOBANNER),
/* harmony export */   "CONTENIDOBANNERBTN": () => (/* binding */ CONTENIDOBANNERBTN),
/* harmony export */   "CONTENIDOBTNHOME": () => (/* binding */ CONTENIDOBTNHOME),
/* harmony export */   "CONTENIDOBTNTIENDA": () => (/* binding */ CONTENIDOBTNTIENDA),
/* harmony export */   "CONTENIDOBTNCONTACTO": () => (/* binding */ CONTENIDOBTNCONTACTO),
/* harmony export */   "CONTENIDOPRODUCTO": () => (/* binding */ CONTENIDOPRODUCTO),
/* harmony export */   "CONTENIDOCARTTITULO": () => (/* binding */ CONTENIDOCARTTITULO),
/* harmony export */   "CONTENIDOCARTSTOTAL": () => (/* binding */ CONTENIDOCARTSTOTAL),
/* harmony export */   "CONTENIDOCARTCONTINUARPAGANDO": () => (/* binding */ CONTENIDOCARTCONTINUARPAGANDO),
/* harmony export */   "CONTENIDOCARTPAGARCUENTA": () => (/* binding */ CONTENIDOCARTPAGARCUENTA),
/* harmony export */   "CONTENIDOVISIONTITULO": () => (/* binding */ CONTENIDOVISIONTITULO),
/* harmony export */   "CONTENIDOVISION": () => (/* binding */ CONTENIDOVISION),
/* harmony export */   "CONTENIDOMISIONTITULO": () => (/* binding */ CONTENIDOMISIONTITULO),
/* harmony export */   "CONTENIDOMISION": () => (/* binding */ CONTENIDOMISION),
/* harmony export */   "CONTENIDOACERCA": () => (/* binding */ CONTENIDOACERCA)
/* harmony export */ });
const CONTENIDOBANNER = {
    contenidoEsp: "La marca “Warmi Pacha”, el nombre tiene su origen en el Quecha que significa Warmi: Mujer, y Pacha: " +
        "Ropa, formando la palabra en castellano “Ropa para mujer”.",
    contenidoQuechua: "Warmi Pacha empresa,  sutin churasqa amun runa simipi, chaupi Warmi: Mujer, pachañataq: Ropa, " +
        "lloyta juntaspa Warmi Pacha: Ropa para mujer."
};
const CONTENIDOBANNERBTN = {
    contenidoEsp: "Comprar",
    contenidoQuechua: "Rantiy"
};
const CONTENIDOBTNHOME = {
    contenidoEsp: "Home",
    contenidoQuechua: "Wasi"
};
const CONTENIDOBTNTIENDA = {
    contenidoEsp: "Tienda",
    contenidoQuechua: "Puestoky"
};
const CONTENIDOBTNCONTACTO = {
    contenidoEsp: "Contacto",
    contenidoQuechua: "Tupananchiqpa"
};
const CONTENIDOPRODUCTO = {
    contenidoEsp: "Productos",
    contenidoQuechua: "Rurukuna"
};
const CONTENIDOCARTTITULO = {
    contenidoEsp: "Shopping cart",
    contenidoQuechua: "Shopping cart"
};
const CONTENIDOCARTSTOTAL = {
    contenidoEsp: "Subtotal",
    contenidoQuechua: "Lluy yupay"
};
const CONTENIDOCARTCONTINUARPAGANDO = {
    contenidoEsp: "Continuar comprando",
    contenidoQuechua: "Yapa rantinaykipaq"
};
const CONTENIDOCARTPAGARCUENTA = {
    contenidoEsp: "Pagar cuenta",
    contenidoQuechua: "Paganapaq"
};
const CONTENIDOVISIONTITULO = {
    contenidoEsp: "Visión",
    contenidoQuechua: "Visiuniku"
};
const CONTENIDOVISION = {
    contenidoEsp: "Nuestra visión como Uyari en colaboración con Warmi Pacha, tiene como objetivo ser reconocida de " +
        "forma internacional  por la diversidad que inculcan nuestras prendas andinas y convertirnos en un símbolo cultural " +
        "para nuestro país.",
    contenidoQuechua: "ñuqaycupa visiuniku kay Warmi Pacha empresawan y  Uyari produccionespa ayudanwan, munaniku " +
        "reqsichikuyta lluy Perú llagtawan y lluy enteru llaqtawan, kay achka pacha andinalauta, sumaq pachaman pasachispa, " +
        "atun empresaman muyuspaku munaniku convertikuyta atun kuyuchiq cultura andinata kay Perú llaqtata."
};
const CONTENIDOMISIONTITULO = {
    contenidoEsp: "Misión",
    contenidoQuechua: "Suyuy"
};
const CONTENIDOMISION = {
    contenidoEsp: "Nuestra misión como Uyari en colaboración con Warmi Pacha es plasmar prendas andinas que son menos" +
        " valoradas y  transformarlas en prendas urbanas de tendencia, pero sin perder su esencia. ",
    contenidoQuechua: "Ñuqaycupa suyuyku kay Warmi Pacha empresawan y  Uyari produccionespa ayudanwan, ñuqayku " +
        "reqsichisqaykiku kay mana sumaq riqsiq pachaykuta,  llagata runakunapa gustuman sumaq pachacunaman muyuykachispa, " +
        "chaysi ychaqa mana escenciakuta wischuspa."
};
const CONTENIDOACERCA = {
    contenidoEsp: "Acerca",
    contenidoQuechua: "Chaimanta"
};


/***/ }),

/***/ 3754:
/*!******************************************************!*\
  !*** ./src/app/common/constants/routes.constants.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOME_ROUTE": () => (/* binding */ HOME_ROUTE),
/* harmony export */   "HOME_NAME": () => (/* binding */ HOME_NAME),
/* harmony export */   "COMMERCE_ROUTE": () => (/* binding */ COMMERCE_ROUTE),
/* harmony export */   "COMMERCE_NAME": () => (/* binding */ COMMERCE_NAME)
/* harmony export */ });
const HOME_ROUTE = "uyari_productora";
const HOME_NAME = "UYARI";
const COMMERCE_ROUTE = "home-store";
const COMMERCE_NAME = "Killa store";


/***/ }),

/***/ 6466:
/*!*****************************************************************!*\
  !*** ./src/app/components/banner-page/banner-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerPageComponent": () => (/* binding */ BannerPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class BannerPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BannerPageComponent.ɵfac = function BannerPageComponent_Factory(t) { return new (t || BannerPageComponent)(); };
BannerPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerPageComponent, selectors: [["app-banner-page"]], inputs: { contenido: "contenido", btnComprar: "btnComprar" }, decls: 15, vars: 3, consts: [[1, "h-64", "rounded-md", "overflow-hidden", "bg-cover", "bg-center"], [1, "bg-gray-900", "bg-opacity-50", "flex", "items-center", "h-full"], ["autoplay", "", "loop", "", 1, "w-full", 3, "muted"], ["src", "assets/video/warmipacha.mp4", "type", "video/mp4"], [1, "absolute", "px-10", "max-w-xl"], [1, "text-2xl", "text-white", "font-semibold"], [1, "mt-2", "text-white"], [1, "flex", "items-center", "mt-4", "px-3", "py-2", "text-white", "text-sm", "uppercase", "font-medium", "rounded", "hover:", "focus:outline-none", "focus:", 2, "background-color", "#F47C7C"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "mx-2"], ["d", "M17 8l4 4m0 0l-4 4m4-4H3"]], template: function BannerPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ropa a tu medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contenido, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnComprar);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItcGFnZS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 9776:
/*!*******************************************************************!*\
  !*** ./src/app/components/card-product/card-product.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardProductComponent": () => (/* binding */ CardProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class CardProductComponent {
    constructor() {
        this.priceProduct = 0;
    }
    ngOnInit() {
    }
}
CardProductComponent.ɵfac = function CardProductComponent_Factory(t) { return new (t || CardProductComponent)(); };
CardProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardProductComponent, selectors: [["app-card-product"]], inputs: { priceProduct: "priceProduct", nameProduct: "nameProduct", imgPath: "imgPath" }, decls: 10, vars: 4, consts: [[1, "w-full", "max-w-sm", "mx-auto", "rounded-md", "shadow-md", "overflow-hidden"], [1, "flex", "items-end", "justify-end", "h-56", "w-full", "bg-cover"], [1, "p-2", "rounded-full", "text-white", "mx-5", "-mb-4", "hover:", "focus:outline-none", "cursor-pointer", 2, "background-color", "#F47C7C"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", "fill", "white", 1, "h-5", "w-5"], ["d", "M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"], [1, "px-5", "py-3"], [1, "uppercase", 2, "color", "#F47C7C"], [1, "mt-2", 2, "color", "#F47C7C"]], template: function CardProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/img/ropa/" + ctx.imgPath + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nameProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S/.", ctx.priceProduct, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLXByb2R1Y3QuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 7693:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _card_product_card_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-product/card-product.component */ 9776);
/* harmony import */ var _banner_page_banner_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-page/banner-page.component */ 6466);
/* harmony import */ var _shopping_carts_shopping_carts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-carts/shopping-carts.component */ 5301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form/contact-form.component */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);






class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_0__.CardProductComponent,
        _banner_page_banner_page_component__WEBPACK_IMPORTED_MODULE_1__.BannerPageComponent,
        _shopping_carts_shopping_carts_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartsComponent,
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__.ContactFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], exports: [_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_0__.CardProductComponent,
        _banner_page_banner_page_component__WEBPACK_IMPORTED_MODULE_1__.BannerPageComponent,
        _shopping_carts_shopping_carts_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartsComponent,
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__.ContactFormComponent] }); })();


/***/ }),

/***/ 29:
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormComponent": () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ContactFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 28, vars: 0, consts: [["id", "contactModal", "tabindex", "-1", "aria-labelledby", "contactModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "form-group"], ["for", "nameInput", 1, "form-label"], ["type", "text", "id", "nameInput", 1, "form-control"], ["for", "emailInput", 1, "form-label"], ["type", "email", "id", "emailInput", 1, "form-control"], ["for", "phoneInput", 1, "form-label"], ["type", "text", "id", "phoneInput", 1, "form-control"], ["for", "messageInput", 1, "form-label"], ["id", "phoneInput", "rows", "3", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Formulario de contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombres y Apellidos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Telefono:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mensaje:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWZvcm0uY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 5301:
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-carts/shopping-carts.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingCartsComponent": () => (/* binding */ ShoppingCartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);



function ShoppingCartsComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Salmon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Qty 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quitar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/img/ropa/" + product_r1.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S/. ", product_r1.price, "");
} }
class ShoppingCartsComponent {
    constructor() {
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.products = [];
    }
    ngOnInit() {
    }
    closeCart() {
        this.closeModal.emit();
    }
}
ShoppingCartsComponent.ɵfac = function ShoppingCartsComponent_Factory(t) { return new (t || ShoppingCartsComponent)(); };
ShoppingCartsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartsComponent, selectors: [["app-shopping-carts"]], inputs: { products: "products", totalPrice: "totalPrice", tituloCart: "tituloCart", precioCart: "precioCart", cuentaDirectaCart: "cuentaDirectaCart", pagarCart: "pagarCart", continuarPagandoCart: "continuarPagandoCart" }, outputs: { closeModal: "closeModal" }, decls: 39, vars: 7, consts: [["aria-labelledby", "slide-over-title", "role", "dialog", "aria-modal", "true", 1, "relative", "z-10"], [1, "fixed", "inset-0", "bg-gray-500", "bg-opacity-75", "transition-opacity"], [1, "fixed", "inset-0", "overflow-hidden"], [1, "absolute", "inset-0", "overflow-hidden"], [1, "pointer-events-none", "fixed", "inset-y-0", "right-0", "flex", "max-w-full", "pl-10"], [1, "pointer-events-auto", "w-screen", "max-w-md"], [1, "flex", "h-full", "flex-col", "overflow-y-scroll", "bg-white", "shadow-xl"], [1, "flex-1", "overflow-y-auto", "py-6", "px-4", "sm:px-6"], [1, "flex", "items-start", "justify-between"], ["id", "slide-over-title", 1, "text-lg", "font-medium", "text-gray-900"], [1, "ml-3", "flex", "h-7", "items-center"], ["type", "button", 1, "-m-2", "p-2", "text-gray-400", "hover:text-gray-500", 3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", "aria-hidden", "true", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "mt-8"], [1, "flow-root"], ["role", "list", 1, "-my-6", "divide-y", "divide-gray-200"], ["class", "flex py-6", 4, "ngFor", "ngForOf"], [1, "border-t", "border-gray-200", "py-6", "px-4", "sm:px-6"], [1, "flex", "justify-between", "text-base", "font-medium", "text-gray-900"], [1, "mt-0.5", "text-sm", "text-gray-500"], [1, "mt-6"], ["href", "#", 1, "flex", "items-center", "justify-center", "rounded-md", "border", "border-transparent", "px-6", "py-3", "text-base", "font-medium", "text-white", "shadow-sm", 2, "background-color", "#F47C7C"], [1, "mt-6", "flex", "justify-center", "text-center", "text-sm", "text-gray-500"], ["type", "button", 1, "font-medium", 2, "color", "#F47C7C", 3, "click"], ["aria-hidden", "true"], [1, "flex", "py-6"], [1, "h-24", "w-24", "flex-shrink-0", "overflow-hidden", "rounded-md", "border", "border-gray-200"], ["alt", "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.", 1, "h-full", "w-full", "object-cover", "object-center", 3, "src"], [1, "ml-4", "flex", "flex-1", "flex-col"], ["href", "#"], [1, "ml-4"], [1, "mt-1", "text-sm", "text-gray-500"], [1, "flex", "flex-1", "items-end", "justify-between", "text-sm"], [1, "text-gray-500"], [1, "flex"], ["type", "button", 1, "font-medium", "text-indigo-600", "hover:text-indigo-500"]], template: function ShoppingCartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartsComponent_Template_button_click_12_listener() { return ctx.closeCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ShoppingCartsComponent_li_20_Template, 19, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartsComponent_Template_button_click_35_listener() { return ctx.closeCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tituloCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.precioCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S/.", ctx.totalPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cuentaDirectaCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pagarCart, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.continuarPagandoCart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1jYXJ0cy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 5129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8774);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ 7693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 8774:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/constants/contenido.constants */ 3297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _components_banner_page_banner_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/banner-page/banner-page.component */ 6466);
/* harmony import */ var _components_shopping_carts_shopping_carts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shopping-carts/shopping-carts.component */ 5301);
/* harmony import */ var _components_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/card-product/card-product.component */ 9776);







function HomePage_app_shopping_carts_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-shopping-carts", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeModal", function HomePage_app_shopping_carts_2_Template_app_shopping_carts_closeModal_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.showCartModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("products", ctx_r0.productsSelected)("totalPrice", ctx_r0.price)("continuarPagandoCart", ctx_r0.continuarPagandoCart)("pagarCart", ctx_r0.pagarCart)("precioCart", ctx_r0.precioCart)("tituloCart", ctx_r0.tituloCart);
} }
function HomePage_app_card_product_80_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-card-product", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_app_card_product_80_Template_app_card_product_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const product_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.addProductCart(product_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nameProduct", product_r4.name)("priceProduct", product_r4.price)("imgPath", product_r4.imgPath);
} }
class HomePage {
    constructor() {
        this.language = false;
        this.price = 0;
        this.products = [
            {
                id: 1,
                code: '001',
                name: 'Abrigo Siale',
                imgPath: 'AbrigoSiale.png',
                price: 120.00,
                offer: false
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
        ];
        this.showCart = false;
        this.productsSelected = [];
        this.conteidoBanner = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBANNER.contenidoEsp;
        this.btnBanner = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBANNERBTN.contenidoEsp;
        this.btnHome = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNHOME.contenidoEsp;
        this.btnTienda = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNTIENDA.contenidoEsp;
        this.btnContacto = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNCONTACTO.contenidoEsp;
        this.labelProducts = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOPRODUCTO.contenidoEsp;
        this.tituloCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTTITULO.contenidoEsp;
        this.precioCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTSTOTAL.contenidoEsp;
        this.pagarCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTPAGARCUENTA.contenidoEsp;
        this.continuarPagandoCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTCONTINUARPAGANDO.contenidoEsp;
        this.misionTitulo = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOMISIONTITULO.contenidoEsp;
        this.visionTitulo = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOVISIONTITULO.contenidoEsp;
        this.vision = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOVISION.contenidoEsp;
        this.mision = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOMISION.contenidoEsp;
        this.acerca = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOACERCA.contenidoEsp;
    }
    ngOnInit() {
    }
    showCartModal() {
        this.showCart = !this.showCart;
    }
    changeLanguage() {
        if (this.language) {
            this.conteidoBanner = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBANNER.contenidoEsp;
            this.btnBanner = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBANNERBTN.contenidoEsp;
            this.btnHome = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNHOME.contenidoEsp;
            this.btnTienda = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNTIENDA.contenidoEsp;
            this.btnContacto = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNCONTACTO.contenidoEsp;
            this.labelProducts = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOPRODUCTO.contenidoEsp;
            this.tituloCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTTITULO.contenidoEsp;
            this.precioCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTSTOTAL.contenidoEsp;
            this.pagarCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTPAGARCUENTA.contenidoEsp;
            this.continuarPagandoCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTCONTINUARPAGANDO.contenidoEsp;
            this.misionTitulo = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOMISIONTITULO.contenidoEsp;
            this.visionTitulo = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOVISIONTITULO.contenidoEsp;
            this.vision = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOVISION.contenidoEsp;
            this.mision = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOMISION.contenidoEsp;
            this.acerca = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOACERCA.contenidoEsp;
        }
        else {
            this.conteidoBanner = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBANNER.contenidoQuechua;
            this.btnBanner = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBANNERBTN.contenidoQuechua;
            this.btnHome = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNHOME.contenidoQuechua;
            this.btnTienda = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNTIENDA.contenidoQuechua;
            this.btnContacto = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOBTNCONTACTO.contenidoQuechua;
            this.labelProducts = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOPRODUCTO.contenidoQuechua;
            this.tituloCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTTITULO.contenidoQuechua;
            this.precioCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTSTOTAL.contenidoQuechua;
            this.pagarCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTPAGARCUENTA.contenidoQuechua;
            this.continuarPagandoCart = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOCARTCONTINUARPAGANDO.contenidoQuechua;
            this.misionTitulo = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOMISIONTITULO.contenidoQuechua;
            this.visionTitulo = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOVISIONTITULO.contenidoQuechua;
            this.vision = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOVISION.contenidoQuechua;
            this.mision = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOMISION.contenidoQuechua;
            this.acerca = _common_constants_contenido_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENIDOACERCA.contenidoQuechua;
        }
    }
    showCarModal(products) {
        this.products = products;
        this.showCart = !this.showCart;
    }
    addProductCart(product) {
        this.price = 0;
        this.productsSelected.push(product);
        this.productsSelected.forEach(product => {
            this.price = this.price + product.price;
        });
    }
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(); };
HomePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], decls: 87, vars: 14, consts: [["x-data", "{ cartOpen: false , isOpen: false }", 2, "background-color", "#FFF2F2"], [3, "products", "totalPrice", "continuarPagandoCart", "pagarCart", "precioCart", "tituloCart", "closeModal", 4, "ngIf"], [1, "container", "mx-auto", "px-6", "py-3"], [1, "flex", "items-center", "justify-between"], [1, "hidden", "w-full", "text-white", "md:flex", "md:items-center"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z", "fill", "currentColor", 2, "color", "#F47C7C"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z", "fill", "currentColor", 2, "color", "#F47C7C"], [1, "mx-1", "text-sm", 2, "color", "#F47C7C"], [1, "w-full", "flex", "flex-row", "justify-center", 2, "color", "#F47C7C"], ["src", "assets/img/WARMIPACHA.png", "alt", "Logo", 1, "object-contain", "w-32", "h-32"], [1, "flex", "items-center", "justify-end", "w-full"], [1, "flex", "items-center", "justify-center", "w-full", "mb-12"], ["for", "toogleA", 1, "flex", "items-center", "cursor-pointer"], [1, "mr-3", "text-gray-700", "font-medium"], [1, "relative", 3, "click"], ["id", "toogleA", "type", "checkbox", 1, "sr-only", 3, "ngModel", "ngModelChange"], [1, "w-10", "h-4", "bg-gray-400", "rounded-full", "shadow-inner"], [1, "dot", "absolute", "w-6", "h-6", "bg-white", "rounded-full", "shadow", "-left-1", "-top-1", "transition"], [1, "ml-3", "text-gray-700", "font-medium"], [1, "text-white", "focus:outline-none", "mx-4", "sm:mx-0", 2, "color", "#F47C7C", 3, "click"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["d", "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"], [1, "flex", "sm:hidden"], ["type", "button", "aria-label", "toggle menu", 1, "hover:text-gray-500", "focus:outline-none", "focus:text-gray-500", 2, "color", "#F47C7C"], ["viewBox", "0 0 24 24", 1, "h-6", "w-6", "fill-current"], ["fill-rule", "evenodd", "d", "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"], [1, "sm:flex", "sm:justify-center", "sm:items-center", "mt-4"], [1, "flex", "flex-col", "sm:flex-row", 2, "color", "#F47C7C"], [1, "mt-3", "hover:underline", "sm:mx-3", "sm:mt-0"], [1, "relative", "mt-6", "max-w-lg", "mx-auto"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center"], ["viewBox", "0 0 24 24", "fill", "none", 1, "h-5", "w-5", "text-gray-500", 2, "color", "#F47C7C"], ["d", "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", "placeholder", "Buscar Producto", 1, "w-full", "border", "rounded-md", "pl-10", "pr-4", "py-2", "focus:border-blue-500", "focus:outline-none", "focus:shadow-outline"], [1, "my-8"], [1, "pb-16", 2, "font-family", "'Lato', sans-serif"], [1, "max-w-8xl", "mx-auto", "container", "pt-5"], ["role", "contentinfo", 1, "flex", "items-center", "flex-col", "px-4"], ["tabindex", "0", 1, "focus:outline-none", "uppercase", "text-sm", "text-center", "leading-4", 2, "color", "#F47C7C"], ["tabindex", "0", 1, "focus:outline-none", "text-4xl", "lg:text-4xl", "font-extrabold", "text-center", "leading-10", "text-gray-800", "lg:w-5/12", "md:w-9/12", "pt-4", 2, "color", "#F47C7C", "font-family", "'Lobster', cursive"], ["tabindex", "0", "aria-label", "group of cards", 1, "focus:outline-none", "mt-20", "flex", "flex-wrap", "justify-center", "gap-10", "px-4"], ["tabindex", "0", "aria-label", "card 1", 1, "focus:outline-none", "flex", "sm:w-full", "md:w-5/12", "pb-20"], [1, "w-20", "h-20", "relative", "mr-5"], [1, "absolute", "top-0", "right-0", "rounded", "w-16", "h-16", "mt-2", "mr-1", 2, "background-color", "#f1d6d6"], [1, "absolute", "text-white", "bottom-0", "left-0", "bg-indigo-700", "rounded", "w-16", "h-16", "flex", "items-center", "justify-center", "mt-2", "mr-3", 2, "background-color", "#F47C7C"], ["src", "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg", "alt", "drawer"], [1, "w-10/12"], ["tabindex", "0", 1, "focus:outline-none", "text-lg", "font-bold", "leading-tight", "text-gray-800"], ["tabindex", "0", 1, "focus:outline-none", "text-base", "text-gray-600", "leading-normal", "pt-2"], ["tabindex", "0", "aria-label", "card 2", 1, "focus:outline-none", "flex", "sm:w-full", "md:w-5/12", "pb-20"], [1, "absolute", "top-0", "right-0", "bg-indigo-100", "rounded", "w-16", "h-16", "mt-2", "mr-1", 2, "background-color", "#f1d6d6"], [1, "absolute", "text-white", "bottom-0", "left-0", "rounded", "w-16", "h-16", "flex", "items-center", "justify-center", "mt-2", "mr-3", 2, "background-color", "#F47C7C"], ["src", "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg", "alt", "check"], ["tabindex", "0", 1, "focus:outline-none", "text-lg", "font-semibold", "leading-tight", "text-gray-800"], [1, "container", "mx-auto", "px-6"], [3, "contenido", "btnComprar"], [1, "mt-16"], [1, "text-2xl", "font-medium", 2, "color", "#F47C7C"], [1, "grid", "gap-6", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "mt-6"], [3, "nameProduct", "priceProduct", "imgPath", "click", 4, "ngFor", "ngForOf"], [1, "bg-gray-200"], [1, "container", "mx-auto", "px-6", "py-3", "flex", "justify-between", "items-center"], ["href", "#", 1, "text-xl", "font-bold", "text-gray-500", "hover:text-gray-400"], [1, "py-2", "text-gray-500", "sm:py-0"], [3, "products", "totalPrice", "continuarPagandoCart", "pagarCart", "precioCart", "tituloCart", "closeModal"], [3, "nameProduct", "priceProduct", "imgPath", "click"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomePage_app_shopping_carts_2_Template, 1, 6, "app-shopping-carts", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "PE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Espa\u00F1ol ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_Template_div_click_18_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HomePage_Template_input_ngModelChange_19_listener($event) { return ctx.language = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Quechua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomePage_Template_button_click_24_listener() { return ctx.showCartModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "nav", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "main", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "h1", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Warmi Pacha");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "h2", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "h2", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "app-banner-page", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, HomePage_app_card_product_80_Template, 1, 3, "app-card-product", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "footer", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "WarmiPacha Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Todo los derechos reservados");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.btnHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.btnTienda);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.btnContacto);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.acerca);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.misionTitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.mision, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.visionTitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.vision, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("contenido", ctx.conteidoBanner)("btnComprar", ctx.btnBanner);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.labelProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _components_banner_page_banner_page_component__WEBPACK_IMPORTED_MODULE_1__.BannerPageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_shopping_carts_shopping_carts_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartsComponent, _components_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_3__.CardProductComponent], styles: ["input[_ngcontent-%COMP%]:checked    ~ .dot[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background-color: #48bb78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQUE7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb2dnbGUgQSAqL1xyXG5pbnB1dDpjaGVja2VkIH4gLmRvdFxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKVxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGJiNzhcclxuIl19 */"] });


/***/ }),

/***/ 6524:
/*!*******************************************************!*\
  !*** ./src/app/pages/productora/productora.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoraModule": () => (/* binding */ ProductoraModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _productora_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productora.page */ 3570);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ 7693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);






const routes = [
    {
        path: '',
        component: _productora_page__WEBPACK_IMPORTED_MODULE_0__.ProductoraPage
    }
];
class ProductoraModule {
}
ProductoraModule.ɵfac = function ProductoraModule_Factory(t) { return new (t || ProductoraModule)(); };
ProductoraModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductoraModule });
ProductoraModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductoraModule, { declarations: [_productora_page__WEBPACK_IMPORTED_MODULE_0__.ProductoraPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 3570:
/*!*****************************************************!*\
  !*** ./src/app/pages/productora/productora.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoraPage": () => (/* binding */ ProductoraPage)
/* harmony export */ });
/* harmony import */ var _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/constants/routes.constants */ 3754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/contact-form/contact-form.component */ 29);





function ProductoraPage_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Informacion de contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductoraPage_ng_template_18_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nombres y Apellidos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Correo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Telefono:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Mensaje:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "textarea", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductoraPage_ng_template_18_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return modal_r2.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProductoraPage {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.title = '';
        this.title = _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__.HOME_NAME;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'contact-modal' });
    }
    goToEcommerce() {
        this.router.navigate(['home-store']);
    }
    ngOnInit() {
    }
}
ProductoraPage.ɵfac = function ProductoraPage_Factory(t) { return new (t || ProductoraPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
ProductoraPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductoraPage, selectors: [["app-productora"]], decls: 221, vars: 1, consts: [["x-data", "{ isOpen: false }", 1, "bg-black"], [1, "container", "px-6", "py-4", "mx-auto", "md:flex", "md:justify-between", "md:items-center"], [1, "flex", "items-center", "justify-between"], ["href", "#", 1, "text-xl", "font-bold", "text-white", "transition-colors", "duration-300", "transform", "md:text-2xl", "hover:text-indigo-400"], ["src", "assets/img/LOGO_UYARI.png", "alt", "logo", 1, "object-contain", "w-32", "h-32", "rounded-full"], [1, "flex", "md:hidden"], ["type", "button", "aria-label", "toggle menu", 1, "text-gray-200", "hover:text-gray-400", "focus:outline-none", "focus:text-gray-400"], ["viewBox", "0 0 24 24", 1, "w-6", "h-6", "fill-current"], ["fill-rule", "evenodd", "d", "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"], [1, "flex-col", "mt-2", "space-y-4", "md:flex", "md:space-y-0", "md:flex-row", "md:items-center", "md:space-x-10", "md:mt-0"], ["href", "#", 1, "text-sm", "font-medium", "text-gray-200", "transition-colors", "duration-300", "transform", "hover:text-indigo-400"], [1, "px-4", "py-1", "text-sm", "font-medium", "text-center", "text-gray-200", "transition-colors", "duration-300", "transform", "border", "rounded", "hover:bg-indigo-400", 3, "click"], ["content", ""], [1, "relative", "bg-blueGray-50"], [1, "relative", "pt-16", "pb-32", "px-8", "flex", "content-center", "items-center", "justify-center", "min-h-screen-100"], [1, "container", "relative", "mx-auto"], [1, "items-center", "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4", "ml-auto", "mr-auto", "text-center"], [1, "pr-12"], [1, "text-white", "font-semibold", "text-5xl"], [1, "mt-6", "text-2xl", "font-bold", "text-white", "md:text-1xl"], ["autoplay", "", "loop", "", 1, "w-full", 3, "muted"], ["src", "assets/video/uyari3.mp4", "type", "video/mp4"], [1, "top-auto", "bottom-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", "h-70-px", 2, "transform", "translateZ(0px)"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], ["points", "2560 0 2560 100 0 100", 1, "text-blueGray-200", "fill-current"], [1, "pb-10", "bg-blueGray-200", "-mt-24"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap"], [1, "lg:pt-12", "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-8", "shadow-lg", "rounded-lg"], [1, "px-4", "py-5", "flex-auto"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-red-400"], [1, "fa-solid", "fa-video"], [1, "text-xl", "font-semibold"], [1, "mt-2", "mb-4", "text-blueGray-500"], [1, "w-full", "md:w-4/12", "px-4", "text-center"], [1, "fa-solid", "fa-people-group"], [1, "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "fa-solid", "fa-lightbulb"], [1, "relative", "pt-8", "pb-6", "mt-1"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-6/12", "px-4", "mx-auto", "text-center"], [1, "text-sm", "text-white", "font-semibold", "py-1"], [1, "text-3xl", "font-semibold", 2, "color", "#FEC703"], [1, "text-xl"], [1, "bg-white", "dark:bg-gray-900"], [1, "max-w-5xl", "px-6", "py-16", "mx-auto"], [1, "text-3xl", "font-semibold", "text-center", "text-gray-800", "capitalize", "lg:text-4xl", "dark:text-white"], [1, "max-w-2xl", "mx-auto", "my-6", "text-center", "text-gray-500", "dark:text-gray-300"], [1, "grid", "grid-cols-1", "gap-8", "mt-8", "xl:mt-16", "md:grid-cols-2", "xl:grid-cols-4"], [1, "flex", "flex-col", "items-center", "p-8", "transition-colors", "duration-200", "transform", "cursor-pointer", "group", "hover:bg-yellow-400", "rounded-xl"], [1, "mt-4", "text-2xl", "font-semibold", "text-gray-700", "capitalize", "dark:text-white", "group-hover:text-white"], [1, "bg-black"], [1, "max-w-lg", "mt-4", "text-white"], [1, "grid", "gap-8", "mt-10", "md:mt-20", "md:grid-cols-2"], [1, "flex", "space-x-4"], [1, "text-xl", "font-semibold", 2, "color", "#FEC703"], [1, "bg-white"], [1, "md:flex", "md:justify-between"], [1, "text-3xl", "font-semibold", "text-gray-800"], [1, "grid", "gap-8", "mt-10", "md:grid-cols-2", "lg:grid-cols-2"], ["src", "assets/img/coca-cola-logo.png", "alt", "logo", 1, "object-contain", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], [1, "mt-2", "text-gray-500", "capitalize", "dark:text-gray-300", "group-hover:text-gray-300"], [1, "flex", "flex-col", "items-center", "p-8", "transition-colors", "duration-200", "transform", "cursor-pointer", "group", "hover:bg-yellow-400", "rounded-xl", 3, "click"], ["src", "assets/img/WARMIPACHA.png", "alt", "logo", 1, "object-contain", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], [1, "max-w-5xl", "px-6", "py-16", "mx-auto", "space-y-8", "md:flex", "md:items-center", "md:space-y-0"], [1, "md:w-2/3"], [1, "hidden", "md:flex", "md:items-center", "md:space-x-10"], ["src", "assets/img/coca-cola-logo.png", 1, "object-contain", "object-center", "rounded-md", "w-72", "h-72"], ["src", "assets/img/fundas.png", 1, "object-cover", "object-center", "w-64", "rounded-md", "h-96"], [1, "text-3xl", "font-semibold", "text-white", "md:mt-6"], [1, "md:w-1/3"], ["src", "assets/img/producto.jpeg", 1, "object-cover", "object-center", "w-full", "rounded-md", "shadow", 2, "height", "700px"], ["src", "assets/img/XimenaAranda.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], [1, "flex", "mt-3", "-mx-2"], ["href", "https://www.instagram.com/ximenaalessarl/", "target", "_blank", "aria-label", "Instagram", 1, "mx-2", "text-gray-600", "dark:text-gray-300", "hover:text-gray-500", "dark:hover:text-gray-300", "group-hover:text-white"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "24", "height", "24", "viewBox", "0 0 24 24", 2, "fill", "#000000"], ["d", "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"], ["src", "assets/img/FabricioRojas.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], ["href", "https://www.instagram.com/fabriziorjs/", "target", "_blank", "aria-label", "Instagram", 1, "mx-2", "text-gray-600", "dark:text-gray-300", "hover:text-gray-500", "dark:hover:text-gray-300", "group-hover:text-white"], ["src", "assets/img/MarianneBlas.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], ["href", "https://www.instagram.com/marianneblaspj/", "target", "_blank", "aria-label", "Instagram", 1, "mx-2", "text-gray-600", "dark:text-gray-300", "hover:text-gray-500", "dark:hover:text-gray-300", "group-hover:text-white"], ["src", "assets/img/LindaSotacuro2.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], ["href", "https://www.instagram.com/lindaflor_sb/", "target", "_blank", "aria-label", "Instagram", 1, "mx-2", "text-gray-600", "dark:text-gray-300", "hover:text-gray-500", "dark:hover:text-gray-300", "group-hover:text-white"], ["src", "assets/img/HectorSanchez.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], ["href", "#", "aria-label", "Instagram", 1, "mx-2", "text-gray-600", "dark:text-gray-300", "hover:text-gray-500", "dark:hover:text-gray-300", "group-hover:text-white"], [1, "border-t", "bg-black"], [1, "container", "flex", "items-center", "justify-between", "px-6", "py-8", "mx-auto"], [1, "text-white"], [1, "font-medium", "text-white"], [1, "modal-header"], ["id", "contact-modal", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "nameInput", 1, "form-label"], ["type", "text", "id", "nameInput", 1, "form-control"], ["for", "emailInput", 1, "form-label"], ["type", "email", "id", "emailInput", 1, "form-control"], ["for", "phoneInput", 1, "form-label"], ["type", "text", "id", "phoneInput", 1, "form-control"], ["for", "messageInput", 1, "form-label"], ["id", "phoneInput", "rows", "3", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function ProductoraPage_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Qui\u00E9nes Somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Noticias");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductoraPage_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Cont\u00E1ctanos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductoraPage_ng_template_18_Template, 25, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Productora audiovisual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Resalta la belleza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " aut\u00F3ctona de nuestro Per\u00FA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "polygon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Productora audiovisual");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Creaci\u00F3n de productos audiovisuales de manera personalizada segun el tipo de negocio de nuestros partners. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Identidad Cultural");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Nuestro equipo tiene como prioridad mantener toda la identidad cultural en cada proyecto entregado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Expresa tus ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Tenemos como cultura de trabajo estar codo a codo con nuestros partners para tener un panorama completo de su visi\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "h6", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "NOSOTROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Somos la primera agencia en llevar valor compartido a la sociedad a trav\u00E9s de nuestro contenido digital. Generando bienestar, cuidando la salud, el medio ambiente y los animales a trav\u00E9s de estrategias creativas. Trabajamos con creatividad, empat\u00EDa y sostenibilidad para brindarles a nuestros clientes confianza y bienestar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "NUESTROS VALORES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " UYARI es guiada por nuestros valores bien definidos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Creatividad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " Compromiso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Respeto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " Responsabilidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " Empat\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Compa\u00F1erismo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " Reconocimiento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "section", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Sobre UYARI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Productora audiovisual \"UYARI\", el nombre de la productora tiene su origen en el quechua cuya traducci\u00F3n al espa\u00F1ol es: o\u00EDr , escuchar y percibir llamados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "h4", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Misi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "\u201CNuestro prop\u00F3sito es rescatar y difundir el Patrimonio Cultural del Per\u00FA.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "h4", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Visi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Nuestra visi\u00F3n es que la Productora UYARI sea reconocida internacionalmente por haber contribuido al enriquecimiento hacia el Patrimonio Cultural del Per\u00FA. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "section", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Colaboraciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " Coca Cola");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " Distribuidora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductoraPage_Template_div_click_136_listener() { return ctx.goToEcommerce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, " WarmiPacha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, " E-commerce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "section", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "h2", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Campa\u00F1a COCA COLA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, " La campa\u00F1a \"RESGRESCA LA RUTINA\" consisti\u00F3 en que los usuarios pod\u00EDan escanear los c\u00F3digo QR que estaban en la etiqueta de cada botella de la nueva colecci\u00F3n de Coca Cola en colaboraci\u00F3n con la productora Uyari donde los redirigia a la p\u00E1gina de Coca Cola donde vieron que letra conseguieron. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, " Una vez conseguido todas y formado la frase \u201CCOCA COLA PER\u00DA\u201D, El cliente se ganaba pasaje doble con todo pagado hacia lugares tur\u00EDsticos del Per\u00FA como: Machu Picchu, R\u00EDo Amazonas, Nazca, La monta\u00F1a de los 7 colores y el Valle del Colca. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Nuestro equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " Contamos con un gran staff de profesionales capacitados para el desarrollo y seguimiento de los proyectos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, " Ximena Aranda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Administradora");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "svg", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, " Fabricio Rojas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Dise\u00F1ador");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "svg", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, " Marianne Blas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Gerente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "svg", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Linda Sotacuro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Jefe de Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "svg", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](203, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "h1", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "Hector Sanchez");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Productor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "svg", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "footer", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "\u00A92022 All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](220, "app-contact-form");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("muted", true);
    } }, directives: [_components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__.ContactFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0b3JhLnBhZ2Uuc2FzcyJ9 */"] });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map