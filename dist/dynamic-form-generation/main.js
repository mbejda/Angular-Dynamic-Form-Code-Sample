(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock.data.js */ "./src/app/mock.data.js");
/* harmony import */ var _mock_data_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mock_data_js__WEBPACK_IMPORTED_MODULE_4__);

/* tslint:disable */




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getQuestions = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_data_js__WEBPACK_IMPORTED_MODULE_4___default.a.questions);
    };
    ApiService.prototype.getNaicsCodes = function (query) {
        console.log(_mock_data_js__WEBPACK_IMPORTED_MODULE_4___default.a.search);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_data_js__WEBPACK_IMPORTED_MODULE_4___default.a.search[0]);
    };
    ApiService.prototype.saveForm = function (formObject) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
            success: true
        });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());

/* tslint:enable */


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");




var routes = [
    { path: '', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-brand {\n    background-color: #F08E1D !important;\n    box-shadow: 0 2px 10px -2px rgb(0, 0, 0);\n}\n.brand {\n    color: white;\n    text-decoration: none;\n}\n.brand a {\n    color: white;\n    text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJyYW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA4RTFEICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCAtMnB4IHJnYigwLCAwLCAwKTtcbn1cbi5icmFuZCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5icmFuZCBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"brand\">\n    <mat-toolbar-row>\n        <span class=\"brand\"><a href=\"/\">Dynamic Form Code Sample</a></span>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [
                _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var mat = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioButton"]],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_LABEL_GLOBAL_OPTIONS"], useValue: { float: 'never' } },
            ],
            imports: mat.slice(),
            exports: mat.slice(),
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/mock.data.js":
/*!******************************!*\
  !*** ./src/app/mock.data.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.search = [
    [
        {
            "code": "111110",
            "description": "Soybean Farming"
        },
        {
            "code": "111120",
            "description": "Oilseed (except Soybean) Farming"
        },
        {
            "code": "111130",
            "description": "Dry Pea and Bean Farming"
        },
        {
            "code": "111140",
            "description": "Wheat Farming"
        },
        {
            "code": "111150",
            "description": "Corn Farming"
        },
        {
            "code": "111160",
            "description": "Rice Farming"
        },
        {
            "code": "111191",
            "description": "Oilseed and Grain Combination Farming"
        },
        {
            "code": "111199",
            "description": "All Other Grain Farming"
        },
        {
            "code": "111211",
            "description": "Potato Farming"
        },
        {
            "code": "111219",
            "description": "Other Vegetable (except Potato) and Melon Farming"
        },
        {
            "code": "111310",
            "description": "Orange Groves"
        },
        {
            "code": "111320",
            "description": "Citrus (except Orange) Groves"
        },
        {
            "code": "111331",
            "description": "Apple Orchards"
        },
        {
            "code": "111332",
            "description": "Grape Vineyards"
        },
        {
            "code": "111333",
            "description": "Strawberry Farming"
        },
        {
            "code": "111334",
            "description": "Berry (except Strawberry) Farming"
        },
        {
            "code": "111335",
            "description": "Tree Nut Farming"
        },
        {
            "code": "111336",
            "description": "Fruit and Tree Nut Combination Farming"
        },
        {
            "code": "111339",
            "description": "Other Noncitrus Fruit Farming"
        },
        {
            "code": "111411",
            "description": "Mushroom Production"
        },
        {
            "code": "111419",
            "description": "Other Food Crops Grown Under Cover"
        },
        {
            "code": "111421",
            "description": "Nursery and Tree Production"
        },
        {
            "code": "111422",
            "description": "Floriculture Production"
        },
        {
            "code": "111910",
            "description": "Tobacco Farming"
        },
        {
            "code": "111920",
            "description": "Cotton Farming"
        },
        {
            "code": "111930",
            "description": "Sugarcane Farming"
        },
        {
            "code": "111940",
            "description": "Hay Farming"
        },
        {
            "code": "111991",
            "description": "Sugar Beet Farming"
        },
        {
            "code": "111992",
            "description": "Peanut Farming"
        },
        {
            "code": "111998",
            "description": "All Other Miscellaneous Crop Farming"
        },
        {
            "code": "112111",
            "description": "Beef Cattle Ranching and Farming"
        },
        {
            "code": "112112",
            "description": "Cattle Feedlots"
        },
        {
            "code": "112120",
            "description": "Dairy Cattle and Milk Production"
        },
        {
            "code": "112130",
            "description": "Dual-Purpose Cattle Ranching and Farming"
        },
        {
            "code": "112210",
            "description": "Hog and Pig Farming"
        },
        {
            "code": "112310",
            "description": "Chicken Egg Production"
        },
        {
            "code": "112320",
            "description": "Broilers and Other Meat Type Chicken Production"
        },
        {
            "code": "112330",
            "description": "Turkey Production"
        },
        {
            "code": "112340",
            "description": "Poultry Hatcheries"
        },
        {
            "code": "112390",
            "description": "Other Poultry Production"
        },
        {
            "code": "112410",
            "description": "Sheep Farming"
        },
        {
            "code": "112420",
            "description": "Goat Farming"
        },
        {
            "code": "112511",
            "description": "Finfish Farming and Fish Hatcheries"
        },
        {
            "code": "112512",
            "description": "Shellfish Farming"
        },
        {
            "code": "112519",
            "description": "Other Aquaculture"
        },
        {
            "code": "112910",
            "description": "Apiculture"
        },
        {
            "code": "112920",
            "description": "Horses and Other Equine Production"
        },
        {
            "code": "112930",
            "description": "Fur-Bearing Animal and Rabbit Production"
        },
        {
            "code": "112990",
            "description": "All Other Animal Production"
        },
        {
            "code": "113110",
            "description": "Timber Tract Operations"
        }
    ]
];
module.exports.questions = [
    {
        "id": 1,
        "text": "What is your first name?",
        "type": "input",
        "required": true,
        "min": 2
    },
    {
        "id": 2,
        "text": "What is your last name?",
        "type": "input",
        "required": true,
        "min": 2
    },
    {
        "id": 3,
        "text": "What is the type of business?",
        "type": "select",
        "required": true,
        "multiple": false,
        "options": [
            {
                "id": 1,
                "text": "Clothing Store"
            },
            {
                "id": 2,
                "text": "Restaurant"
            },
            {
                "id": 3,
                "text": "Food Truck"
            },
            {
                "id": 4,
                "text": "Record Label"
            },
            {
                "id": 5,
                "text": "Day Care"
            },
            {
                "id": 6,
                "text": "Coffee Shop"
            },
            {
                "id": 7,
                "text": "Farm"
            },
            {
                "id": 8,
                "text": "Catering Business"
            },
            {
                "id": 9,
                "text": "Landscaping Business"
            },
            {
                "id": 10,
                "text": "Trucking Company"
            },
            {
                "id": 11,
                "text": "Bakery"
            },
            {
                "id": 12,
                "text": "Brewery"
            },
            {
                "id": 13,
                "text": "Construction Company"
            },
            {
                "id": 14,
                "text": "Bar"
            },
            {
                "id": 15,
                "text": "Property Management"
            },
            {
                "id": 16,
                "text": "T-Shirt Company"
            },
            {
                "id": 17,
                "text": "Group Home"
            },
            {
                "id": 18,
                "text": "Real Estate Agency"
            },
            {
                "id": 19,
                "text": "Dog Walking"
            },
            {
                "id": 20,
                "text": "Gym"
            }
        ]
    },
    {
        "id": 4,
        "text": "What is the industry classification code (NAICS)?",
        "type": "input",
        "required": true,
        "min": 6,
        "max": 6
    }
];


/***/ }),

