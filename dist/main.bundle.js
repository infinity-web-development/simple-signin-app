webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-product-container\">\n    <mat-card >\n      <mat-card-header>\n        <mat-card-title>Add Product</mat-card-title>\n      </mat-card-header>\n      <div class=\"add-img\">\n        <input type=\"file\" accept=\"image/*\" (change)=\"onFileSelected($event.target.files)\">\n        <img mat-card-image width=\"250px\" height=\"250px\"  *ngIf=\"imageUrl\" [src]=\"imageUrl\" alt=\"Pink hair\">\n        <div class=\"text-overlay\">\n          <p>Add Photo</p>\n        </div> \n      </div>\n\n      <mat-card-content class=\"input-form-container\">\n\n        <div class=\"form-field-container\">\n          <mat-label>Product Name</mat-label>\n          <input matInput placeholder=\"Voluminous Shampoo with Avocado\" type=\"text\" [(ngModel)]=\"newProduct.name\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>Choose Brand</mat-label>\n          <mat-select placeholder=\"--Select--\" [(ngModel)]=\"newProduct.brand\">\n            <mat-option *ngFor=\"let brand of brandList\" [value]=\"brand\" >\n              {{brand}}\n            </mat-option>\n          </mat-select>\n        </div>\n        <div class=\"keyword-container form-field-container\">\n          <div>\n            <mat-label>Tags</mat-label>\n            <input matInput [(ngModel)]=\"newProduct.keywords\" placeholder=\"Keywords(ie: 4c, lace, easy diy)\">  \n          </div>          \n          <div>\n              <mat-label>Price ($):</mat-label><input [(ngModel)]=\"newProduct.price\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-field-container details\">\n          <mat-label>Product Details</mat-label>\n          <textarea matInput type=\"text\" [(ngModel)]=\"newProduct.description\" placeholder=\"Tell us everything you know about the product\"></textarea>\n        </div>\n      \n      </mat-card-content>\n\n      <mat-card-actions >\n        <div class=\"action-set\">\n          <button class=\"cancel\" (click)=\"cancel()\" mat-button>Cancel</button>\n          <button *ngIf=\"canSend\" class=\"done\" (click)=\"done()\" mat-button>Done</button>\n        </div>\n      </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-product/add-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\nmat-card-header {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nmat-card-header mat-card-title {\n    font-size: 22px;\n    font-weight: 600; }\n\n.add-img {\n  width: 100%;\n  height: 200px;\n  background: url(\"/assets/img/imgicon.png\") center no-repeat;\n  background-size: 200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.add-img input {\n    width: 200px;\n    height: 160px;\n    position: relative;\n    opacity: 0;\n    z-index: 4; }\n\n.add-img .text-overlay {\n    background-color: #0000007d;\n    color: #ffffff;\n    position: relative;\n    bottom: 65px;\n    width: 200px;\n    text-align: center; }\n\n.input-form-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.input-form-container .mat-select {\n    margin: 14px 0;\n    font-size: 16px; }\n\n.input-form-container .form-field-container {\n    margin: 10px 0; }\n\n.input-form-container .form-field-container input, .input-form-container .form-field-container textarea {\n      border: 1px solid #dfdfdf;\n      height: 44px;\n      font-size: 16px;\n      padding: 0px 10px;\n      cursor: pointer; }\n\n.input-form-container .form-field-container mat-label {\n      font-size: 16px;\n      font-weight: 200; }\n\n.input-form-container .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.input-form-container textarea {\n    height: 100px; }\n\n.input-form-container mat-form-field {\n    color: #fff; }\n\n.input-form-container .keyword-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.input-form-container .keyword-container mat-form-field {\n      width: 100%; }\n\n.input-form-container .button-container {\n    width: 80px;\n    height: 35px; }\n\nmat-form-field input {\n  color: #000000; }\n\n.action-set {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.action-set button {\n    width: 170px; }\n\n.action-set .done {\n    background-color: #b5e2e5;\n    color: #ffffff; }\n\n.action-set .cancel {\n    background: rgba(255, 255, 255, 0);\n    color: #b5e2e5;\n    border: 1px solid #b5e2e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_user_profile__ = __webpack_require__("../../../../../src/app/class/user-profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var newProduct = /** @class */ (function () {
    function newProduct() {
    }
    return newProduct;
}());
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(router, afs, db, locationService, dataService, auth, userProfile) {
        this.router = router;
        this.afs = afs;
        this.db = db;
        this.locationService = locationService;
        this.dataService = dataService;
        this.auth = auth;
        this.userProfile = userProfile;
        this.doneAddingProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.imageUrl = null;
        this.canSend = true;
        this.categories = [
            "Wigs", "Natural Hair", "Protective Styling"
        ];
        this.brandList = [
            "Mane Choice", "Shea Moisture", "Janet Collection", "Other"
        ];
        this.newProduct = {};
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getCurrentLocation(function (pos) {
            _this.location = pos;
            _this.canSend;
        });
        this.location = this.locationService.location;
        // console.log('this is the location attribute', this.location);
        // this.productList = this.db.list('/products');
        // const product = this.db.list<Product>('/products');
        this.profileUser = this.auth.getCurrentUser();
    };
    AddProductComponent.prototype.cancel = function () {
        this.doneAddingProduct.emit({ update: false });
    };
    AddProductComponent.prototype.done = function () {
        var _this = this;
        if (this.location && this.location.long & this.location.lat) {
            this.newProduct.uid = this.profileUser.uid;
            this.newProduct.long = this.location.long;
            this.newProduct.lat = this.location.lat;
            this.newProduct.date = new Date().toISOString();
            // this.productList.push(this.newProduct);
            this.canSend = false;
            this.data = this.dataService.addProduct(this.newProduct)
                .subscribe(function (prod) {
                _this.canSend = true;
                _this.doneAddingProduct.emit({ update: false });
            }, function (err) {
                console.log('there was an error');
            });
        }
    };
    AddProductComponent.prototype.onFileSelected = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
            _this.newProduct.image = _this.imageUrl;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], AddProductComponent.prototype, "doneAddingProduct", void 0);
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-product',
            template: __webpack_require__("../../../../../src/app/add-product/add-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-product/add-product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__class_user_profile__["a" /* UserProfile */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon("user", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/user.svg"));
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_icon__["b" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bmconfig_bmconfig_module__ = __webpack_require__("../../../../../src/app/bmconfig/bmconfig.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__supplyanddemand_supplyanddemand_component__ = __webpack_require__("../../../../../src/app/supplyanddemand/supplyanddemand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_map_home_map_component__ = __webpack_require__("../../../../../src/app/home-map/home-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__map_view_map_view_component__ = __webpack_require__("../../../../../src/app/map-view/map-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_action_button_action_button_component__ = __webpack_require__("../../../../../src/app/shared/action-button/action-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__create_demand_create_demand_component__ = __webpack_require__("../../../../../src/app/create-demand/create-demand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_modal_window_modal_window_component__ = __webpack_require__("../../../../../src/app/shared/modal-window/modal-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__privacy_terms_privacy_terms_component__ = __webpack_require__("../../../../../src/app/privacy-terms/privacy-terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__add_product_add_product_component__ = __webpack_require__("../../../../../src/app/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_search_modal_search_modal_component__ = __webpack_require__("../../../../../src/app/shared/search-modal/search-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__class_user_profile__ = __webpack_require__("../../../../../src/app/class/user-profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = __WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].firebase;






























var appRoutes = [
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_20__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_42__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_17__home_map_home_map_component__["a" /* HomeMapComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_20__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__services_auth_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_25__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__services_auth_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_43__messages_messages_component__["a" /* MessagesComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_26__user_user_component__["a" /* UserComponent */], resolve: { data: '' } },
    { path: 'create-demand', component: __WEBPACK_IMPORTED_MODULE_32__create_demand_create_demand_component__["a" /* CreateDemandComponent */] },
    { path: 'privacy-terms', component: __WEBPACK_IMPORTED_MODULE_34__privacy_terms_privacy_terms_component__["a" /* PrivacyTermsComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_35__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:id/edit-profile', component: __WEBPACK_IMPORTED_MODULE_39__edit_profile_edit_profile_component__["a" /* EditProfileComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__supplyanddemand_supplyanddemand_component__["a" /* SupplyanddemandComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_map_home_map_component__["a" /* HomeMapComponent */],
                __WEBPACK_IMPORTED_MODULE_18__map_view_map_view_component__["a" /* MapViewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_action_button_action_button_component__["a" /* ActionButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_32__create_demand_create_demand_component__["a" /* CreateDemandComponent */],
                __WEBPACK_IMPORTED_MODULE_33__shared_modal_window_modal_window_component__["a" /* ModalWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_34__privacy_terms_privacy_terms_component__["a" /* PrivacyTermsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_36__add_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_37__shared_search_modal_search_modal_component__["a" /* SearchModalComponent */],
                __WEBPACK_IMPORTED_MODULE_39__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_42__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_43__messages_messages_component__["a" /* MessagesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: false, onSameUrlNavigation: "reload" }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: __WEBPACK_IMPORTED_MODULE_14__bmconfig_bmconfig_module__["a" /* bm_constants */].gmaps_api_key,
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_27__services_auth_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_28__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_30__services_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_31__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_29__auth0_angular_jwt__["a" /* JwtHelperService */], __WEBPACK_IMPORTED_MODULE_41__class_user_profile__["a" /* UserProfile */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_33__shared_modal_window_modal_window_component__["a" /* ModalWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_37__shared_search_modal_search_modal_component__["a" /* SearchModalComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bmconfig/bmconfig.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bm_constants; });
var bm_constants = { "gmaps_api_key": "AIzaSyAH90HLX8KjaduuHdouHVtsVa9ChgGJSf0" };


/***/ }),

/***/ "../../../../../src/app/class/dialog-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogData; });
var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());



/***/ }),

/***/ "../../../../../src/app/class/user-profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
var UserProfile = /** @class */ (function () {
    function UserProfile() {
        this.storeHours = [
            { day: 'Monday', open: '', closed: '' },
            { day: 'Tuesday', open: '', closed: '' },
            { day: 'Wednesday', open: '', closed: '' },
            { day: 'Thursday', open: '', closed: '' },
            { day: 'Friday', open: '', closed: '' },
            { day: 'Saturday', open: '', closed: '' },
            { day: 'Sunday', open: '', closed: '' },
        ];
    }
    return UserProfile;
}());



/***/ }),

/***/ "../../../../../src/app/create-demand/create-demand.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<input [(ngModel)]=\"newContent.name\" />\n<input [(ngModel)]=\"newContent.category\" /> \n<input [(ngModel)]=\"newContent.subcategory\" /> \n<button (click)=\"collectData()\"></button>\n\n<div *ngFor=\"let product of products | async\">\n{{product | json}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/create-demand/create-demand.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-demand/create-demand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDemandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var CreateDemandComponent = /** @class */ (function () {
    function CreateDemandComponent(afs) {
        this.afs = afs;
        this.productList = this.afs.collection('/products');
        this.products = this.productList.valueChanges();
        this.newContent = { name: '', category: '', subcategory: '' };
    }
    CreateDemandComponent.prototype.ngOnInit = function () {
        this.productList = this.afs.collection('/products');
        this.products = this.productList.valueChanges();
    };
    CreateDemandComponent.prototype.collectData = function () {
        console.log('this si the new content :', this.newContent);
        this.productList.add(this.newContent);
    };
    CreateDemandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-demand',
            template: __webpack_require__("../../../../../src/app/create-demand/create-demand.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-demand/create-demand.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CreateDemandComponent);
    return CreateDemandComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"add-product-container\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>Edit Profile</mat-card-title>\n      </mat-card-header>\n      <div class=\"add-img\">\n        <div class=\"input-overlay-container\">\n          <input type=\"file\" accept=\"image/*\" (change)=\"onFileSelected($event.target.files)\">\n          <div class=\"text-overlay\">\n            <p>Add Photo</p>\n          </div> \n        </div>\n        <img *ngIf=\"profile && profile.profileImage && !imageUrl\" [src]=\"profile.profileImage\" alt=\"Pink hair\">\n        <img *ngIf=\"imageUrl\" [src]=\"imageUrl\" alt=\"Pink hair\">\n      </div>\n\n      <mat-card-content class=\"input-form-container\">\n        \n        <div class=\"form-field-container\">\n          <mat-label>Store Name:</mat-label>\n          <input matInput placeholder=\"New Store Name\" type=\"text\" [(ngModel)]=\"profile.storeName\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>User Name:</mat-label>\n          <input matInput placeholder=\"User Name\" type=\"text\" [(ngModel)]=\"profile.userName\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>Address:</mat-label>\n          <input placeholder=\"search for location\" width=\"150px\" height=\"50px\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [(ngModel)]=\"updatedProfileUser.address || profile.address\" [formControl]=\"searchControl\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>Phone Number:</mat-label>\n          <input matInput placeholder=\"Phone Number\" type=\"tel\" [(ngModel)]=\"profile.phoneNumber\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>Email:</mat-label>\n          <input matInput placeholder=\"Email\" type=\"email\" [(ngModel)]=\"profile.email\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>Facebook Url:</mat-label>\n          <input matInput placeholder=\"facebook page\" type=\"text\" [(ngModel)]=\"profile.facebook\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>Instagram Url:</mat-label>\n          <input matInput placeholder=\"instagram page\" type=\"text\" [(ngModel)]=\"profile.instagram\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>Youtube Url:</mat-label>\n          <input matInput placeholder=\"instagram page\" type=\"text\" [(ngModel)]=\"profile.youtube\">\n        </div>\n        <div class=\"form-field-container\">\n          <mat-label>Website Url:</mat-label>\n          <input matInput placeholder=\"website url\" type=\"text\" [(ngModel)]=\"profile.website\">\n        </div>\n        <div class=\"form-field-container\" *ngFor=\"let day of storeHours; index as i;\">\n          <mat-label>{{day.day}}</mat-label>\n          <mat-select *ngIf=\"timeList\"  placeholder=\"--Open From--\" [(ngModel)]=\"day.open\">\n            <mat-option *ngFor=\"let time of timeList\" [value]=\"time\" >\n              {{time}}\n            </mat-option>\n          </mat-select>\n          <mat-select *ngIf=\"timeList\" placeholder=\"--Closed At--\" [(ngModel)]=\"day.closed\">\n            <mat-option *ngFor=\"let time of timeList\" [value]=\"time\" >\n              {{time}}\n            </mat-option>\n          </mat-select>\n        </div>\n        <!-- <agm-map [scrollwheel]=\"false\" [zoom]=\"zoom\">\n          <agm-marker  \n          [markerDraggable]=\"null\"\n          (dragEnd)=\"null\"></agm-marker>\n        </agm-map> -->\n\n\n        <!-- <div class=\"form-field-container\">\n          <mat-label>Choose Brand</mat-label>\n          <mat-select placeholder=\"--Select--\" [(ngModel)]=\"newProduct.brand\">\n            <mat-option *ngFor=\"let brand of brandList\" [value]=\"brand\" >\n              {{brand}}\n            </mat-option>\n          </mat-select>\n        </div>\n        <div class=\"keyword-container form-field-container\">\n          <div>\n            <mat-label>Tags</mat-label>\n            <input matInput [(ngModel)]=\"newProduct.keywords\" placeholder=\"Keywords(ie: 4c, lace, easy diy)\">  \n          </div>          \n          <div>\n              <mat-label>Price ($):</mat-label><input [(ngModel)]=\"newProduct.price\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"form-field-container details\">\n          <mat-label>Product Details</mat-label>\n          <textarea matInput type=\"text\" [(ngModel)]=\"newProduct.description\" placeholder=\"Tell us everything you know about the product\"></textarea>\n        </div>\n       -->\n      </mat-card-content>\n\n      <mat-card-actions >\n        <div class=\"action-set\">\n          <button class=\"cancel\" (click)=\"goToProfile()\" mat-button>Cancel</button>\n          <button *ngIf=\"canSend\" class=\"done\" (click)=\"done()\" mat-button>Done</button>\n        </div>\n      </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\nmat-card-header {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nmat-card-header mat-card-title {\n    font-size: 22px;\n    font-weight: 600; }\n\n.add-product-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.add-product-container mat-card {\n    margin-top: 60px;\n    width: 85vw;\n    max-width: 600px;\n    margin: 60px; }\n\n.add-img {\n  width: 100%;\n  height: 150px;\n  background: url(\"/assets/img/imgicon.png\") center no-repeat;\n  background-size: 150px 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.add-img .input-overlay-container {\n    position: absolute;\n    z-index: 3;\n    width: 150px;\n    height: 150px; }\n\n.add-img input {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    opacity: 0;\n    z-index: 4; }\n\n.add-img .text-overlay {\n    background-color: #0000007d;\n    color: #ffffff;\n    position: relative;\n    bottom: 100px;\n    width: 150px;\n    text-align: center; }\n\n.add-img img {\n    width: 150px;\n    height: 150px; }\n\n.input-form-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.input-form-container .mat-select {\n    margin: 14px 0;\n    font-size: 16px; }\n\n.input-form-container .form-field-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 10px 0; }\n\n.input-form-container .form-field-container mat-label {\n      width: 30%; }\n\n.input-form-container .form-field-container input, .input-form-container .form-field-container textarea {\n      border: 1px solid #dfdfdf;\n      border-right: 0px;\n      border-left: 0px;\n      border-top: 0px;\n      height: 44px;\n      width: 70%;\n      font-size: 16px;\n      padding: 0px 10px;\n      cursor: pointer;\n      overflow-x: scroll; }\n\n.input-form-container .form-field-container mat-label {\n      font-size: 16px;\n      font-weight: 200; }\n\n.input-form-container .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.input-form-container textarea {\n    height: 100px; }\n\n.input-form-container mat-form-field {\n    color: #fff; }\n\n.input-form-container .keyword-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.input-form-container .keyword-container mat-form-field {\n      width: 100%; }\n\n.input-form-container .button-container {\n    width: 80px;\n    height: 35px; }\n\nmat-form-field input {\n  color: #000000; }\n\n.action-set {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.action-set button {\n    width: 170px; }\n\n.action-set .done {\n    background-color: #b5e2e5;\n    color: #ffffff; }\n\n.action-set .cancel {\n    background: rgba(255, 255, 255, 0);\n    color: #b5e2e5;\n    border: 1px solid #b5e2e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_user_profile__ = __webpack_require__("../../../../../src/app/class/user-profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(afs, db, locationService, dataService, auth, router, route, mapsAPILoader, ngZone, updatedProfileUser, profileUser) {
        this.afs = afs;
        this.db = db;
        this.locationService = locationService;
        this.dataService = dataService;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.updatedProfileUser = updatedProfileUser;
        this.profileUser = profileUser;
        this.canEdit = false;
        this.imageUrl = null;
        this.canSend = true;
        this.timeList = [];
        this.storeHours = [
            { day: 'Monday', open: '', closed: '' },
            { day: 'Tuesday', open: '', closed: '' },
            { day: 'Wednesday', open: '', closed: '' },
            { day: 'Thursday', open: '', closed: '' },
            { day: 'Friday', open: '', closed: '' },
            { day: 'Saturday', open: '', closed: '' },
            { day: 'Sunday', open: '', closed: '' },
        ];
        this.timeList = this.createTimeList();
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.profile = _this.dataService.getUser(params.id)
                .subscribe(function (user) {
                if (_this.dataService.profileLookup) {
                    _this.profile = _this.dataService.profileLookup;
                }
                else {
                    _this.profile = user;
                    _this.storeHours = _this.profile.storeHours;
                }
                _this.auth.authState.subscribe(function (auth) {
                    _this.profileUser = auth.providerData[0];
                    if (_this.profileUser && _this.profile && (_this.profileUser.uid === _this.profile.uid))
                        _this.canEdit = true;
                    _this.authorizedUser = auth ? true : false;
                });
            }, function (err) {
                console.log('the err for finding user', err);
            });
        });
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            // this.openSearch();
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    _this.coordinates = place.geometry.location;
                    _this.updatedProfileUser.long = Number(_this.coordinates.lng());
                    _this.updatedProfileUser.lat = Number(_this.coordinates.lat());
                    _this.updatedProfileUser.address = place.formatted_address;
                    console.log('is the address changing,', _this.updatedProfileUser.address);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // //set latitude, longitude and zoom
                    // this.latitude = place.geometry.location.lat();
                    // this.longitude = place.geometry.location.lng();
                    // this.zoom = 12;
                });
            });
        });
    };
    EditProfileComponent.prototype.createTimeList = function () {
        this.timeList;
        for (var i = 1; i < 12; i++) {
            var time = i + ' am';
            this.timeList.push(time);
        }
        this.timeList.push('12pm');
        for (var i = 1; i < 12; i++) {
            var time = i + ' pm';
            this.timeList.push(time);
        }
        this.timeList.push('12 am');
        return this.timeList;
    };
    EditProfileComponent.prototype.onFileSelected = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
            _this.updatedProfileUser.profileImage = _this.imageUrl;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    EditProfileComponent.prototype.goToProfile = function () {
        this.router.navigate(['/profile/' + this.profile.uid]);
    };
    EditProfileComponent.prototype.done = function () {
        var _this = this;
        // if(this.location && this.location.long & this.location.lat) {
        this.canSend = false;
        this.profile.storeHours.map(function (day, i) {
            // console.log('what is the profile day', day, i);
        });
        this.updatedProfileUser.storeHours.map(function (day, i) {
            for (var j in day) {
                day[j] = _this.storeHours[i][j];
            }
        });
        this.updatedProfileUser.userName = this.profile.userName;
        this.updatedProfileUser.storeName = this.profile.storeName;
        this.data = this.dataService.updateUser(this.profile._id, this.updatedProfileUser)
            .subscribe(function (updatedUser) {
            _this.canSend = true;
            _this.goToProfile();
        }, function (err) {
            console.log('there was an error');
        });
        // } 
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], EditProfileComponent.prototype, "searchElementRef", void 0);
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-profile',
            template: __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_9__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__class_user_profile__["a" /* UserProfile */],
            __WEBPACK_IMPORTED_MODULE_5__class_user_profile__["a" /* UserProfile */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n  <div class=\"nav-icon-container\">\n    <div (click)=\"goToHome()\" class=\"icon-container\">\n      <mat-icon>home</mat-icon>\n    </div>\n    <div (click)=\"goToProfile()\" class=\"icon-container\">\n      <mat-icon svgIcon=\"user\"></mat-icon>\n    </div>\n    <div (click)=\"goToMessages()\" class=\"icon-container\">\n      <mat-icon>message</mat-icon>\n    </div>\n    <div class=\"icon-container\">\n      <mat-icon>more_horiz</mat-icon>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\n.footer-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  background-color: #393939;\n  height: 50px;\n  width: 100%; }\n\np {\n  margin: 0;\n  line-height: 2.9;\n  color: #fff; }\n\n.nav-icon-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 500px;\n  width: 100%;\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.goToHome = function () {
        this.router.navigate(['home']);
    };
    FooterComponent.prototype.goToProfile = function () {
        if (this.currentUser) {
            this.router.navigate(['profile/' + this.currentUser.uid]);
        }
        else {
            this.router.navigate(['signin', { params: '/profile/' + this.currentUser.uid }]);
        }
    };
    FooterComponent.prototype.goToMessages = function () {
        if (this.currentUser) {
            this.router.navigate(['messages']);
        }
        else {
            this.router.navigate(['signin', { params: '/messages' }]);
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-map/home-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <app-header> </app-header>\n    <!-- <div class=\"main-container overlay\"></div> -->\n  <div class=\"main-container\">\n    <div id=\"product-list-container\">\n        <div class=\"active-products-container\">  \n          <div class=\"product-tile\" *ngFor=\"let user of users\">\n              <div class=\"info-container\" (click)=\"viewProducts(user)\">\n                  <div class=\"product-img\">\n                    <img mat-card-image *ngIf=\"user.profileImage\" [src]=\"user.profileImage\" alt=\"Photo of a Shiba Inu\">\n                    <img mat-card-image *ngIf=\"!user.profileImage\" src=\"../../assets/img/imgicon.png\" alt=\"NO user Image\">                \n                  </div>\n                  <div class=\"text-container\">\n                      <p>{{user.storeName}}</p>\n                      <p><mat-icon>location_on</mat-icon>{{user.address}}</p>\n                      <div>\n                        <button mat-button (click)=\"viewProducts(user)\">View Products</button>\n                      </div>\n                  </div>\n              </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"map-container\">\n      <div class=\"container\">\n        <div class=\"form-group\">\n          <input placeholder=\"search for location\" width=\"150px\" height=\"50px\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n        </div>\n        <agm-map *ngIf=\"userList\" [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n          <div *ngFor=\"let m of users; let i = index\">\n            <agm-marker [latitude]=\"m.lat\" [longitude]=\"m.long\"  \n            [markerDraggable]=\"null\"\n            (dragEnd)=\"null\"></agm-marker>\n          </div>\n        </agm-map>\n      </div>\n    </div>\n  </div>\n  <app-footer class=\"footer\"></app-footer>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-map/home-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\n.page-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.page-wrapper .button-container {\n    width: 80px;\n    height: 35px; }\n\nagm-map {\n  height: 600px; }\n\n.main-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-height: 95vh;\n  overflow-y: hidden;\n  position: relative;\n  margin-top: 54px; }\n\n.main-container.overlay {\n  z-index: 23;\n  background: rgba(0, 0, 0, 0.06);\n  position: absolute;\n  height: 95vh; }\n\n#product-list-container {\n  min-width: 300px;\n  width: 100%;\n  height: 600px;\n  padding: 20px; }\n\n#product-list-container .product-tile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 15px;\n    background-color: #fff; }\n\n#product-list-container .product-tile .product-img img {\n      width: 100%;\n      height: 100%; }\n\n#product-list-container .product-tile .product-img {\n      width: 150px;\n      height: 150px; }\n\n#product-list-container .active-products-container {\n    height: 90vh;\n    overflow-y: scroll; }\n\n#product-list-container .info-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n#product-list-container .info-container .text-container {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      padding: 0 15px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n\n#product-list-container .info-container .text-container p {\n        margin: 5px; }\n\n#product-list-container .mat-card-img {\n    margin: 0; }\n\n#map-container {\n  width: 100%; }\n\n@media only screen and (max-width: 649px) {\n  .main-container {\n    padding: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-top: 0; }\n  #product-list-container {\n    width: 100%;\n    height: 136px;\n    position: fixed;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    z-index: 2;\n    bottom: 0px; }\n    #product-list-container .active-products-container {\n      height: 90vh;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n    #product-list-container .mat-card-img {\n      margin: 0; }\n    #product-list-container .product-tile {\n      margin: 0 10px 10px 10px;\n      height: 100px; }\n      #product-list-container .product-tile .product-img {\n        width: 100px;\n        height: 100px; }\n      #product-list-container .product-tile .product-img img {\n        width: 100px;\n        height: 100px; } }\n\napp-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-map/home-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_search_modal_search_modal_component__ = __webpack_require__("../../../../../src/app/shared/search-modal/search-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeMapComponent = /** @class */ (function () {
    function HomeMapComponent(mapsAPILoader, ngZone, db, dialog, dataService, router) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.db = db;
        this.dialog = dialog;
        this.dataService = dataService;
        this.router = router;
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: '6',
                draggable: true
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: '4',
                draggable: false
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: '6',
                draggable: true
            }
        ];
        this.users = [];
        // this.products = this.db.list('/products').valueChanges();
        console.log('this is the users', this.users);
        this.done = true;
        this.productList = this.dataService.getAllProducts()
            .subscribe(function (product) {
            _this.products = product;
            console.log('this is the product list', _this.products);
            return product;
        }, function (err) { });
        this.userList = this.dataService.getAllUsers()
            .subscribe(function (user) {
            _this.users = user;
            console.log('this is the user from subscribe', _this.users);
            return user;
        }, function (err) { console.log('we got an error recieving all users', err); });
    }
    HomeMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            // this.openSearch();
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = google.maps.places.PlaceResult = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    HomeMapComponent.prototype.viewProducts = function (user) {
        this.dataService.profileLookup = user;
        this.router.navigate(['/profile/' + user.uid]);
    };
    HomeMapComponent.prototype.openSearch = function () {
        var loginRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__shared_search_modal_search_modal_component__["a" /* SearchModalComponent */], {
            width: '400px',
            data: { heading: 'hey girl this worked', subheading: 'i know girl lets work ' },
        });
        loginRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    HomeMapComponent.prototype.getLong = function (long) {
        console.log('this is the long', long);
        return long;
    };
    HomeMapComponent.prototype.getLat = function (lat) {
        console.log('this is the long', lat);
        return lat;
    };
    HomeMapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
                _this.markers.push({
                    lat: _this.latitude,
                    lng: _this.longitude,
                    draggable: true,
                    label: 'C'
                }, _this.setDefaultStorePosition());
                _this.setDefaultStorePosition();
            });
        }
        this.done = true;
    };
    HomeMapComponent.prototype.mapClicked = function (obj) {
        this.markers.push({
            lat: obj.latitude,
            lng: obj.longitude,
            label: obj.label,
            draggable: true
        });
    };
    HomeMapComponent.prototype.setDefaultStorePosition = function () {
        this.defaultStoreLat = this.latitude ? this.latitude + 0.5 : null;
        this.defaultStoreLong = this.longitude ? this.longitude + 0.4 : null;
        return { lat: this.defaultStoreLat, lng: this.defaultStoreLong, label: 'D', draggable: true };
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomeMapComponent.prototype, "searchElementRef", void 0);
    HomeMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-map',
            template: __webpack_require__("../../../../../src/app/home-map/home-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-map/home-map.component.scss")]
        })
        // just an interface for type safety.
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]])
    ], HomeMapComponent);
    return HomeMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section id=\"home\">\n  <div class=\"content-container\">\n    <div class=\"text-container\">\n        <h2 class=\"heading\">\n            Find the best foods in your area\n        </h2>\n        <p class=\"sub-heading\">in your neighborhood, when you see it</p>\n        <!-- <div *ngFor=\"let category of categories | async\">\n          {{category| json}}\n          \n                  <div *ngFor=\"let cat of category.subcategories\">  {{cat | json}}\n                      \n                  </div>\n        </div> -->\n    </div>\n  \n    <div class=\"main-content full\">\n        <!-- <button [matMenuTriggerFor]=\"search\">\n          <input type=\"text\" placeholder=\"products, brand, trends\">\n          <input placeholder=\"Current Location\">\n        </button> -->\n        <div class=\"button-container\">\n          <app-action-button ctaText=\"Search\" (click)=\"goToMapView()\"></app-action-button>\n        </div>\n        <!-- <mat-menu #search=\"matMenu\"> \n            <button (click)=\"searchDatabase()\" mat-menu-item *ngFor=\"let category of categories | async\">  {{category.name | json}}</button>\n        </mat-menu>  -->\n    </div>\n\n    <div class=\"main-content mobile\">\n      <!-- <button [matMenuTriggerFor]=\"menu\">\n        <input type=\"text\" name=\"\" id=\"\" placeholder=\"products, brand, trends\" >\n      </button> -->\n      <div class=\"button-container\">\n        <app-action-button (click)=\"goToMapView()\" ctaText=\"Search\" size=\"'md'\"></app-action-button>\n      </div>\n      <!-- <mat-menu #menu=\"matMenu\"> \n          <button (click)=\"searchDatabase()\" mat-menu-item *ngFor=\"let category of categories | async\">  {{category.name | json}}</button>\n      </mat-menu>  -->\n      \n    </div>\n    \n  </div>\n</section>\n<!-- \n<aside>\n    <h3>The #1 platform for local store owners</h3>\n    <p>Manage your business, accept payments and grow your clientele using ProductMap software</p>\n    <button mat-raised-button >Set up your store</button>  \n  </aside>\n<section id=\"browse\">\n  <h1>Browse & Discover</h1>\n  <mat-grid-list cols=\"3\" class=\"content-container full\">\n    <mat-grid-tile class=\"block-one\">SUPPLIERS</mat-grid-tile>\n    <mat-grid-tile class=\"block-two\">HI-IN-DEMAND</mat-grid-tile>\n    <mat-grid-tile class=\"block-three\">TRENDS</mat-grid-tile>\n  </mat-grid-list>\n  <mat-grid-list cols=\"1\" class=\"content-container mobile\">\n      <mat-grid-tile class=\"block-one\">HI-IN-DEMAND</mat-grid-tile>\n      <mat-grid-tile class=\"block-two\">SUPPLIERS</mat-grid-tile>\n      <mat-grid-tile class=\"block-three\">TRENDS</mat-grid-tile>\n    </mat-grid-list>\n</section> -->\n<app-footer class=\"footer\"></app-footer>"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\n#home {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/img/homebg.jpg")) + ") no-repeat top;\n  background-size: 2000px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh; }\n\n#home .text-container {\n    margin: 15px;\n    text-align: center; }\n\n#home .heading, #home .sub-heading {\n    margin: 0; }\n\n#home .heading {\n    color: #fff;\n    font-size: 18px;\n    margin: 0; }\n\n#home .sub-heading {\n    color: #D0D0D0; }\n\n#home mat-form-field {\n    color: #fff; }\n\n.mat-form-field-label {\n  color: red !important; }\n\nmat-grid-tile {\n  background: lightblue; }\n\naside {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  background: #b5e2e5;\n  color: #fff;\n  padding: 30px 0px; }\n\naside button.mat-raised-button {\n    color: #000; }\n\naside h3 {\n    margin: 0; }\n\n.header {\n  position: fixed;\n  top: 0; }\n\n.main-content .button-container {\n  width: 117px; }\n\n.main-content.full {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.main-content.full input {\n    background: #fff;\n    height: 50px;\n    width: 150px;\n    padding-left: 10px;\n    border: 1px solid #eaeaea; }\n\n#browse .content-container.mobile {\n  display: none; }\n\n#browse mat-grid-tile {\n  color: #fff; }\n\n#browse mat-grid-tile.block-two {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/img/beautysupply.jpg")) + ") no-repeat top;\n  background-size: 152vw; }\n\n#browse mat-grid-tile.block-one {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/img/mayvenn.jpg")) + ") no-repeat top; }\n\n#browse mat-grid-tile.block-three {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/img/dreads.jpg")) + ") no-repeat top; }\n\n.main-content.mobile {\n  display: none; }\n\n@media (max-width: 600px) {\n  #home {\n    height: 100vh; }\n  .main-content.full {\n    display: none; }\n  .main-content.mobile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .main-content.mobile input {\n      background: #fff;\n      height: 50px;\n      min-width: 150px;\n      width: 50vw;\n      padding-left: 10px;\n      border: 1px solid #eaeaea; }\n  #browse .content-container.full {\n    display: none; }\n  #browse .content-container.mobile {\n    display: inherit; }\n  #browse mat-grid-tile.block-two {\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/mayvenn.jpg")) + ") no-repeat top 66vw; } }\n\napp-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());
