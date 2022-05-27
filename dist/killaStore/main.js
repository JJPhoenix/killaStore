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
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _pages_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _pages_productora_productora_module__WEBPACK_IMPORTED_MODULE_4__.ProductoraModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule] }); })();


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
BannerPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerPageComponent, selectors: [["app-banner-page"]], inputs: { contenido: "contenido", btnComprar: "btnComprar" }, decls: 12, vars: 2, consts: [[1, "h-64", "rounded-md", "overflow-hidden", "bg-cover", "bg-center", 2, "background-image", "url('assets/img/telar_andino.jpeg')"], [1, "bg-gray-900", "bg-opacity-50", "flex", "items-center", "h-full"], [1, "px-10", "max-w-xl"], [1, "text-2xl", "text-white", "font-semibold"], [1, "mt-2", "text-white"], [1, "flex", "items-center", "mt-4", "px-3", "py-2", "text-white", "text-sm", "uppercase", "font-medium", "rounded", "hover:", "focus:outline-none", "focus:", 2, "background-color", "#F47C7C"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "mx-2"], ["d", "M17 8l4 4m0 0l-4 4m4-4H3"]], template: function BannerPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ropa a tu medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
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
CardProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardProductComponent, selectors: [["app-card-product"]], inputs: { priceProduct: "priceProduct", nameProduct: "nameProduct", imgPath: "imgPath" }, decls: 10, vars: 4, consts: [[1, "w-full", "max-w-sm", "mx-auto", "rounded-md", "shadow-md", "overflow-hidden"], [1, "flex", "items-end", "justify-end", "h-56", "w-full", "bg-cover"], [1, "p-2", "rounded-full", "text-white", "mx-5", "-mb-4", "hover:", "focus:outline-none", "cursor-pointer", 2, "background-color", "#F47C7C"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["d", "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"], [1, "px-5", "py-3"], [1, "uppercase", 2, "color", "#F47C7C"], [1, "mt-2", 2, "color", "#F47C7C"]], template: function CardProductComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);