/***/ "./src/app/pages/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-header,\nmat-card-title,\n.mat-card-header-text {\n    margin:0px 0px;\n    padding:0px;\n}\nmat-card.mat-card {\n    margin-top: 2em;\n    border: 1px solid black !important;\n    box-shadow: 0 3px 3px 3px rgb(0, 0, 0, .5) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxxREFBcUQ7QUFDekQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtaGVhZGVyLFxubWF0LWNhcmQtdGl0bGUsXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgIG1hcmdpbjowcHggMHB4O1xuICAgIHBhZGRpbmc6MHB4O1xufVxubWF0LWNhcmQubWF0LWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAzcHggcmdiKDAsIDAsIDAsIC41KSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"top center\">\n  <mat-card >\n    <app-quote-form>\n    </app-quote-form>\n</mat-card>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/pages/index/index.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/pages/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/shared/controls/autocomplete/autocomplete.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/controls/autocomplete/autocomplete.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label {\n    font-weight: bold;\n}\n\n\n/* To display a border for the input */\n\n\n.mat-input-flex.mat-form-field-flex{\n    border: 1px solid black;\n}\n\n\n/* To remove the default underline */\n\n\n.mat-input-underline.mat-form-field-underline {\n    background: transparent;\n}\n\n\n/* To remove the underline ripple */\n\n\n.mat-input-ripple.mat-form-field-ripple{\n    background-color: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRyb2xzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0Esc0NBQXNDOzs7QUFDdEM7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBLG9DQUFvQzs7O0FBQ3BDO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQSxtQ0FBbUM7OztBQUNuQztJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250cm9scy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi8qIFRvIGRpc3BsYXkgYSBib3JkZXIgZm9yIHRoZSBpbnB1dCAqL1xuLm1hdC1pbnB1dC1mbGV4Lm1hdC1mb3JtLWZpZWxkLWZsZXh7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi8qIFRvIHJlbW92ZSB0aGUgZGVmYXVsdCB1bmRlcmxpbmUgKi9cbi5tYXQtaW5wdXQtdW5kZXJsaW5lLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFRvIHJlbW92ZSB0aGUgdW5kZXJsaW5lIHJpcHBsZSAqL1xuLm1hdC1pbnB1dC1yaXBwbGUubWF0LWZvcm0tZmllbGQtcmlwcGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/controls/autocomplete/autocomplete.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/controls/autocomplete/autocomplete.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n        fxLayout=\"row\"\n        fxLayoutAlign=\"space-between center\"\n>\n\n\n  <mat-label fxLayoutAlign=\"end\">{{group.value.text}} <span class=\"danger\" *ngIf=\"group.value.required === true\">*</span></mat-label>\n  <mat-form-field>\n    <input matInput\n           placeholder=\"Start typing...\"\n           (blur)=\"onBlur()\"\n           [(ngModel)]=\"value\"\n           [disabled]=\"disabled\"\n           [matAutocomplete]=\"auto\"\n    >\n    <ng-content></ng-content>\n\n\n    <mat-autocomplete #auto=\"matAutocomplete\">\n\n        <mat-option *ngFor=\"let option of $options | async\" [value]=\"option.code\">\n          <small>\n          <b >{{option.description}}</b>\n          ({{option.code}})\n          </small>\n\n        </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/controls/autocomplete/autocomplete.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/controls/autocomplete/autocomplete.component.ts ***!
  \************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(apiService) {
        this.apiService = apiService;
        this.disabled = false;
        this.innerValue = undefined;
        this.onTouchedCallback = rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"];
        this.onChangeCallback = rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"];
    }
    AutocompleteComponent_1 = AutocompleteComponent;
    Object.defineProperty(AutocompleteComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    AutocompleteComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== this.innerValue) {
            this.innerValue = value;
        }
        this.onChangeCallback(this.innerValue);
    };
    AutocompleteComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    AutocompleteComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    AutocompleteComponent.prototype.displayFn = function (object) {
        return object ? object.description : undefined;
    };
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$options = this.group.controls._input.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (query) { return _this.apiService.getNaicsCodes(query); }));
    };
    AutocompleteComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var AutocompleteComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutocompleteComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], AutocompleteComponent.prototype, "group", void 0);
    AutocompleteComponent = AutocompleteComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'custom-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/shared/controls/autocomplete/autocomplete.component.html"),
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AutocompleteComponent_1; }),
                    multi: true
                }],
            styles: [__webpack_require__(/*! ./autocomplete.component.css */ "./src/app/shared/controls/autocomplete/autocomplete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/shared/controls/input/input.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/controls/input/input.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label {\n    font-weight: bold;\n}\n.mat-input-flex.mat-form-field-flex{\n    border: 1px solid black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRyb2xzL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250cm9scy9pbnB1dC9pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYXQtaW5wdXQtZmxleC5tYXQtZm9ybS1maWVsZC1mbGV4e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/controls/input/input.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/controls/input/input.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n        fxLayout=\"row\"\n        fxLayoutAlign=\"space-between center\"\n>\n\n\n  <mat-label fxLayoutAlign=\"end\">{{group.value.text}} <span class=\"danger\" *ngIf=\"group.value.required === true\">*</span></mat-label>\n  <mat-form-field>\n    <input matInput\n           (blur)=\"onBlur()\"\n           [(ngModel)]=\"value\"\n           [disabled]=\"disabled\"\n    >\n    <ng-content></ng-content>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/controls/input/input.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/controls/input/input.component.ts ***!
  \**********************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.disabled = false;
        this.innerValue = undefined;
        this.onTouchedCallback = rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"];
        this.onChangeCallback = rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"];
    }
    InputComponent_1 = InputComponent;
    Object.defineProperty(InputComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    InputComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== this.innerValue) {
            this.innerValue = value;
        }
        this.onChangeCallback(this.innerValue);
    };
    InputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    InputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    InputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var InputComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], InputComponent.prototype, "group", void 0);
    InputComponent = InputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'custom-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/shared/controls/input/input.component.html"),
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputComponent_1; }),
                    multi: true
                }],
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/shared/controls/input/input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/shared/controls/select/select.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/controls/select/select.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label {\n    font-weight: bold;\n}\n.mat-input-flex.mat-form-field-flex{\n    border: 1px solid black;\n}\n::ng-deep .form-select {\n    margin-top: 2em !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRyb2xzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29udHJvbHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYXQtaW5wdXQtZmxleC5tYXQtZm9ybS1maWVsZC1mbGV4e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuOjpuZy1kZWVwIC5mb3JtLXNlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogMmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/controls/select/select.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/controls/select/select.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n        fxLayout=\"row\"\n        fxLayoutAlign=\"space-between center\"\n>\n    <mat-label\n            fxLayoutAlign=\"end\"\n    >{{group.value.text}} <span class=\"danger\" *ngIf=\"group.value.required === true\">*</span></mat-label>\n\n    <mat-form-field>\n\n        <!--- Allow users to have multiple selections --->\n        <mat-select\n                [(ngModel)]=\"value\"\n                [compareWith]=\"compareWith\"\n                [disabled]=\"disabled\"\n                ngDefaultControl\n                disableOptionCentering\n                panelClass=\"form-select\"\n                *ngIf=\"group.value.multiple === true\" multiple\n        >\n            <mat-option\n                    *ngFor=\"let option of group.value.options\"\n                    [value]=\"option\">\n                {{option.text}}\n            </mat-option>\n        </mat-select>\n        <!--- Allow users to have single selection --->\n        <mat-select\n                [(ngModel)]=\"value\"\n                [compareWith]=\"compareWith\"\n                [disabled]=\"disabled\"\n                ngDefaultControl\n                disableOptionCentering\n                panelClass=\"form-select\"\n                *ngIf=\"!group.value.multiple\"\n        >\n            <mat-option\n                    *ngFor=\"let option of group.value.options\"\n                    [value]=\"option.id\">\n                {{option.text}}\n            </mat-option>\n        </mat-select>\n        <ng-content></ng-content>\n    </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/controls/select/select.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/controls/select/select.component.ts ***!
  \************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.disabled = false;
        this.innerValue = undefined;
        this.onTouchedCallback = rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"];
        this.onChangeCallback = rxjs__WEBPACK_IMPORTED_MODULE_3__["noop"];
    }
    SelectComponent_1 = SelectComponent;
    Object.defineProperty(SelectComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== this.innerValue) {
            this.innerValue = value;
        }
        this.onChangeCallback(this.innerValue);
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SelectComponent.prototype.compareWith = function (o1, o2) {
        return o1.id === o2.id;
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.group.controls._option_id.patchValue(this.group.value.options[0].id);
    };
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var SelectComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], SelectComponent.prototype, "group", void 0);
    SelectComponent = SelectComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'custom-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/shared/controls/select/select.component.html"),
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectComponent_1; }),
                    multi: true
                }],
            styles: [__webpack_require__(/*! ./select.component.css */ "./src/app/shared/controls/select/select.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/shared/forms/quote/quote.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/forms/quote/quote.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-error {\n    position: absolute;\n    top:0px;\n    font-size: .5em;\n}\n.mat-card-title {\n    font-size: 2.5em;\n}\n.mat-card-subtitle {\n    font-weight: 600;\n    margin-top:1em;\n}\n.footer {\n    margin-top: 2em;\n}\nbutton.mat-button {\n    border-radius: 2em;\n}\nbutton.mat-button.mat-primary:not(:disabled) {\n    border: 1px solid #344f98;\n    background-color: #9AD3F3;\n    color:white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm1zL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9ybXMvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXJyb3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MHB4O1xuICAgIGZvbnQtc2l6ZTogLjVlbTtcbn1cbi5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbn1cbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOjFlbTtcbn1cbi5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbn1cbmJ1dHRvbi5tYXQtYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG59XG5idXR0b24ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeTpub3QoOmRpc2FibGVkKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0NGY5ODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUFEM0YzO1xuICAgIGNvbG9yOndoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/forms/quote/quote.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/forms/quote/quote.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content >\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n\n\n        <mat-card-title>\n            User Information\n        </mat-card-title>\n        <mat-card-subtitle>\n            This is going to be amazing.\n        </mat-card-subtitle>\n\n        <div formArrayName=\"fields\"\n             *ngFor=\"let field of fields.controls;\n         let i = index;\"\n        >\n            <div [formGroupName]=\"i\">\n\n                <custom-input *ngIf=\"field.value.type === 'input'\"\n                              [group]=\"field\"\n                              formControlName=\"_input\">\n\n                    <mat-error *ngIf=\"!field.get('_input').pristine &&  field.get('_input').hasError('required')\">\n                        Required\n                    </mat-error>\n                    <mat-error *ngIf=\"!field.get('_input').pristine && field.get('_input').hasError('minlength')\">\n                        Min {{field.get('min').value }}\n                    </mat-error>\n                    <mat-error *ngIf=\"!field.get('_input').pristine &&  field.get('_input').hasError('maxlength')\">\n                        Max {{field.get('max').value }}\n                    </mat-error>\n                </custom-input>\n\n\n                <custom-select *ngIf=\"field.value.type === 'select'\"\n                        [group]=\"field\" formControlName=\"_option_id\">\n                    <mat-error *ngIf=\"!field.get('_option_id').pristine &&  field.get('_option_id').hasError('required')\">\n                        Required\n                    </mat-error>\n                    <mat-error *ngIf=\"!field.get('_option_id').pristine &&  field.get('_option_id').hasError('minlength')\">\n                        Min {{field.get('min').value }}\n                    </mat-error>\n                    <mat-error *ngIf=\"!field.get('_option_id').pristine &&  field.get('_option_id').hasError('maxlength')\">\n                        Max {{field.get('max').value }}\n                    </mat-error>\n                </custom-select>\n\n\n                <custom-autocomplete *ngIf=\"field.value.type === 'autocomplete'\"\n                               [group]=\"field\" formControlName=\"_input\">\n\n                    <mat-error *ngIf=\"!field.get('_input').pristine && field.get('_input').hasError('required')\">\n                        Required\n                    </mat-error>\n                    <mat-error *ngIf=\"!field.get('_input').pristine && field.get('_input').hasError('minlength')\">\n                        Min {{field.get('min').value }}\n                    </mat-error>\n                    <mat-error *ngIf=\"!field.get('_input').pristine &&  field.get('_input').hasError('maxlength')\">\n                        Max {{field.get('max').value }}\n                    </mat-error>\n                </custom-autocomplete>\n\n\n\n\n            </div>\n        </div>\n\n        <div\n                class=\"footer\"\n                fxLayout=\"row\"\n                fxLayoutAlign=\"end\"\n                fxLayoutGap=\"1em\"\n        >\n\n\n        <a mat-button\n           mat-flat-button\n           class=\"cancel-btn\"\n        >Cancel</a>\n\n\n        <button mat-button\n                mat-flat-button\n                color=\"primary\"\n                [disabled]=\"!form.valid\"\n                class=\"submit-btn\"\n        >Submit</button>\n        </div>\n    </form>\n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/shared/forms/quote/quote.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/forms/quote/quote.component.ts ***!
  \*******************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var QuoteComponent = /** @class */ (function () {
    function QuoteComponent(fb, apiService) {
        this.fb = fb;
        this.apiService = apiService;
        this.form = fb.group({
            fields: fb.array([])
        });
    }
    Object.defineProperty(QuoteComponent.prototype, "fields", {
        get: function () {
            return this.form.get('fields');
        },
        enumerable: true,
        configurable: true
    });
    QuoteComponent.prototype.isValidator = function (validator) {
        if (validator && typeof validator === 'function') {
            return true;
        }
        return false;
    };
    /**
     * Maps object properties to Angular Validators
     */
    QuoteComponent.prototype.getValidator = function (key, validationValue) {
        switch (key) {
            case 'min':
                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(validationValue);
                break;
            case 'max':
                return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(validationValue);
                break;
            case 'required':
                if (validationValue === true) {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required;
                }
                break;
        }
        return null;
    };
    /**
     * Create an array of validators for out form controls.
     */
    QuoteComponent.prototype.createValidators = function (field) {
        var _this = this;
        var validators = [];
        Object.keys(field).forEach(function (key) {
            var validator = _this.getValidator(key, field[key]);
            if (validator) {
                validators.push(validator);
            }
        });
        return validators;
    };
    QuoteComponent.prototype.makePropertiesReactive = function (field) {
        var _this = this;
        /**
         * Loop through object keys and change arrays into FormArrays
         */
        Object.keys(field).forEach(function (key) {
            if (Array.isArray(field[key])) {
                field[key] = _this.fb.array(field[key].slice());
            }
        });
        /**
         * Underscores are used to avoid name collisions
         */
        if (field.type === 'select') {
            field._option_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.createValidators(field));
        }
        else {
            field._input = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.createValidators(field));
        }
        return field;
    };
    /**
     * Turns a question into a control group.
     */
    QuoteComponent.prototype.createControlGroup = function (field) {
        /**
         * Field with ID 4 is dynamically generated and does not have a flag that
         * would indicate that it is an autocomplete field. It needs to be hardcoded...
         */
        if (field.id === 4) {
            field.type = 'autocomplete';
        }
        /**
         * FormGroup need to have Arrays as FormArray
         * And private form controls need to be added.
         */
        var reactiveFields = this.makePropertiesReactive(field);
        return this.fb.group(reactiveFields);
    };
    QuoteComponent.prototype.submit = function () {
        var _this = this;
        /**
         * Create a post object from form.
         */
        var responses = this.form.value.fields.map(function (field) {
            var obj = {
                question_id: field.id,
                option_id: field._option_id,
                text: field._input
            };
            /**
             * Make sure we only post clean code.
             */
            Object.keys(obj).forEach(function (key) {
                if (obj[key] === undefined) {
                    delete obj[key];
                }
            });
            return obj;
        });
        /**
         * Save form
         */
        this.apiService
            .saveForm({ responses: responses })
            .subscribe(function (done) {
            alert('form saved');
            _this.form.disable();
        });
    };
    QuoteComponent.prototype.wireAPICalls = function () {
        var _this = this;
        this.apiService.getQuestions()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatAll"])()).subscribe(function (field) {
            _this.fields.push(_this.createControlGroup(field));
        }, function (error) {
            alert('something went wrong');
        });
    };
    QuoteComponent.prototype.ngOnInit = function () {
        this.wireAPICalls();
    };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/shared/forms/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/shared/forms/quote/quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forms_quote_quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/quote/quote.component */ "./src/app/shared/forms/quote/quote.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _controls_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/input/input.component */ "./src/app/shared/controls/input/input.component.ts");
/* harmony import */ var _controls_select_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/select/select.component */ "./src/app/shared/controls/select/select.component.ts");
/* harmony import */ var _controls_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/autocomplete/autocomplete.component */ "./src/app/shared/controls/autocomplete/autocomplete.component.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_forms_quote_quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"], _controls_input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"], _controls_select_select_component__WEBPACK_IMPORTED_MODULE_8__["SelectComponent"], _controls_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteComponent"]],
            imports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _forms_quote_quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/milos/Documents/themedev/themes/dynamic-form-generation/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map