var SubCategory = /** @class */ (function () {
    function SubCategory() {
    }
    return SubCategory;
}());
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(afs, router, locationService, dataService) {
        this.afs = afs;
        this.router = router;
        this.locationService = locationService;
        this.dataService = dataService;
        this.categoryList = this.afs.collection('categories');
        this.categories = this.categoryList.valueChanges();
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.categoryList = this.afs.collection('/categories');
        this.categories = this.categoryList.valueChanges();
        this.categoryDoc = this.afs.doc('categories/PMhBPkMtT3H0LEYBT44K');
        this.category = this.categoryDoc.valueChanges();
        this.locationService.getCurrentLocation(function (pos) {
        });
        // this.dataService.getUsers().subscribe((products) => {
        //   console.log('these are the products', products);
        // })
    };
    LandingPageComponent.prototype.goToMapView = function () {
        this.router.navigate(['/home']);
    };
    LandingPageComponent.prototype.searchDatabase = function () {
        // if(this.categories) {
        // console.log('these are the categories', this.categories);
        // } else {
        this.router.navigate(['create-demand', { skipLocationChange: true }]);
        // }
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_location_service__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map-view/map-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  map-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/map-view/map-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-view/map-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapViewComponent = /** @class */ (function () {
    function MapViewComponent() {
    }
    MapViewComponent.prototype.ngOnInit = function () {
    };
    MapViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map-view',
            template: __webpack_require__("../../../../../src/app/map-view/map-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map-view/map-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapViewComponent);
    return MapViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n    <app-header> </app-header>\n    <div class=\"page-container\">\n      <p>You currently dont have any messages </p>\n    </div>\n    <app-footer class=\"footer\"></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\napp-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.page-container {\n  margin-top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/privacy-terms/privacy-terms.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    TERMS OF SERVICE\n    \n    ----\n    \n    OVERVIEW\n    \n    This website is operated by C Infinity Media. Throughout the site, the terms “we”, “us” and “our” refer to C Infinity Media. C Infinity Media offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.\n    \n    By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply  to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.\n    \n    Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.\n    \n    Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.\n    \n    Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.\n    \n    \n    SECTION 1 - ONLINE STORE TERMS\n    \n    By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.\n    \n    You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).\n    \n    You must not transmit any worms or viruses or any code of a destructive nature.\n    \n    A breach or violation of any of the Terms will result in an immediate termination of your Services.\n    \n    \n    SECTION 2 - GENERAL CONDITIONS\n    \n    We reserve the right to refuse service to anyone for any reason at any time.\n    \n    You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.\n    \n    You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.\n    \n    The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.\n    \n    \n    SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION\n    \n    We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.\n    \n    This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.\n    \n    \n    SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES\n    \n    Prices for our products are subject to change without notice.\n    \n    We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.\n    \n    We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.\n    \n    \n    SECTION 5 - PRODUCTS OR SERVICES (if applicable)\n    \n    Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.\n    \n    We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.\n    \n    We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.\n    \n    We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.\n    \n    \n    SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION\n    \n    We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.\n    \n    You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.\n    \n    For more detail, please review our Returns Policy.\n    \n    \n    SECTION 7 - OPTIONAL TOOLS\n    \n    We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.\n    \n    You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.\n    \n    Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).\n    \n    We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.\n    \n    \n    SECTION 8 - THIRD-PARTY LINKS\n    \n    Certain content, products and services available via our Service may include materials from third-parties.\n    \n    Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.\n    \n    We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.\n    \n    \n    SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS\n    \n    If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.\n    \n    We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.\n    \n    You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.\n    \n    \n    SECTION 10 - PERSONAL INFORMATION\n    \n    Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.\n    \n    \n    SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS\n    \n    Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).\n    \n    We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.\n    \n    \n    \n    SECTION 12 - PROHIBITED USES\n    \n    In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.\n    \n    \n    SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY\n    \n    We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.\n    \n    We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.\n    \n    You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.\n    \n    You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.\n    \n    In no case shall C Infinity Media, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.\n    \n    \n    \n    SECTION 14 - INDEMNIFICATION\n    \n    You agree to indemnify, defend and hold harmless C Infinity Media and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.\n    \n    \n    SECTION 15 - SEVERABILITY\n    \n    In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.\n    \n    \n    SECTION 16 - TERMINATION\n    \n    The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.\n    \n    These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.\n    \n    If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).\n    \n    \n    SECTION 17 - ENTIRE AGREEMENT\n    \n    The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.\n    \n    These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).\n    \n    Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.\n    \n    \n    SECTION 18 - GOVERNING LAW\n    \n    These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of 1201 s scott street, apt 405, arlington, VA, 22204, United States.\n    \n    \n    SECTION 19 - CHANGES TO TERMS OF SERVICE\n    \n    You can review the most current version of the Terms of Service at any time at this page.\n    \n    We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.\n    \n    \n    SECTION 20 - CONTACT INFORMATION\n    \n    Questions about the Terms of Service should be sent to us at ctodmia@gmail.com.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/privacy-terms/privacy-terms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy-terms/privacy-terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyTermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyTermsComponent = /** @class */ (function () {
    function PrivacyTermsComponent() {
    }
    PrivacyTermsComponent.prototype.ngOnInit = function () {
    };
    PrivacyTermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-privacy-terms',
            template: __webpack_require__("../../../../../src/app/privacy-terms/privacy-terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy-terms/privacy-terms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyTermsComponent);
    return PrivacyTermsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n  <app-header></app-header>\n  <div class=\"main-container\">\n    <div>\n      <div id=\"profile\" *ngIf=\"productListView\" [ngClass]=\"{'profile-display': !productListView}\">\n        <div>\n          <div class=\"profile-pic\">\n            <img *ngIf=\"profile\" src=\"{{profile.profileImage}}\" alt=\"\">\n          </div>\n          <div class=\"info-container\">\n            <div (click)=\"goToEditProfile()\" class=\"pen\" *ngIf=\"canEdit && !publicView\">\n              <p>Edit Profile</p>\n              <mat-icon>edit</mat-icon>\n            </div>\n            <div *ngIf=\"profile\" class=\"username\">{{profile.storeName}}</div>\n            <div class=\"review-icon\" *ngIf=\"canEdit && publicView\">\n              <div *ngFor=\"let star of stars\">\n                  <mat-icon>star_border</mat-icon>\n              </div> \n              <p>Reviews</p>\n            </div>\n            <p class=\"address-container\" *ngIf=\"profile.address\">\n                <mat-icon>location_on</mat-icon> {{profile.address}}\n            </p>\n            <p class=\"address-container\" *ngIf=\"!profile.address\">\n                <mat-icon>location_on</mat-icon> Worldwide\n            </p>\n            <div *ngIf=\"canEdit && !publicView\">\n              <app-action-button (click)=\"toggleProfileView()\" *ngIf=\"canEdit\" class=\"profile-button\" ctaText=\"Preview Public Mode\" size=\"'lg'\"></app-action-button>\n            </div> \n            <div *ngIf=\"canEdit && publicView\">\n              <app-action-button (click)=\"toggleProfileView()\" *ngIf=\"canEdit\" class=\"profile-button\" ctaText=\"Edit Mode\" size=\"'lg'\"></app-action-button>\n            </div>  \n            <div *ngIf=\"!canEdit\">\n              <app-action-button *ngIf=\"!canEdit\" class=\"profile-button\" ctaText=\"Contact Seller\" size=\"'lg'\"></app-action-button>\n            </div>    \n          </div>\n        </div>\n      </div>\n      <div class=\"add-product-container\">\n        <app-add-product (doneAddingProduct)=\"doneAdding($event)\" *ngIf=\"!productListView\"></app-add-product>\n      </div>\n    </div>\n\n    <div  id=\"products\">\n        <mat-tab-group [selectedIndex]=\"selectedTab\" *ngIf=\"productListView\">\n          <mat-tab label=\"Active Products\">\n            <mat-card *ngIf=\"canEdit && !publicView\" class=\"add-tile\" (click)=\"addProduct()\">\n              <mat-icon>add</mat-icon>\n            </mat-card>\n            <div class=\"active-products-container\">\n\n              <mat-card class=\"product-tile\" *ngFor=\"let product of products\">\n                  <div class=\"profile-pic\">\n                    <img mat-card-image *ngIf=\"product.image\" src=\"{{product.image}}\" alt=\"Photo of a Shiba Inu\">\n                  </div>\n                  <mat-card-content>\n                      {{product.name}}\n                      {{product.brand}}\n                      {{product.description}}   \n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button mat-button>${{product.price}}</button>\n                  </mat-card-actions>\n                </mat-card>\n            </div>\n          </mat-tab>\n          <mat-tab label=\"Out of stock\">\n              \n            </mat-tab>\n        </mat-tab-group>\n    </div>\n  </div>\n  <app-footer class=\"footer\"></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\n.main-container {\n  padding: 15px; }\n\n#profile, #products {\n  margin: 15px;\n  position: relative;\n  top: 45px; }\n\n#profile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 980px;\n  min-height: 200px;\n  height: 100%; }\n\n#profile .address-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n#profile .profile-pic img {\n    width: 100px;\n    height: 100px;\n    border-radius: 100%;\n    margin-bottom: 20px;\n    background: url(\"/assets/img/imgicon.png\") center;\n    background-size: cover; }\n\n#profile .info-container {\n    margin: 0px 20px; }\n\n#profile .pen {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    text-align: right;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n#profile .pen p {\n      margin: 0 10px; }\n\n#profile .review-icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n#profile .review-icon mat-icon {\n      line-height: 1.4; }\n\n#profile .review-icon p {\n      margin: 0 20px; }\n\n.add-product-container {\n  margin-top: 50px; }\n\n.profile-button .button-container {\n  margin: auto;\n  width: 300px !important; }\n\n#products {\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.product-tile {\n  max-width: 200px;\n  height: 260px;\n  border: 2px solid #eeeeee;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 20px 20px 0 20px; }\n\n.product-tile .profile-pic {\n    background: url(\"/assets/img/imgicon.png\") center;\n    background-size: cover;\n    width: 200px;\n    height: 200px; }\n\n.add-tile {\n  margin: 20px 20px 0 20px; }\n\n.add-tile mat-icon {\n    background-color: #b5e2e5;\n    border-radius: 50%;\n    color: #fff;\n    width: 50px;\n    height: 50px;\n    font-size: 40px;\n    text-align: center;\n    line-height: 1.2; }\n\n.active-products-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2; }\n\n.label-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.label-container label {\n    width: 100px; }\n\n.store-hours {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.store-hours div {\n    width: 100px; }\n\n.store-hours-container {\n  width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 239px;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n@media only screen and (max-width: 649px) {\n  .main-container {\n    padding: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  #profile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    max-width: 450px; }\n    #profile .info-container {\n      margin: 0px; }\n  .profile-display {\n    display: none; }\n    .profile-display p {\n      margin-right: 20px; }\n  .profile-pic {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .product-tile {\n    max-width: 300px;\n    width: 300px;\n    height: 360px; } }\n\napp-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 12; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(afs, db, locationService, dataService, auth, router, route) {
        this.afs = afs;
        this.db = db;
        this.locationService = locationService;
        this.dataService = dataService;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.productListView = true;
        this.canEdit = false;
        this.publicView = false;
        this.stars = new Array(5);
        this.profileUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.profile = _this.dataService.getUser(params.id)
                .subscribe(function (user) {
                if (_this.dataService.profileLookup) {
                    _this.profile = _this.dataService.profileLookup;
                }
                else {
                    _this.profile = user;
                }
                if (_this.profileUser && _this.profile && (_this.profileUser.uid === _this.profile.uid))
                    _this.canEdit = true;
                if (_this.profile) {
                    _this.getProducts(_this.profile);
                }
            }, function (err) {
                console.log('the err for finding user', err);
            });
        });
    };
    ProfileComponent.prototype.toggleProfileView = function () {
        this.publicView = !this.publicView;
    };
    ProfileComponent.prototype.goToEditProfile = function () {
        this.router.navigate(['/profile/' + this.profileUser.uid + '/edit-profile']);
    };
    ProfileComponent.prototype.getProducts = function (profile) {
        var _this = this;
        this.productList = this.dataService.getUserProducts(this.profile.uid);
        this.productList.subscribe(function (prod) {
            _this.products = prod;
        }, function (err) { });
    };
    ProfileComponent.prototype.addProduct = function () {
        this.productListView = false;
    };
    ProfileComponent.prototype.doneAdding = function (ev) {
        if (ev.update) {
            this.productListView = !this.productListView;
        }
        else {
            this.productListView = !this.productListView;
            this.getProducts(this.profile);
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        console.log('i am checking to see if you are logged in');
        return true;
    };
    AuthGuardService.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_user_profile__ = __webpack_require__("../../../../../src/app/class/user-profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { JwtHelperService } from '@auth0/angular-jwt';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, af, _http) {
        var _this = this;
        this.afAuth = afAuth;
        this.af = af;
        this._http = _http;
        af.auth().onAuthStateChanged(function (auth) {
            console.log('this the current auth state', auth);
            _this.currentUser = auth ? auth.providerData[0] : null;
        });
        this.authState = afAuth.authState;
        // this.authState.subscribe((auth) => {
        //   this.authState = auth;
        // });
    }
    AuthService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].FacebookAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                console.log('the res', res);
                _this.findUser(res.user.providerData[0])
                    .subscribe(function (user) {
                    console.log('this subscribed user', user);
                    _this.setUserSession(user);
                    resolve(res);
                });
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            });
        });
    };
    AuthService.prototype.findUser = function (userData) {
        var user = new __WEBPACK_IMPORTED_MODULE_6__class_user_profile__["a" /* UserProfile */]();
        console.log('new user object', userData, user);
        user.uid = userData.uid;
        user.providerId = userData.providerId;
        user.profileImage = userData.photoURL;
        user.phoneNumber = userData.phoneNumber;
        user.userName = userData.displayName;
        user.email = userData.email;
        console.log('this is the user after mapping it', user);
        return this._http.post('/api/login-user', user)
            .map(function (result) {
            return result.json();
        });
    };
    AuthService.prototype.logOut = function () {
        this.afAuth.auth.signOut();
        this.deleteUserSession();
    };
    AuthService.prototype.setUserSession = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    };
    AuthService.prototype.deleteUserSession = function () {
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getAllProducts = function () {
        return this._http.get("/api/get-all-products")
            .map(function (result) {
            return result.json();
        });
    };
    DataService.prototype.getAllUsers = function () {
        return this._http.get("/api/get-all-users")
            .map(function (result) {
            return result.json();
        });
    };
    DataService.prototype.getUser = function (id) {
        return this._http.get('/api/user/' + id)
            .map(function (result) {
            return result.json();
        });
    };
    DataService.prototype.updateUser = function (id, updateObj) {
        return this._http.put('/api/user/' + id, updateObj)
            .map(function (result) {
            return result.json();
        });
    };
    DataService.prototype.addProduct = function (productObj) {
        return this._http.post("/api/add-product", productObj)
            .map(function (result) {
            return result.json();
        });
    };
    DataService.prototype.getUserProducts = function (id) {
        return this._http.get('/api/user-product/' + id)
            .map(function (result) {
            return result.json();
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationService = /** @class */ (function () {
    function LocationService() {
        this.location = {
            lat: 38.8629928,
            long: -77.0770367
        };
    }
    LocationService.prototype.getCurrentLocation = function (callback) {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.location.lat = position.coords.latitude;
            _this.location.long = position.coords.longitude;
            return callback(_this.location);
        });
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/action-button/action-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-container\">\n  <p>{{ctaText}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/action-button/action-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\n.button-container {\n  background-color: #b5e2e5;\n  height: 50px;\n  padding: 2px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  cursor: pointer; }\n\n.button-container p {\n    font-size: 12px;\n    background: #fff0;\n    margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/action-button/action-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionButtonComponent = /** @class */ (function () {
    function ActionButtonComponent() {
    }
    ActionButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ActionButtonComponent.prototype, "ctaText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ActionButtonComponent.prototype, "size", void 0);
    ActionButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-action-button',
            template: __webpack_require__("../../../../../src/app/shared/action-button/action-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/action-button/action-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionButtonComponent);
    return ActionButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"header\">\n  <mat-drawer #drawer class=\"main-drawer\">\n    <div class=\"list-item action-button\" *ngIf=\"!currentUser\">\n      <div class=\"button-container\">\n          <app-action-button ctaText=\"Login\" size=\"'lg'\" (click)=\"goToSignin()\"></app-action-button>          \n      </div>\n      <div class=\"button-container\">\n          <app-action-button ctaText=\"SignUp\" size=\"'lg'\" (click)=\"goToSignin()\"></app-action-button>          \n      </div>\n    </div>\n    <div *ngIf=\"currentUser\">\n      <div class=\"right-nav menu\" (click)=\"drawer.toggle()\">\n        <img *ngIf=\"!currentUser\" width=\"35px\" height=\"35px\" src=\"../../../assets/img/profileicon.png\" alt=\"\">\n        <img *ngIf=\"currentUser && currentUser.profileImage\" width=\"35px\" height=\"35px\" src=\"{{currentUser.profileImage}}\" alt=\"User Image\"> \n        <p>Welcome</p>    \n      </div>\n      <button mat-menu-item (click)=\"goToMap()\">Map</button>              \n      <mat-divider></mat-divider>\n      <div class=\"list-item\" (click)=\"goToProfile()\">Profile</div>\n      <mat-divider></mat-divider>\n      <!-- <div class=\"list-item\">Your Products</div>  \n      <mat-divider></mat-divider>\n      <div class=\"list-item\">Your Orders</div>     \n      <mat-divider></mat-divider>\n      <div class=\"list-item\">Favoritess</div>   -->\n    </div>\n    <mat-divider></mat-divider>\n    <div (click)=\"goToHome()\" class=\"list-item\">\n      Home\n    </div>\n    <mat-divider></mat-divider>\n    <div (click)=\"goToMap()\" class=\"list-item\">\n        Map View\n    </div>\n    <mat-divider></mat-divider>\n    <!-- <div class=\"list-item\">\n      Set up your business\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"list-item\">\n      How it works\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"list-item\">\n      Search\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"list-item\">\n      About\n    </div> -->\n    <mat-divider></mat-divider>\n    <div class=\"list-item\" (click)=\"logOut()\" *ngIf=\"currentUser\">\n      Logout\n    </div>\n  </mat-drawer>\n  <mat-drawer-content>\n      <mat-toolbar *ngIf=\"!currentUser\">\n        <div class=\"nav-container main\">\n            <div class=\"right-nav logo\">\n              <a routerLink=\"/\" routerLinkActive=\"active\">\n                <span>My Favorite</span>\n                <span>App</span>\n              </a>\n            </div>\n            <div class=\"left-nav\">\n              <span (click)=\"goToSignin()\">Sign In</span>\n              <span (click)=\"goToMap()\">Map View</span>\n              <span (click)=\"goToHome()\">Home</span>\n            </div>\n        </div>\n        <div class=\"nav-container mobile\">\n          <mat-icon (click)=\"drawer.toggle()\">menu</mat-icon>\n          <div class=\"logo\">\n              <a (click)=\"goToHome()\"routerLinkActive=\"active\">\n                <span>My Favorite</span>\n                <span>App</span>\n              </a>\n            </div>\n        </div>\n      </mat-toolbar>\n\n      <mat-toolbar *ngIf=\"currentUser\">\n        <div class=\"nav-container main authorized\">\n            <div class=\"right-nav logo\">\n              <a (click)=\"goToHome()\" routerLinkActive=\"active\">\n                <span>My Favorite</span>\n                <span>App</span>\n              </a>\n            </div>\n            <div [matMenuTriggerFor]=\"settingsMenu\" class=\"left-nav\">\n                {{currentUser.userName}}     \n              <img *ngIf=\"!currentUser\" width=\"30px\" height=\"30px\" src=\"../../../assets/img/profileicon.png\" alt=\"\">\n              <img *ngIf=\"currentUser && currentUser.profileImage\" width=\"30px\" height=\"30px\" src=\"{{currentUser.profileImage}}\" alt=\"User Image\"> \n            </div>\n          </div>\n          <div class=\"settings-menu\">\n            <mat-menu #settingsMenu=\"matMenu\"> \n              <button></button>\n              <button mat-menu-item (click)=\"goToMap()\">Map</button>              \n              <button mat-menu-item (click)=\"goToProfile(drawer)\">Profile</button>\n                <!-- <button mat-menu-item>Your Products</button>\n                <button mat-menu-item>Your Orders</button>\n                <button mat-menu-item>Favorites</button>\n                <button mat-menu-item>Set Up Your Business</button>\n                <button mat-menu-item>How It Works</button>\n                <button mat-menu-item>Search</button>\n                <button mat-menu-item>About</button> -->\n              <button mat-menu-item (click)=\"logOut()\">Logout</button>\n            </mat-menu> \n          </div>\n        <div class=\"nav-container mobile\">\n          <mat-icon (click)=\"drawer.toggle()\">menu</mat-icon>            \n          <div class=\"logo\">\n              <a routerLink=\"/\" routerLinkActive=\"active\">\n                <span>My Favorite</span>\n                <span>App</span>\n              </a>\n            </div>\n        </div>\n      </mat-toolbar>\n  </mat-drawer-content>\n\n</mat-drawer-container>\n<mat-divider></mat-divider>"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\n.header {\n  position: fixed;\n  top: 0; }\n\nmat-drawer-content.mat-drawer-content {\n  position: fixed;\n  width: 100%;\n  height: 54px;\n  z-index: 2147483647; }\n\n.settings-menu mat-menu {\n  position: relative;\n  top: 57px; }\n\nmat-toolbar {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #fff;\n  -webkit-box-shadow: 2px -13px 35px;\n          box-shadow: 2px -13px 35px;\n  height: 54px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nmat-toolbar a {\n    color: #b5e2e5;\n    margin: 0 20px; }\n\n@media only screen and (min-width: 650px) {\n    mat-toolbar .nav-container.mobile {\n      display: none; }\n    mat-toolbar .nav-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      text-align: center;\n      max-width: 1280px;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n      mat-toolbar .nav-container .left-nav {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 300px;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        cursor: pointer; }\n      mat-toolbar .nav-container .logo {\n        color: #b5e2e5;\n        font-size: 30px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n      mat-toolbar .nav-container .example-form {\n        min-width: 150px;\n        max-width: 500px;\n        width: 100%; }\n      mat-toolbar .nav-container .example-full-width {\n        width: 100%; }\n      mat-toolbar .nav-container .mat-input-element {\n        font-size: 16px; }\n      mat-toolbar .nav-container .left-nav {\n        font-size: 14px;\n        margin: 0 15px; }\n    mat-toolbar .nav-container.authorized .left-nav {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; } }\n\n@media only screen and (max-width: 649px) {\n    mat-toolbar .nav-container.main {\n      display: none; }\n    mat-toolbar .nav-container {\n      text-align: left;\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    mat-toolbar .right-nav.menu {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      mat-toolbar .right-nav.menu p {\n        font-size: 10px;\n        margin: 2px 0 0 0;\n        line-height: .8; }\n    mat-toolbar mat-icon {\n      width: 10%; }\n    mat-toolbar .logo {\n      width: 90%;\n      text-align: center;\n      margin-right: 10%; }\n    mat-toolbar .example-container {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0; }\n    mat-toolbar .example-events {\n      width: 300px;\n      height: 200px;\n      overflow: auto;\n      border: 1px solid #555; } }\n\n.mat-drawer-container {\n  position: inherit;\n  width: 100%; }\n\n.main-drawer {\n  width: 300px;\n  padding: 20px;\n  margin-top: 50px;\n  background-color: #FFFFFF; }\n\n.main-drawer .list-item {\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.main-drawer .action-button {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-bottom: 20px; }\n\n.main-drawer .action-button .button-container {\n      width: 117px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, dialog, router, dataService) {
        this.authService = authService;
        this.dialog = dialog;
        this.router = router;
        this.dataService = dataService;
        this.reload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.events = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.authState.subscribe(function (auth) {
            _this.authorizedUser = auth;
            console.log('this is the login subscription', auth);
            // if(this.authorizedUser && auth.providerData) this.setCurrentUser();
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    };
    HeaderComponent.prototype.goToSignin = function () {
        this.router.navigate(['signin', { params: this.router.url }]);
        // const loginRef = this.dialog.open(ModalWindowComponent, {
        //   width:'400px',
        //   data: {selectedTab: tabType, heading: 'hey girl this worked', subheading: 'i know girl lets work '},
        // })
        // loginRef.afterClosed().subscribe(result => {
        //   this.authorizedUser = result;      
        //   this.currentUser = result.currentUser;
        //   console.log('this is the url', this.router.url)
        //   this.reload.emit();
        // });
    };
    // signIn() {
    //   try { 
    //     let login = this.authService.doFacebookLogin()
    //       login.then((res) => {
    //         console.log('is this the login resolve', res)
    //         this.setCurrentUser();
    //       },(err) => {
    //         console.log('there was an error on signin')
    //       })
    //   } catch (NullValueException){
    //   }
    // }
    HeaderComponent.prototype.setCurrentUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('this is the currentUser', this.currentUser);
    };
    HeaderComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.authorizedUser = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.router.navigate(['home']);
    };
    HeaderComponent.prototype.goToProfile = function () {
        this.router.navigate(['profile/' + this.currentUser.uid]);
    };
    HeaderComponent.prototype.goToHome = function () {
        this.router.navigate(['']);
        this.ngOnInit();
    };
    HeaderComponent.prototype.goToMap = function () {
        this.router.navigate(['home']);
        this.ngOnInit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "reload", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modal-window/modal-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-tab-group [selectedIndex]=\"selectedTab\">\n        <mat-tab label=\"Login\">\n            <div class=\"button-container\" (click)=\"signIn()\">\n                <div class=\"logo\"><img height=\"50px\" src=\"../../../../assets/img/facebook.jpg\" alt=\"\"></div>\n                <div class=\"button facebook-button\"><span>Login up with Facebook</span></div>\n            </div>\n            <div class=\"divider-container\">\n              <span>OR</span>\n            </div>\n            <div>\n              <input type=\"text\" placeholder=\"username\">\n              <input type=\"text\" placeholder=\"password\">\n            </div>\n            <div class=\"cta-button button\" (click)=\"signIn()\">\n              <span>LOGIN</span>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Sign Up\">\n            <div class=\"button-container\" (click)=\"signIn()\">\n                <div class=\"logo\"><img height=\"50px\" src=\"../../../../assets/img/facebook.jpg\" alt=\"\"></div>\n                <div class=\"button facebook-button\"><span>Sign up with Facebook</span></div>\n            </div>\n            <div class=\"button-container\" (click)=\"signIn()\">\n              <mat-icon class=\"logo\">mail</mat-icon>\n              <div class=\"button\">Sign up with email</div>\n            </div>\n            <p class=\"small-text\">By signing up I agree to the <a (click)=\"goToTerms()\">Terms of Service</a> and <a (click)=\"goToTerms()\">Privacy Policy</a></p>\n          </mat-tab>\n      </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modal-window/modal-window.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\n.button-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 30px 0;\n  cursor: pointer; }\n\n.button {\n  color: white;\n  background-color: #b5e2e5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 300px; }\n\nmat-icon.logo {\n  background-color: #b5e2e5;\n  color: #fff; }\n\nmat-icon {\n  width: 50px;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.small-text {\n  font-size: 9px;\n  text-align: center; }\n\n.small-text a {\n    color: #4e81af;\n    text-decoration: underline;\n    cursor: pointer; }\n\n.button-container .material-icons {\n  font-size: 34px;\n  width: 76px; }\n\n.facebook-button.button {\n  background-color: #3c5a99; }\n\n.divider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 15px; }\n\ninput {\n  background: #fff;\n  height: 50px;\n  min-width: 150px;\n  width: 50vw;\n  padding-left: 10px;\n  border: 1px solid #eaeaea; }\n\n.cta-button {\n  position: relative;\n  width: 350px;\n  margin-top: 50px; }\n\n@media only screen and (max-width: 649px) {\n  input {\n    width: 63vw; }\n  .cta-button {\n    width: 250px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modal-window/modal-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_dialog_data__ = __webpack_require__("../../../../../src/app/class/dialog-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_user_profile__ = __webpack_require__("../../../../../src/app/class/user-profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ModalWindowComponent = /** @class */ (function () {
    function ModalWindowComponent(dialogRef, router, authService, db, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.authService = authService;
        this.db = db;
        this.data = data;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__class_user_profile__["a" /* UserProfile */]();
        // this.userList = this.db.list('/authorizedUser');
        // this.userList.valueChanges().subscribe((users) => {
        //   console.log('this the registered users', users);
        // })
    }
    ModalWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedTab = this.data.selectedTab;
        this.authService.authState.subscribe(function (auth) {
            _this.authorizedUser = auth ? true : false;
            // if(this.authorizedUser && auth.providerData) this.setCurrentUser();
        });
    };
    ModalWindowComponent.prototype.externalClick = function () {
        this.dialogRef.close();
    };
    ModalWindowComponent.prototype.goToSignin = function () {
        this.dialogRef.close();
        this.router.navigate(['register']);
    };
    ModalWindowComponent.prototype.goToTerms = function () {
        this.dialogRef.close();
        this.router.navigate(['privacy-terms']);
    };
    ModalWindowComponent.prototype.login = function () {
        this.dialogRef.close({ auth: true });
        this.router.navigate(['profile']);
    };
    ModalWindowComponent.prototype.signIn = function () {
        var _this = this;
        try {
            var login = this.authService.doFacebookLogin()
                .then(function (res) {
                console.log('is this the login resolve', res);
                _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                _this.dialogRef.close({ auth: true, currentUser: _this.currentUser });
            }, function (err) {
                console.log('there was an error on signin');
            });
        }
        catch (NullValueException) {
            console.log('sorry we couldnt log you in');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalWindowComponent.prototype, "color", void 0);
    ModalWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal-window',
            template: __webpack_require__("../../../../../src/app/shared/modal-window/modal-window.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modal-window/modal-window.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__class_dialog_data__["a" /* DialogData */]])
    ], ModalWindowComponent);
    return ModalWindowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/search-modal/search-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Sorry, we don't have any product\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/search-modal/search-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-container#mat-dialog-0 {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/search-modal/search-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_dialog_data__ = __webpack_require__("../../../../../src/app/class/dialog-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SearchModalComponent = /** @class */ (function () {
    function SearchModalComponent(dialogRef, router, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
    }
    SearchModalComponent.prototype.ngOnInit = function () {
    };
    SearchModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-modal',
            template: __webpack_require__("../../../../../src/app/shared/search-modal/search-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/search-modal/search-modal.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__class_dialog_data__["a" /* DialogData */]])
    ], SearchModalComponent);
    return SearchModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"page-wrapper\">\n  <div class=\"main-container\">\n    <mat-tab-group>\n        <mat-tab label=\"Login\">\n            <div class=\"button-container\" (click)=\"signIn()\">\n                <div class=\"logo\"><img height=\"50px\" src=\"../../../../assets/img/facebook.jpg\" alt=\"\"></div>\n                <div class=\"button facebook-button\"><span>Login up with Facebook</span></div>\n            </div>\n            <div class=\"divider-container\">\n              <span>OR</span>\n            </div>\n            <div>\n              <input type=\"text\" placeholder=\"username\">\n              <input type=\"text\" placeholder=\"password\">\n            </div>\n            <div class=\"cta-button button\" (click)=\"signIn()\">\n              <span>LOGIN</span>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Sign Up\">\n            <div class=\"button-container\" (click)=\"signIn()\">\n                <div class=\"logo\"><img height=\"50px\" src=\"../../../../assets/img/facebook.jpg\" alt=\"\"></div>\n                <div class=\"button facebook-button\"><span>Sign up with Facebook</span></div>\n            </div>\n            <div class=\"button-container\" (click)=\"signIn()\">\n              <mat-icon class=\"logo\">mail</mat-icon>\n              <div class=\"button\">Sign up with email</div>\n            </div>\n            <p class=\"small-text\">By signing up I agree to the <a (click)=\"goToTerms()\">Terms of Service</a> and <a (click)=\"goToTerms()\">Privacy Policy</a></p>\n          </mat-tab>\n      </mat-tab-group>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  max-width: 1380px; }\n\n.page-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 90vh;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0px 15px; }\n\n.page-wrapper .main-container {\n    max-width: 600px;\n    height: 405px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.mat-tab-content {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center; }\n\n.mat-tab-group {\n  width: 600px; }\n\nmat-tab {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.button-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 30px 0;\n  cursor: pointer; }\n\n.button {\n  color: white;\n  background-color: #b5e2e5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 300px; }\n\nmat-icon.logo {\n  background-color: #b5e2e5;\n  color: #fff; }\n\nmat-icon {\n  width: 50px;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.small-text {\n  font-size: 9px;\n  text-align: center; }\n\n.small-text a {\n    color: #4e81af;\n    text-decoration: underline;\n    cursor: pointer; }\n\n.button-container .material-icons {\n  font-size: 34px;\n  width: 76px; }\n\n.facebook-button.button {\n  background-color: #3c5a99; }\n\n.divider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 15px; }\n\ninput {\n  background: #fff;\n  height: 50px;\n  min-width: 150px;\n  width: 50vw;\n  padding-left: 10px;\n  border: 1px solid #eaeaea; }\n\n.cta-button {\n  position: relative;\n  width: 350px;\n  margin-top: 50px; }\n\n@media only screen and (max-width: 649px) {\n  .page-wrapper {\n    max-width: 350px; }\n    .page-wrapper .main-container {\n      max-width: 350px; }\n  .cta-button {\n    width: 250px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(
        // public dialogRef: MatDialogRef<ModalWindowComponent>,
        router, route, authService, db) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.db = db;
        // this.userList = this.db.list('/authorizedUser');
        // this.userList.valueChanges().subscribe((users) => {
        //   console.log('this the registered users', users);
        // })
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params) {
                _this.previousPage = params;
            }
        });
    };
    // externalClick(): void {
    //   this.dialogRef.close();
    // }
    SigninComponent.prototype.goToSignin = function () {
        // this.dialogRef.close();
        this.router.navigate(['register']);
    };
    SigninComponent.prototype.goToTerms = function () {
        // this.dialogRef.close();
        this.router.navigate(['privacy-terms']);
    };
    SigninComponent.prototype.login = function () {
        // this.dialogRef.close({auth: true});
        this.router.navigate(['profile']);
    };
    SigninComponent.prototype.signIn = function () {
        var _this = this;
        try {
            var login = this.authService.doFacebookLogin()
                .then(function (res) {
                console.log('is this the login resolve', res);
                _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                console.log('is there a previous page', _this.previousPage);
                if (_this.previousPage) {
                    _this.router.navigate([_this.previousPage.params]);
                }
                else {
                    _this.router.navigate(['profile']);
                }
                // this.dialogRef.close({auth: true, currentUser: this.currentUser});
            }, function (err) {
                console.log('there was an error on signin');
            });
        }
        catch (NullValueException) {
            console.log('sorry we couldnt log you in');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SigninComponent.prototype, "color", void 0);
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/supplyanddemand/supplyanddemand.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  supplyanddemand works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/supplyanddemand/supplyanddemand.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/supplyanddemand/supplyanddemand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyanddemandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupplyanddemandComponent = /** @class */ (function () {
    function SupplyanddemandComponent() {
    }
    SupplyanddemandComponent.prototype.ngOnInit = function () {
    };
    SupplyanddemandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-supplyanddemand',
            template: __webpack_require__("../../../../../src/app/supplyanddemand/supplyanddemand.component.html"),
            styles: [__webpack_require__("../../../../../src/app/supplyanddemand/supplyanddemand.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SupplyanddemandComponent);
    return SupplyanddemandComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/beautysupply.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "beautysupply.9fec700d2eb2f54f61f6.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/dreads.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dreads.1bd5e6940ed8b02142a3.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/homebg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "homebg.0df27f1cdad6e926df1d.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/mayvenn.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mayvenn.18d502c1045c8530382a.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBODVrkb6ShkEjOAQTFmuI5n1SnGo4u1Qs",
        authDomain: "productmap-42236.firebaseapp.com",
        databaseURL: "https://productmap-42236.firebaseio.com",
        projectId: "productmap-42236",
        storageBucket: "productmap-42236.appspot.com",
        messagingSenderId: "17934654166"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map