class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_0__.CardProductComponent,
        _banner_page_banner_page_component__WEBPACK_IMPORTED_MODULE_1__.BannerPageComponent,
        _shopping_carts_shopping_carts_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_0__.CardProductComponent,
        _banner_page_banner_page_component__WEBPACK_IMPORTED_MODULE_1__.BannerPageComponent,
        _shopping_carts_shopping_carts_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartsComponent] }); })();


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
HomePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], decls: 87, vars: 14, consts: [["x-data", "{ cartOpen: false , isOpen: false }", 2, "background-color", "#FFF2F2"], [3, "products", "totalPrice", "continuarPagandoCart", "pagarCart", "precioCart", "tituloCart", "closeModal", 4, "ngIf"], [1, "container", "mx-auto", "px-6", "py-3"], [1, "flex", "items-center", "justify-between"], [1, "hidden", "w-full", "text-white", "md:flex", "md:items-center"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z", "fill", "currentColor", 2, "color", "#F47C7C"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z", "fill", "currentColor", 2, "color", "#F47C7C"], [1, "mx-1", "text-sm", 2, "color", "#F47C7C"], [1, "w-full", "flex", "flex-row", "justify-center", 2, "color", "#F47C7C"], ["src", "assets/img/WARMIPACHA.png", "alt", "Logo", 1, "object-contain", "w-32", "h-32"], [1, "flex", "items-center", "justify-end", "w-full"], [1, "flex", "items-center", "justify-center", "w-full", "mb-12"], ["for", "toogleA", 1, "flex", "items-center", "cursor-pointer"], [1, "mr-3", "text-gray-700", "font-medium"], [1, "relative", 3, "click"], ["id", "toogleA", "type", "checkbox", 1, "sr-only", 3, "ngModel", "ngModelChange"], [1, "w-10", "h-4", "bg-gray-400", "rounded-full", "shadow-inner"], [1, "dot", "absolute", "w-6", "h-6", "bg-white", "rounded-full", "shadow", "-left-1", "-top-1", "transition"], [1, "ml-3", "text-gray-700", "font-medium"], [1, "text-white", "focus:outline-none", "mx-4", "sm:mx-0", 2, "color", "#F47C7C", 3, "click"], ["fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["d", "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"], [1, "flex", "sm:hidden"], ["type", "button", "aria-label", "toggle menu", 1, "hover:text-gray-500", "focus:outline-none", "focus:text-gray-500", 2, "color", "#F47C7C"], ["viewBox", "0 0 24 24", 1, "h-6", "w-6", "fill-current"], ["fill-rule", "evenodd", "d", "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"], [1, "sm:flex", "sm:justify-center", "sm:items-center", "mt-4"], [1, "flex", "flex-col", "sm:flex-row", 2, "color", "#F47C7C"], [1, "mt-3", "hover:underline", "sm:mx-3", "sm:mt-0"], [1, "relative", "mt-6", "max-w-lg", "mx-auto"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center"], ["viewBox", "0 0 24 24", "fill", "none", 1, "h-5", "w-5", "text-gray-500", 2, "color", "#F47C7C"], ["d", "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", "placeholder", "Buscar Producto", 1, "w-full", "border", "rounded-md", "pl-10", "pr-4", "py-2", "focus:border-blue-500", "focus:outline-none", "focus:shadow-outline"], [1, "my-8"], [1, "pb-16", 2, "font-family", "'Lato', sans-serif"], [1, "max-w-8xl", "mx-auto", "container", "pt-5"], ["role", "contentinfo", 1, "flex", "items-center", "flex-col", "px-4"], ["tabindex", "0", 1, "focus:outline-none", "uppercase", "text-sm", "text-center", "leading-4", 2, "color", "#F47C7C"], ["tabindex", "0", 1, "focus:outline-none", "text-4xl", "lg:text-4xl", "font-extrabold", "text-center", "leading-10", "text-gray-800", "lg:w-5/12", "md:w-9/12", "pt-4", 2, "color", "#F47C7C"], ["tabindex", "0", "aria-label", "group of cards", 1, "focus:outline-none", "mt-20", "flex", "flex-wrap", "justify-center", "gap-10", "px-4"], ["tabindex", "0", "aria-label", "card 1", 1, "focus:outline-none", "flex", "sm:w-full", "md:w-5/12", "pb-20"], [1, "w-20", "h-20", "relative", "mr-5"], [1, "absolute", "top-0", "right-0", "rounded", "w-16", "h-16", "mt-2", "mr-1", 2, "background-color", "#f1d6d6"], [1, "absolute", "text-white", "bottom-0", "left-0", "bg-indigo-700", "rounded", "w-16", "h-16", "flex", "items-center", "justify-center", "mt-2", "mr-3", 2, "background-color", "#F47C7C"], ["src", "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg", "alt", "drawer"], [1, "w-10/12"], ["tabindex", "0", 1, "focus:outline-none", "text-lg", "font-bold", "leading-tight", "text-gray-800"], ["tabindex", "0", 1, "focus:outline-none", "text-base", "text-gray-600", "leading-normal", "pt-2"], ["tabindex", "0", "aria-label", "card 2", 1, "focus:outline-none", "flex", "sm:w-full", "md:w-5/12", "pb-20"], [1, "absolute", "top-0", "right-0", "bg-indigo-100", "rounded", "w-16", "h-16", "mt-2", "mr-1", 2, "background-color", "#f1d6d6"], [1, "absolute", "text-white", "bottom-0", "left-0", "rounded", "w-16", "h-16", "flex", "items-center", "justify-center", "mt-2", "mr-3", 2, "background-color", "#F47C7C"], ["src", "https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg", "alt", "check"], ["tabindex", "0", 1, "focus:outline-none", "text-lg", "font-semibold", "leading-tight", "text-gray-800"], [1, "container", "mx-auto", "px-6"], [3, "contenido", "btnComprar"], [1, "mt-16"], [1, "text-2xl", "font-medium", 2, "color", "#F47C7C"], [1, "grid", "gap-6", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "mt-6"], [3, "nameProduct", "priceProduct", "imgPath", "click", 4, "ngFor", "ngForOf"], [1, "bg-gray-200"], [1, "container", "mx-auto", "px-6", "py-3", "flex", "justify-between", "items-center"], ["href", "#", 1, "text-xl", "font-bold", "text-gray-500", "hover:text-gray-400"], [1, "py-2", "text-gray-500", "sm:py-0"], [3, "products", "totalPrice", "continuarPagandoCart", "pagarCart", "precioCart", "tituloCart", "closeModal"], [3, "nameProduct", "priceProduct", "imgPath", "click"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _components_banner_page_banner_page_component__WEBPACK_IMPORTED_MODULE_1__.BannerPageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_shopping_carts_shopping_carts_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartsComponent, _components_card_product_card_product_component__WEBPACK_IMPORTED_MODULE_3__.CardProductComponent], styles: ["input[_ngcontent-%COMP%]:checked    ~ .dot[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background-color: #48bb78;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQUE7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb2dnbGUgQSAqL1xuaW5wdXQ6Y2hlY2tlZCB+IC5kb3RcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGJiNzhcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



class ProductoraPage {
    constructor(router) {
        this.router = router;
        this.title = '';
        this.title = _common_constants_routes_constants__WEBPACK_IMPORTED_MODULE_0__.HOME_NAME;
    }
    goToEcommerce() {
        this.router.navigate(['home-store']);
    }
    ngOnInit() {
    }
}
ProductoraPage.ɵfac = function ProductoraPage_Factory(t) { return new (t || ProductoraPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
ProductoraPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductoraPage, selectors: [["app-productora"]], decls: 250, vars: 0, consts: [["x-data", "{ isOpen: false }", 1, "bg-black"], [1, "container", "px-6", "py-4", "mx-auto", "md:flex", "md:justify-between", "md:items-center"], [1, "flex", "items-center", "justify-between"], ["href", "#", 1, "text-xl", "font-bold", "text-white", "transition-colors", "duration-300", "transform", "md:text-2xl", "hover:text-indigo-400"], ["src", "assets/img/LOGO_UYARI.png", "alt", "logo", 1, "object-contain", "w-32", "h-32", "rounded-full"], [1, "flex", "md:hidden"], ["type", "button", "aria-label", "toggle menu", 1, "text-gray-200", "hover:text-gray-400", "focus:outline-none", "focus:text-gray-400"], ["viewBox", "0 0 24 24", 1, "w-6", "h-6", "fill-current"], ["fill-rule", "evenodd", "d", "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"], [1, "flex-col", "mt-2", "space-y-4", "md:flex", "md:space-y-0", "md:flex-row", "md:items-center", "md:space-x-10", "md:mt-0"], ["href", "#", 1, "text-sm", "font-medium", "text-gray-200", "transition-colors", "duration-300", "transform", "hover:text-indigo-400"], ["href", "#", 1, "px-4", "py-1", "text-sm", "font-medium", "text-center", "text-gray-200", "transition-colors", "duration-300", "transform", "border", "rounded", "hover:bg-indigo-400"], [1, "relative", "bg-blueGray-50"], [1, "relative", "pt-16", "pb-32", "flex", "content-center", "items-center", "justify-center", "min-h-screen-100"], [1, "absolute", "top-0", "w-full", "h-full", "bg-center", "bg-cover", 2, "background-image", "url('assets/img/banner.png')"], ["id", "blackOverlay", 1, "w-full", "h-full", "absolute", "opacity-75", "bg-black"], [1, "container", "relative", "mx-auto"], [1, "items-center", "flex", "flex-wrap"], [1, "w-full", "lg:w-6/12", "px-4", "ml-auto", "mr-auto", "text-center"], [1, "pr-12"], [1, "text-white", "font-semibold", "text-5xl"], [1, "mt-6", "text-2xl", "font-bold", "text-white", "md:text-1xl"], [1, "top-auto", "bottom-0", "left-0", "right-0", "w-full", "absolute", "pointer-events-none", "overflow-hidden", "h-70-px", 2, "transform", "translateZ(0px)"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none", "version", "1.1", "viewBox", "0 0 2560 100", "x", "0", "y", "0", 1, "absolute", "bottom-0", "overflow-hidden"], ["points", "2560 0 2560 100 0 100", 1, "text-blueGray-200", "fill-current"], [1, "pb-10", "bg-blueGray-200", "-mt-24"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap"], [1, "lg:pt-12", "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-8", "shadow-lg", "rounded-lg"], [1, "px-4", "py-5", "flex-auto"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-red-400"], [1, "fas", "fa-award"], [1, "text-xl", "font-semibold"], [1, "mt-2", "mb-4", "text-blueGray-500"], [1, "w-full", "md:w-4/12", "px-4", "text-center"], [1, "pt-6", "w-full", "md:w-4/12", "px-4", "text-center"], [1, "relative", "pt-8", "pb-6", "mt-1"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-6/12", "px-4", "mx-auto", "text-center"], [1, "text-sm", "text-white", "font-semibold", "py-1"], [1, "bg-white", "dark:bg-gray-900"], [1, "max-w-5xl", "px-6", "py-16", "mx-auto"], [1, "text-3xl", "font-semibold", "text-center", "text-gray-800", "capitalize", "lg:text-4xl", "dark:text-white"], [1, "max-w-2xl", "mx-auto", "my-6", "text-center", "text-gray-500", "dark:text-gray-300"], [1, "grid", "grid-cols-1", "gap-8", "mt-8", "xl:mt-16", "md:grid-cols-2", "xl:grid-cols-4"], [1, "flex", "flex-col", "items-center", "p-8", "transition-colors", "duration-200", "transform", "cursor-pointer", "group", "hover:bg-yellow-400", "rounded-xl"], [1, "mt-4", "text-2xl", "font-semibold", "text-gray-700", "capitalize", "dark:text-white", "group-hover:text-white"], [1, "bg-black"], [1, "text-3xl", "font-semibold", "text-white"], [1, "max-w-lg", "mt-4", "text-white"], [1, "grid", "gap-8", "mt-10", "md:mt-20", "md:grid-cols-2"], [1, "flex", "space-x-4"], [1, "text-xl", "font-medium", "text-white"], [1, "bg-white"], [1, "md:flex", "md:justify-between"], [1, "text-3xl", "font-semibold", "text-gray-800"], [1, "grid", "gap-8", "mt-10", "md:grid-cols-2", "lg:grid-cols-2"], ["src", "assets/img/coca-cola-logo.png", "alt", "logo", 1, "object-contain", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], [1, "mt-2", "text-gray-500", "capitalize", "dark:text-gray-300", "group-hover:text-gray-300"], [1, "flex", "flex-col", "items-center", "p-8", "transition-colors", "duration-200", "transform", "cursor-pointer", "group", "hover:bg-yellow-400", "rounded-xl", 3, "click"], ["src", "assets/img/WARMIPACHA.png", "alt", "logo", 1, "object-contain", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], [1, "max-w-5xl", "px-6", "py-16", "mx-auto", "space-y-8", "md:flex", "md:items-center", "md:space-y-0"], [1, "md:w-2/3"], [1, "hidden", "md:flex", "md:items-center", "md:space-x-10"], ["src", "assets/img/coca-cola-logo.png", 1, "object-contain", "object-center", "rounded-md", "w-72", "h-72"], ["src", "assets/img/fundas.png", 1, "object-cover", "object-center", "w-64", "rounded-md", "h-96"], [1, "text-3xl", "font-semibold", "text-white", "md:mt-6"], [1, "md:w-1/3"], ["src", "assets/img/producto.jpeg", 1, "object-cover", "object-center", "w-full", "rounded-md", "shadow", 2, "height", "700px"], ["src", "assets/img/XimenaAranda.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], [1, "flex", "mt-3", "-mx-2"], ["href", "#", "aria-label", "Reddit", 1, "mx-2", "text-gray-600", "dark:text-gray-300", "hover:text-gray-500", "dark:hover:text-gray-300", "group-hover:text-white"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6", "fill-current"], ["d", "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"], ["href", "#", "aria-label", "Facebook", 1, "mx-2", "text-gray-600", "dark:text-gray-300", "hover:text-gray-500", "dark:hover:text-gray-300", "group-hover:text-white"], ["d", "M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"], ["href", "#", "aria-label", "Github", 1, "mx-2", "text-gray-600", "dark:text-gray-300", "hover:text-gray-500", "dark:hover:text-gray-300", "group-hover:text-white"], ["d", "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"], ["src", "assets/img/FabricioRojas.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], ["src", "assets/img/MarianneBlas.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], ["src", "assets/img/LindaSotacuro.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], ["src", "assets/img/HectorSanchez.jpeg", "alt", "", 1, "object-cover", "w-32", "h-32", "rounded-full", "ring-4", "ring-gray-300"], [1, "border-t", "bg-black"], [1, "container", "flex", "items-center", "justify-between", "px-6", "py-8", "mx-auto"], [1, "text-white"], [1, "font-medium", "text-white"]], template: function ProductoraPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Qui\u00E9nes Somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Noticias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cont\u00E1ctanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Productora audiovisual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Resalta la belleza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " aut\u00F3ctona de nuestro Per\u00FA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "polygon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Productora audiovisual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Creaci\u00F3n de productos audiovisuales de manera personalizada segun el tipo de negocio de nuestros partners. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Identidad Cultural");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Nuestro equipo tiene como prioridad mantener toda la identidad cultural en cada proyecto entregado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Expresa tus ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Tenemos como cultura de trabajo estar codo a codo con nuestros partners para tener un panorama completo de su visi\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Sobre nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Somos la primera agencia en llevar valor compartido a la sociedad a trav\u00E9s de nuestro contenido digital. Generando bienestar, cuidando la salud, el medio ambiente y los animales a trav\u00E9s de estrategias creativas. Trabajamos con creatividad, empat\u00EDa y sostenibilidad para brindarles a nuestros clientes confianza y bienestar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Nuestros Valores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " UYARI es guiada por nuestros valores bien definidos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Creatividad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Compromiso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " Respeto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " Responsabilidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " Empat\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " Compa\u00F1erismo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " Reconocimiento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h2", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "UYARI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Productora audiovisual \"UYARI\", el nombre de la productora tiene su origen en el quechua cuya traducci\u00F3n al espa\u00F1ol es: o\u00EDr , escuchar y percibir llamados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "h4", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Misi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "\u201CNuestro prop\u00F3sito es rescatar y difundir el Patrimonio Cultural del Per\u00FA.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h4", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Visi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Nuestra visi\u00F3n es que la Productora UYARI sea reconocida internacionalmente por haber contribuido al enriquecimiento hacia el Patrimonio Cultural del Per\u00FA. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h2", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Colaboraciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " Coca Cola");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " Distribuidora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductoraPage_Template_div_click_136_listener() { return ctx.goToEcommerce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " WarmiPacha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " E-commerce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h2", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Campa\u00F1a COCA COLA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " La campa\u00F1a \"RESGRESCA LA RUTINA\" consisti\u00F3 en que los usuarios pod\u00EDan escanear los c\u00F3digo QR que estaban en la etiqueta de cada botella de la nueva colecci\u00F3n de Coca Cola en colaboraci\u00F3n con la productora Uyari donde los redirigia a la p\u00E1gina de Coca Cola donde vieron que letra conseguieron. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " Una vez conseguido todas y formado la frase \u201CCOCA COLA PER\u00DA\u201D, El cliente se ganaba pasaje doble con todo pagado hacia lugares tur\u00EDsticos del Per\u00FA como: Machu Picchu, R\u00EDo Amazonas, Nazca, La monta\u00F1a de los 7 colores y el Valle del Colca. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Nuestro equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " Contamos con un gran staff de profesionales capacitados para el desarrollo y seguimiento de los proyectos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, " Ximena Aranda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Administradora");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Fabricio Rojas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Dise\u00F1ador");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Marianne Blas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Gerente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Linda Sotacuro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Jefe de Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "h1", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Hector Sanchez");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Productor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "svg", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "footer", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "\u00A92022 All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0b3JhLnBhZ2Uuc2FzcyJ9 */"] });


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