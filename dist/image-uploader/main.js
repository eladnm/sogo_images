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
/* harmony import */ var _pages_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/preview-page/preview-page.component */ "./src/app/pages/preview-page/preview-page.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    {
        path: 'home',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
    },
    {
        path: 'preview',
        component: _pages_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_1__["PreviewPageComponent"],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
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

module.exports = ".container {\r\n    max-width: 960px;\r\n    margin: 2rem auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

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
        this.title = 'image-uploader';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/preview-page/preview-page.component */ "./src/app/pages/preview-page/preview-page.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _pages_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_8__["PreviewPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/upload-request.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/upload-request.model.ts ***!
  \************************************************/
/*! exports provided: UploadRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadRequest", function() { return UploadRequest; });
var UploadRequest = /** @class */ (function () {
    function UploadRequest() {
    }
    return UploadRequest;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Sogo Digital Image Gallery</h1>\n<h4 class=\"head text-center\">Please fill proper details</h4>\n<form>\n  <div class=\"form-group\">\n    <label for=\"title\">Product Details: </label>\n    <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Product Details\"[(ngModel)]=\"title\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description: </label>\n    <input type=\"text\" id=\"description\" name=\"description\"  placeholder=\"description\"[(ngModel)]=\"description\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"date\">Date: </label>\n    <input type=\"date\" class=\"form-control input-md\" name=\"date\" [(ngModel)]=\"date\" />\n  </div>\n  <button\n    class=\"btn\"\n    (click)=\"gotoUpload()\"\n    [disabled]=\"!title || !description || !date\">\n    Next\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router) {
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent.prototype.gotoUpload = function () {
        this.router.navigate(['preview'], {
            queryParams: {
                title: this.title,
                description: this.description,
                date: this.date.toString()
            }
        });
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/preview-page/preview-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/preview-page/preview-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".large-preview {\r\n  display: flex;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 550px;\r\n  padding: 1rem;\r\n  background: #333;\r\n}\r\n\r\n.large-preview img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.preview-container {\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  height: calc(200px + 3rem);\r\n  padding: 1rem;\r\n  white-space: nowrap;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  background: #777;\r\n}\r\n\r\n.preview-container .img-preview {\r\n    position: relative;\r\n    margin-right: 1em;\r\n}\r\n\r\n.preview-container .img-preview .delete-btn{\r\n    position: absolute;\r\n    bottom: 15px;\r\n    left: 10px;\r\n    background: #fff;\r\n    font-size: 30px;\r\n    border: none;\r\n    height: 40px;\r\n    width: 50px;\r\n    border-radius: 5px;\r\n    color: #4c4c4c;\r\n}\r\n\r\n.preview-container .img-preview .replace-btn{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    background: #fff;\r\n    font-size: 30px;\r\n    border: none;\r\n    height: 40px;\r\n    width: 50px;\r\n    border-radius: 5px;\r\n    color: #4c4c4c;\r\n}\r\n\r\n.preview-container img {\r\n  height: 200px;\r\n  border: 5px solid #333;\r\n  cursor: pointer;\r\n}\r\n\r\n.preview-container img.active {\r\n  border: 5px solid #fff;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 8px 30px;\r\n    cursor: pointer;\r\n    color: #00FF00;\r\n}\r\n\r\n#submit {\r\n    margin-left: 10%;\r\n}\r\n\r\ntable,\r\nth,\r\ntd {\r\n  border: 1px solid #777;\r\n}\r\n\r\ntable {\r\n  margin-top: 2rem;\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  height: 50px;\r\n}\r\n\r\ntd {\r\n  padding: 0.25rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJldmlldy1wYWdlL3ByZXZpZXctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmV2aWV3LXBhZ2UvcHJldmlldy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFyZ2UtcHJldmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG59XHJcblxyXG4ubGFyZ2UtcHJldmlldyBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJldmlldy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGNhbGMoMjAwcHggKyAzcmVtKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogIzc3NztcclxufVxyXG5cclxuLnByZXZpZXctY29udGFpbmVyIC5pbWctcHJldmlldyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnByZXZpZXctY29udGFpbmVyIC5pbWctcHJldmlldyAuZGVsZXRlLWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogIzRjNGM0YztcclxufVxyXG5cclxuLnByZXZpZXctY29udGFpbmVyIC5pbWctcHJldmlldyAucmVwbGFjZS1idG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWNvbnRhaW5lciBpbWcge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWNvbnRhaW5lciBpbWcuYWN0aXZlIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xyXG59XHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzAwRkYwMDtcclxufVxyXG4jc3VibWl0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbnRhYmxlLFxyXG50aCxcclxudGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/preview-page/preview-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/preview-page/preview-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <h3>Choose Images To Upload</h3>\n  <label for=\"file-upload\" class=\"custom-file-upload\">\n    <i class=\"fa fa-plus\"></i></label>\n  <input id=\"file-upload\"\n    type=\"file\"(change)=\"onSelectFile($event)\" multiple accept=\"image/png image/jpeg image/gif\"/> \n  <button  class=\"btn\" type=\"button\" id=\"submit\" (click)=\"submit()\">Submit</button>\n</form>\n<div class=\"preview\" *ngIf=\"imageDetails && imageDetails.length\">\n  <div class=\"large-preview\">\n    <img [src]=\"imageDetails[currentItem].image\" *ngIf=\"currentItem !== null\" />\n  </div>\n\n  <div class=\"preview-container\">\n    <div\n      class=\"img-preview\"\n      *ngFor=\"let imageDetail of imageDetails; index as i\"\n    >\n      <img\n        [src]=\"imageDetail.image\" [ngClass]=\"{ active: i === currentItem }\" (click)=\"currentItem = i\"/>\n      <button (click)=\"replaceImage(hiddenInput)\" class=\"replace-btn\">\n        <i class=\"fas fa-edit\"></i>\n      </button>\n      <button (click)=\"deleteImage(i)\" class=\"delete-btn\">\n        <i class=\"fas fa-trash\"></i>\n      </button>\n      <input\n        #hiddenInput\n        (change)=\"onReplaceFile($event, i)\"\n        style=\"width: 0px; height: 0px; overflow: hidden; position: absolute\"\n        type=\"file\"\n        accept=\"image/png image/jpeg image/gif\"\n      />\n    </div>\n  </div>\n\n  <table>\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Name</th>\n        <th>Size</th>\n        <th>Extension</th>\n        <th>Valid</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let imageDetail of imageDetails; index as i\">\n        <td>{{ i }}</td>\n        <td>{{ imageDetail.name }}</td>\n        <td>{{ imageDetail.size }}</td>\n        <td>{{ imageDetail.type }}</td>\n        <td>{{ imageDetail.isValid }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/preview-page/preview-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/preview-page/preview-page.component.ts ***!
  \**************************************************************/
/*! exports provided: PreviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPageComponent", function() { return PreviewPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_upload_request_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/upload-request.model */ "./src/app/models/upload-request.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var PreviewPageComponent = /** @class */ (function () {
    function PreviewPageComponent(activatedRoute, http) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.imageDetails = [];
        this.currentItem = null;
        this.uploadRequest = new src_app_models_upload_request_model__WEBPACK_IMPORTED_MODULE_3__["UploadRequest"]();
    }
    PreviewPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var userId = params['userId'];
            console.log(userId);
            _this.uploadRequest.title = params['title'];
            _this.uploadRequest.description = params['description'];
            _this.uploadRequest.date = new Date(params['date']);
        });
    };
    PreviewPageComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files.length) {
            var filesAmount = event.target.files.length + this.imageDetails.length;
            if (filesAmount <= 5) {
                var _loop_1 = function (i) {
                    var reader = new FileReader();
                    reader.onload = function (targetEvent) {
                        var target = targetEvent.target;
                        _this.imageDetails.push({
                            image: target.result,
                            file: event.target.files[i],
                            type: event.target.files[i].type,
                            name: event.target.files[i].name,
                            size: event.target.files[i].size,
                            isValid: _this.isValidImage(event.target.files[i])
                        });
                        _this.currentItem = _this.imageDetails.length - 1;
                    };
                    reader.readAsDataURL(event.target.files[i]);
                };
                for (var i = 0; i < event.target.files.length; i++) {
                    _loop_1(i);
                }
            }
            else {
                alert('no more than 5 images');
            }
        }
    };
    PreviewPageComponent.prototype.onReplaceFile = function (event, i) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (targetEvent) {
            var target = targetEvent.target;
            _this.imageDetails[i] = {
                image: target.result,
                file: event.target.files[0],
                type: event.target.files[0].type,
                name: event.target.files[0].name,
                size: event.target.files[0].size,
                isValid: _this.isValidImage(event.target.files[0])
            };
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    PreviewPageComponent.prototype.isValidImage = function (imagefile) {
        if (imagefile.size > 10485760) {
            return false;
        }
        if (!(imagefile.type === 'image/jpeg' ||
            imagefile.type === 'image/gif' ||
            imagefile.type === 'image/png')) {
            return false;
        }
        return true;
    };
    PreviewPageComponent.prototype.deleteImage = function (index) {
        this.imageDetails.splice(index, 1);
        if (!this.imageDetails.length) {
            this.currentItem = null;
        }
        else if (this.currentItem >= index) {
            this.currentItem = this.currentItem - 1;
        }
    };
    PreviewPageComponent.prototype.replaceImage = function (replaceImage) {
        replaceImage.click();
    };
    PreviewPageComponent.prototype.submit = function () {
        var hasValidImages = this.imageDetails.find(function (image) { return image.isValid; });
        if (!hasValidImages) {
            alert('Please select valid images');
            return;
        }
        var formData = new FormData();
        formData.append('date', this.uploadRequest.date.toString());
        formData.append('description', this.uploadRequest.description);
        formData.append('title', this.uploadRequest.title);
        this.imageDetails.forEach(function (image, i) {
            formData.append('images[' + i + ']', image.file);
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        debugger;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('POST', 'http://localhost/sogo/2/image-uploader/upload.php', formData, {
            params: params,
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req).subscribe();
    };
    PreviewPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview-page',
            template: __webpack_require__(/*! ./preview-page.component.html */ "./src/app/pages/preview-page/preview-page.component.html"),
            styles: [__webpack_require__(/*! ./preview-page.component.css */ "./src/app/pages/preview-page/preview-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], PreviewPageComponent);
    return PreviewPageComponent;
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

module.exports = __webpack_require__(/*! C:\xampp\htdocs\sogo\image gallery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map