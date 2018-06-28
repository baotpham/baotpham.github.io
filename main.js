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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav>\r\n    <a routerLink=\"\" routerLinkActive=\"active\">Crisis Center</a>\r\n    <a routerLink=\"/thank-you\" routerLinkActive=\"active\">Heroes</a>\r\n  </nav> -->\r\n<!-- <router-outlet></router-outlet> -->\r\n<style>\r\n  @import url('https://fonts.googleapis.com/css?family=Merienda');\r\n</style>\r\n<div class=\"page-header\">\r\n  <div class=\"page-border\">\r\n    <h1>{{titleOne}}</h1>\r\n    <h1>{{titleTwo}}</h1>\r\n    <img src=\"../assets/logo.png\">\r\n    <p style=\"font-family: 'Merienda', cursive\">\r\n<i>\"And walk in love, as Christ loved us and gave himself up for us, a fragrant offering and sacrifice to God.\" ~ Ephesians\r\n        5:2\r\n      </i>\r\n</p>\r\n    <!-- <h1>Tutorial Registration Page Here</h1> -->\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"page-border\">\r\n\r\n\r\n  <!-- <div style=\"height: 100px;\"></div> -->\r\n\r\n  <!-- <div class=\"nav-buttons\" style=\"text-align: left;\" *ngIf=\"page == 'reviewPage'\">\r\n    <button class=\"nav-button\" [class.nav-button-active]=\"page == 'attendeesFormPage'\" (click)=\"switchPage('attendeesFormPage')\" routerLink=\"/form\">Edit</button>\r\n  </div> -->\r\n\r\n  <router-outlet>\r\n    <!-- previous button -->\r\n\r\n    <!-- page content -->\r\n    <!-- <div [ngSwitch]=\"page\">\r\n      <div *ngSwitchCase=\"'attendeesFormPage'\">\r\n        <app-attendee-form></app-attendee-form>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'reviewPage'\">\r\n        <app-review-page></app-review-page>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'thankYouPage'\" (completed)=\"onCompleted($event)\">\r\n        <app-thankyoupage></app-thankyoupage>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n\r\n    <!-- spacing -->\r\n    <!-- <div style=\"height: 30px;\"></div> -->\r\n\r\n    <!-- spacing -->\r\n    <!-- <div style=\"height: 200px;\"></div> -->\r\n  </router-outlet>\r\n\r\n  <!-- next button -->\r\n  <!-- <div class=\"nav-buttons\" *ngIf=\"page == 'attendeesFormPage'\">\r\n  <button class=\"nav-button\" [class.nav-button-active]=\"page == 'reviewPage'\" (click)=\"switchPage('reviewPage')\" routerLink=\"/review\">Next</button>\r\n</div> -->\r\n</div>\r\n<!-- <app-info-form></app-info-form> -->\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.titleOne = 'CVCF Youth Retreat 2018';
        this.titleTwo = 'Registration Form';
        this.page = 'attendeesFormPage';
    }
    AppComponent.prototype.switchPage = function (page) {
        this.page = page;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _attendee_form_attendee_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attendee-form/attendee-form.component */ "./src/app/attendee-form/attendee-form.component.ts");
/* harmony import */ var _info_form_info_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-form/info-form.component */ "./src/app/info-form/info-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review-page/review-page.component */ "./src/app/review-page/review-page.component.ts");
/* harmony import */ var _thankyoupage_thankyoupage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thankyoupage/thankyoupage.component */ "./src/app/thankyoupage/thankyoupage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'form', component: _attendee_form_attendee_form_component__WEBPACK_IMPORTED_MODULE_5__["AttendeeFormComponent"] },
    { path: 'review', component: _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_8__["ReviewPageComponent"] },
    { path: 'thank-you', component: _thankyoupage_thankyoupage_component__WEBPACK_IMPORTED_MODULE_9__["ThankyoupageComponent"] },
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    { path: '**', redirectTo: '/src/index.html' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _attendee_form_attendee_form_component__WEBPACK_IMPORTED_MODULE_5__["AttendeeFormComponent"],
                _info_form_info_form_component__WEBPACK_IMPORTED_MODULE_6__["InfoFormComponent"],
                _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_8__["ReviewPageComponent"],
                _thankyoupage_thankyoupage_component__WEBPACK_IMPORTED_MODULE_9__["ThankyoupageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attendee-form/attendee-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/attendee-form/attendee-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-container\">\r\n  <div class=\"title\">\r\n    Registration Info\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"total-info\">\r\n  Total Registers:\r\n  <span *ngIf=\"people.length != undefined\">{{people.length}}</span>\r\n  <span *ngIf=\"people.length == undefined\">0</span>\r\n</div>\r\n\r\n<!-- Attendee Forms -->\r\n<form [formGroup]=\"attendeeForm\" #checkout=\"ngForm\" class=\"checkout\">\r\n\r\n  <!-- <button type=\"button\" (click)=\"partialUpdate()\">Partial Update</button>\r\n  <button type=\"button\" (click)=\"fullUpdate()\">Full Update</button>\r\n  <button type=\"button\" (click)=\"check()\">Check</button>\r\n  <button type=\"button\" (click)=\"lazyOne()\">Lazy One</button>\r\n  <button type=\"button\" (click)=\"lazyTwo()\">Lazy Two</button> -->\r\n  <div class=\"form-control\">\r\n    <h3>Personal Info</h3>\r\n\r\n    <div class=\"FormRow\">\r\n      <div class=\"MediumFormFieldContainer\">\r\n        <label class=\"control-label\">First Name</label>\r\n        <input class=\"form-control\" type=\"text\" formControlName=\"first_name\" placeholder=\"Enter Your First Name\" (change)=\"addAttendee()\"\r\n          required>\r\n        <!-- <div [hidden]=\"first_name.valid || first_name.pristine\" class=\"alert alert-danger\">First Name is required</div> -->\r\n      </div>\r\n      <div class=\"MediumFormFieldContainer\">\r\n        <label class=\"control-label\">Last Name</label>\r\n        <input class=\"form-control\" type=\"text\" formControlName=\"last_name\" placeholder=\"Enter Your Last Name\" (change)=\"addAttendee()\"\r\n          required>\r\n        <!-- <div [hidden]=\"last_name.valid || last_name.pristine\" class=\"alert alert-danger\">Last Name is required</div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"SmallFormFieldContainer\">\r\n        <label class=\"control-label\">T-Shirt Size</label>\r\n        <select class=\"form-control\" formControlName=\"t_shirt\" (change)=\"addAttendee()\" required>\r\n          <option *ngFor=\"let size of sizes\" [value]=\"size\">{{size}}</option>\r\n        </select>\r\n        <!-- <div [hidden]=\"t_shirt.valid || t_shirt.pristine\" class=\"alert alert-danger\">T-shirt size is required</div> -->\r\n      </div>\r\n      <div class=\"SmallFormFieldContainer\">\r\n        <label class=\"control-label\">Gender</label>\r\n        <select class=\"form-control\" formControlName=\"gender\" (change)=\"addAttendee()\" required>\r\n          <option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}</option>\r\n        </select>\r\n        <!-- <div [hidden]=\"gender.valid || gender.pristine\" class=\"alert alert-danger\">Gender is required</div> -->\r\n      </div>\r\n      <div class=\"SmallFormFieldContainer\">\r\n        <label class=\"control-label\">Age</label>\r\n        <input class=\"form-control\" type=\"number\" formControlName=\"age\" placeholder=\"12\" (change)=\"addAttendee()\" required>\r\n        <!-- <div [hidden]=\"age.valid || age.pristine\" class=\"alert alert-danger\">Age is required</div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\">Medical Issues/Allergies</label>\r\n        <textarea class=\"form-control\" type=\"text\" formControlName=\"medical\" placeholder=\"N/A\" rows=\"5\" (change)=\"addAttendee()\"\r\n          required></textarea>\r\n        <!-- <div [hidden]=\"medical.valid || medical.pristine\" class=\"alert alert-danger\">Medical Information is required. Put N/A if you have none.</div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\">Address</label>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your Address\" formControlName=\"address\" (change)=\"addAttendee()\"\r\n          required>\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\">Address 2</label>\r\n        <input class=\"form-control non-required\" type=\"text\" placeholder=\"N/A\" name=\"address_2\" formControlName=\"address_2\" (change)=\"addAttendee()\">\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"city\">City</label>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your City\" name=\"city\" formControlName=\"city\" (change)=\"addAttendee()\"\r\n          required>\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"MediumFormFieldContainer\">\r\n        <label class=\"control-label\" for=\"state\">State</label>\r\n        <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your State\" name=\"state\" formControlName=\"state\" required> -->\r\n        <select class=\"form-control\" formControlName=\"state\" (change)=\"addAttendee()\" required>\r\n          <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"MediumFormFieldContainer\">\r\n        <label class=\"control-label\" for=\"zip\">Zip Code</label>\r\n        <input class=\"form-control\" type=\"number\" placeholder=\" Enter Your Zip Code\" name=\"zip_code\" formControlName=\"zip_code\" (change)=\"addAttendee()\"\r\n          required>\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"email\">Email</label>\r\n        <input class=\"form-control non-required\" type=\"email\" placeholder=\"Enter Your Email If You Have One\" name=\"email\" formControlName=\"email\"\r\n          (change)=\"addAttendee()\">\r\n      </div>\r\n    </div>\r\n\r\n    <h3 style=\"margin-top:20px;\">Emergency Contact</h3>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"emergency_contact_first_name\">First Name</label>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Enter First Name\" name=\"emergency_contact_first_name\" formControlName=\"emergency_contact_first_name\"\r\n          (change)=\"addAttendee()\" required>\r\n      </div>\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"emergency_contact_last_name\">Last Name</label>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Enter Last Name\" name=\"emergency_contact_last_name\" formControlName=\"emergency_contact_last_name\"\r\n          (change)=\"addAttendee()\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"emergency_contact_phone_number\">Phone Number</label>\r\n        <input class=\"form-control\" type=\"number\" placeholder=\"Enter Phone Number\" name=\"emergency_contact_phone_number\" formControlName=\"emergency_contact_phone_number\"\r\n          (change)=\"addAttendee()\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"emergency_contact_relationship\">Relationship</label>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Relationship\" name=\"emergency_contact_relationship\" formControlName=\"emergency_contact_relationship\"\r\n          (change)=\"addAttendee()\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <h3 style=\"margin-top:20px;\">Church Contact</h3>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"your_churches\">Your Church</label>\r\n        <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your State\" name=\"state\" formControlName=\"state\" required> -->\r\n        <select class=\"form-control\" formControlName=\"your_churches\" (change)=\"addAttendee()\" required>\r\n          <option *ngFor=\"let your_churches of church_list\" [value]=\"your_churches\">{{your_churches}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"your_church\">Your Church: If you chose \"Other\"</label>\r\n        <input class=\"form-control non-required\" type=\"text\" placeholder=\"Enter Your Church Name\" name=\"your_church\" formControlName=\"your_church\"\r\n          (change)=\"addAttendee()\">\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"your_church_point_of_contact_name\">Your Church Point of Contact Name</label>\r\n        <input class=\"form-control non-required\" type=\"text\" placeholder=\"Enter Your Church Point of Contact Name\" name=\"your_church_point_of_contact_name\"\r\n          formControlName=\"your_church_point_of_contact_name\" (change)=\"addAttendee()\">\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"your_church_point_of_contact_number\">Your Church Point of Contact Number</label>\r\n        <input class=\"form-control non-required\" type=\"number\" placeholder=\"Enter Your Church Point of Contact Phone Number\" name=\"your_church_point_of_contact_number\"\r\n          formControlName=\"your_church_point_of_contact_number\" (change)=\"addAttendee()\">\r\n      </div>\r\n    </div>\r\n\r\n    <h3 style=\"margin-top:20px;\">Days Attending</h3>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer radio\">\r\n        <div *ngFor=\"let day of attendeeForm.get('days')['controls']; let i=index\">\r\n          <div class=\"checkbox\">\r\n            <input class=\"icheckbox_flat\" id=\"flat-checkbox-2\" type=\"checkbox\" [formControl]=\"day\" (change)=\"addAttendee()\" />\r\n            <label>{{days_chosen[i].name}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <hr>\r\n    <div class=\"FormFieldContainer\">\r\n      <ul class=\"pagination\">\r\n        <!-- <li class=\"active\"> -->\r\n        <!-- <a href=\"#\">PREV</a> -->\r\n        <!-- </li> -->\r\n        <li class=\"user-entry\" *ngFor=\"let person of people; let i = index\" [ngClass]=\"{'active': currentAttendee === person}\" (click)=\"loadAttendee(person, i);\">\r\n          <button type=\"button\" *ngIf=\"people.length > 1\" class=\"DeleteButton\" (click)=\"deleteAttendee(i)\">-</button>\r\n          <div class=\"pagination-button\">{{i+1}}</div>\r\n        </li>\r\n        <li>\r\n          <a id=\"add-entry-box\" (click)=\"createNewAttendee()\">\r\n            <i class=\"fa fa-plus fa-2x add-entry\"></i>\r\n          </a>\r\n        </li>\r\n        <!-- <li class=\"active\"> -->\r\n        <!-- <a href=\"#\">NEXT</a> -->\r\n        <!-- </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- <div style=\"height: 70px;\"></div> -->\r\n\r\n  <!-- <div class=\"title-container\">\r\n    <div class=\"title\"> -->\r\n  <!-- Church Contact -->\r\n  <!-- Church Contact\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- <div style=\"height: 40px;\"></div> -->\r\n\r\n  <!-- <div class=\"form-control\">\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"your_church\">Your Church</label>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your Church Name\" name=\"your_church\" formControlName=\"your_church\" (change)=\"addAttendee()\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"your_church_point_of_contact_name\">Your Church Point of Contact Name</label>\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your Church Point of Contact Name\" name=\"your_church_point_of_contact_name\" formControlName=\"your_church_point_of_contact_name\" (change)=\"addAttendee()\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"FormRow\">\r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"control-label\" for=\"your_church_point_of_contact_number\">Your Church Point of Contact Number</label>\r\n        <input class=\"form-control\" type=\"number\" placeholder=\"Enter Your Church Point of Contact Phone Number\" name=\"your_church_point_of_contact_number\" formControlName=\"your_church_point_of_contact_number\" (change)=\"addAttendee()\" required>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n\r\n  <!-- <div class=\"title-container\">\r\n    <div class=\"title\">\r\n      Payment\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"page-border\">\r\n    <div class=\"form-control\">\r\n\r\n      <label for=\"card-info\" id=\"card-title\">Card Information</label>\r\n      <div class=\"CardRow\">\r\n        <div id=\"card-info\" #cardInfo></div>\r\n\r\n        <div id=\"card-errors\" role=\"alert\" *ngIf=\"error\">{{ error }}</div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</form>\r\n\r\n<!-- spacing -->\r\n<div style=\"height: 30px;\"></div>\r\n\r\n<!-- next button -->\r\n<div class=\"nav-buttons\">\r\n  <button class=\"nav-button next-button\" routerLink=\"/review\">Next</button>\r\n</div>"

/***/ }),

/***/ "./src/app/attendee-form/attendee-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/attendee-form/attendee-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/attendee-form/attendee-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/attendee-form/attendee-form.component.ts ***!
  \**********************************************************/
/*! exports provided: AttendeeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendeeFormComponent", function() { return AttendeeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Attendee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Attendee */ "./src/app/models/Attendee.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
        // 'Authorization': 'my-auth-token'
    })
};
var AttendeeFormComponent = /** @class */ (function () {
    //attendeeForm.get('days').value
    function AttendeeFormComponent(fb, http, userService) {
        this.fb = fb;
        this.http = http;
        this.userService = userService;
        this.first_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.last_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.t_shirt = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.gender = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.age = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.medical = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.address_2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.zip_code = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        //emergency info
        this.emergency_contact_first_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.emergency_contact_last_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.emergency_contact_phone_number = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.emergency_contact_relationship = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        //church info
        this.your_churches = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.your_church = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.your_church_point_of_contact_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.your_church_point_of_contact_number = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.max_index = 0;
        this.current_index = 0;
        this.cost = 0;
        this.days_attending = "";
        this.people = [];
        this.sizes = ['S', 'M', 'L', 'XL', 'XXL'];
        this.genders = ['Male', 'Female'];
        this.states = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI",
            "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI",
            "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV",
            "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT",
            "VA", "VT", "WA", "WI", "WV", "WY"];
        this.church_list = ["Other", "MD - Lanham", "MD - Living Faith", "MD - Baltimore", "MD - Germantown",
            "PA - Philadelphia", "PA - Pittsburgh", "VA - Grace", "VA - Hyvong",
            "VA - Methodist Church", "FL - Orlando", "KY - Kentucky", "NC - North Carolina",
            "N/A"];
        this.days_chosen = [
            { name: 'Friday', selected: true, id: 1 },
            { name: 'Saturday', selected: true, id: 2 },
            { name: 'Sunday', selected: true, id: 3 },
            { name: 'Monday', selected: true, id: 4 }
        ];
        this.days_bool = [
            true, true, true, true
        ];
        this.model = new _models_Attendee__WEBPACK_IMPORTED_MODULE_1__["Attendee"]("", "", "", "", null, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", null);
        this.shouldSlice = true;
        this.attendeeForm = fb.group({
            "first_name": this.first_name,
            "last_name": this.last_name,
            "t_shirt": this.t_shirt,
            "gender": this.gender,
            "age": this.age,
            "medical": this.medical,
            "address": this.address,
            "address_2": this.address_2,
            "city": this.city,
            "state": this.state,
            "zip_code": this.zip_code,
            "email": this.email,
            //emergency info
            "emergency_contact_first_name": this.emergency_contact_first_name,
            "emergency_contact_last_name": this.emergency_contact_last_name,
            "emergency_contact_phone_number": this.emergency_contact_phone_number,
            "emergency_contact_relationship": this.emergency_contact_relationship,
            "your_churches": this.your_churches,
            "your_church": this.your_church,
            "your_church_point_of_contact_name": this.your_church_point_of_contact_name,
            "your_church_point_of_contact_number": this.your_church_point_of_contact_number,
            days: this.fb.array(this.days_bool),
        });
    }
    AttendeeFormComponent.prototype.ngOnInit = function () {
        this.loadAttendees();
        this.checkChurch();
    };
    //CRUD Options
    //Add attendee by creating a new attendee and navigating to it.
    //Previous form must be valid before moving on.
    //Must show active on new form.
    AttendeeFormComponent.prototype.addAttendee = function () {
        console.log("is form valid? ", this.attendeeForm.valid);
        this.checkChurch();
        if (this.attendeeForm.valid) {
            var attendee = new _models_Attendee__WEBPACK_IMPORTED_MODULE_1__["Attendee"]("", "", "", "", null, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", null);
            attendee.first_name = this.first_name.value;
            attendee.last_name = this.last_name.value;
            attendee.t_shirt = this.t_shirt.value;
            attendee.gender = this.gender.value;
            attendee.age = this.age.value;
            attendee.medical = this.medical.value;
            attendee.address = this.address.value;
            attendee.address_2 = this.address_2.value;
            attendee.city = this.city.value;
            attendee.state = this.state.value;
            attendee.zip_code = this.zip_code.value;
            attendee.email = this.email.value;
            attendee.emergency_contact_first_name = this.emergency_contact_first_name.value;
            attendee.emergency_contact_last_name = this.emergency_contact_last_name.value;
            attendee.emergency_contact_phone_number = this.emergency_contact_phone_number.value;
            attendee.emergency_contact_relationship = this.emergency_contact_relationship.value;
            attendee.your_church = this.your_church.value;
            attendee.your_church_point_of_contact_name = this.your_church_point_of_contact_name.value;
            attendee.your_church_point_of_contact_number = this.your_church_point_of_contact_number.value;
            this.numDaysCheck(); //updates days attending and cost before pushing change
            attendee.days_attending = this.days_attending;
            attendee.cost = this.cost;
            console.log("attendee", attendee);
            this.userService.addAttendee(this.current_index, attendee);
            this.currentAttendee = attendee;
            if (this.shouldSlice)
                this.people.splice(this.max_index, 1);
            this.people[this.current_index] = attendee;
            console.log("people", this.people);
        }
    };
    AttendeeFormComponent.prototype.createNewAttendee = function () {
        if (this.attendeeForm.valid) {
            this.people.push(new _models_Attendee__WEBPACK_IMPORTED_MODULE_1__["Attendee"]("", "", "", "", null, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Friday, Saturday, Sunday, Monday", null));
            console.log(this.people);
            this.max_index++;
            this.current_index = this.max_index;
            //Fills in checkboxes to attend everyday
            this.attendeeForm.setControl('days', this.fb.array(this.days_bool));
            //copy church info to every other register. save work for leaders
            this.people[this.max_index].your_church = this.your_church.value;
            this.people[this.max_index].your_church_point_of_contact_name = this.your_church_point_of_contact_name.value;
            this.people[this.max_index].your_church_point_of_contact_number = this.your_church_point_of_contact_number.value;
            //update current attendee
            this.currentAttendee = this.people[this.max_index];
            //make sure the last index should be deleted since we just added an empty object into people
            this.shouldSlice = true;
            //bind to UI
            this.bindListToForm();
            this.your_churches.setValue("Other");
            //scroll to top of page
            this.scroll();
        }
    };
    AttendeeFormComponent.prototype.loadAttendees = function () {
        var attendees = this.userService.getAllRegisters();
        console.log(attendees);
        if (attendees.length > 0) {
            this.people = attendees;
            this.max_index = this.people.length - 1;
            this.current_index = this.max_index;
            this.currentAttendee = this.people[this.current_index];
            this.attendeeForm.reset();
            //make sure the last index should not be deleted
            this.shouldSlice = false;
            this.bindListToForm();
            console.log("yes people", this.people);
        }
        else {
            this.people.push(new _models_Attendee__WEBPACK_IMPORTED_MODULE_1__["Attendee"]("", "", "", "", null, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", null));
            this.currentAttendee = this.people[0];
            this.max_index = 0;
            this.current_index = 0;
            console.log("no people");
        }
    };
    // Must navigate to specific attendee and update active pagination
    AttendeeFormComponent.prototype.loadAttendee = function (attendee, new_index) {
        console.log("saving old attendee data before moving on");
        //Save current attendee before moving on
        // this.bindFormToList(this.current_index);
        //Sets new current attendee for active setting
        this.currentAttendee = attendee;
        console.log("pulls in target attendee data into form");
        //Pull in target attendee data and put into form
        this.bindListToForm();
        this.rebindDaysCheck();
        //Updates current index to the attendee we're loading
        this.current_index = new_index;
        //make sure the last index should not be deleted
        this.shouldSlice = false;
    };
    //Deletes attendee from current list
    AttendeeFormComponent.prototype.deleteAttendee = function (index) {
        console.log("current index is: " + index);
        if (index >= 0) {
            //Deletes Attendee from list
            this.people.splice(index, 1);
            this.max_index--;
            //Resets current attendee and index to the first one
            this.current_index = index - 1;
            this.currentAttendee = this.people[this.current_index];
            this.bindListToForm();
        }
        else {
            console.log("Cannot delete first index.");
        }
    };
    //Checks if Other or N/A church is selected
    AttendeeFormComponent.prototype.checkChurch = function () {
        if (this.your_churches.value == 'N/A') {
            this.your_church.setValue("");
        }
        else if (!(this.your_churches.value == 'Other')) {
            this.your_church.setValue(this.your_churches.value);
        }
        //Makes sure the list is always set to what's in the Church Name box
        //If not, then is set to Other
        if (this.church_list.includes(this.your_church.value, 0)) {
            this.your_churches.setValue(this.your_church.value);
            console.log(this.your_churches.value);
            console.log(this.your_church.value);
        }
        if (this.your_churches.value == "" || this.your_churches.value == null) {
            this.your_churches.setValue("Other");
        }
    };
    AttendeeFormComponent.prototype.numDaysCheck = function () {
        var dates = this.attendeeForm.get('days').value;
        // this.cost = 0;
        this.cost = 155;
        this.days_attending = "";
        if (dates[0]) {
            // this.cost += 25; //Price for attending Friday
            this.days_attending += "Friday, ";
        }
        if (dates[1]) {
            // this.cost += 52.5; //Price for attending Saturday
            this.days_attending += "Saturday, ";
        }
        if (dates[2]) {
            // this.cost += 52.5; //Price for attending Sunday
            this.days_attending += "Sunday, ";
        }
        if (dates[3]) {
            // this.cost += 25; //Price for attending Monday
            this.days_attending += "Monday";
        }
        console.log(this.cost);
        console.log(this.days_attending);
    };
    AttendeeFormComponent.prototype.rebindDaysCheck = function () {
        console.log(this.currentAttendee.days_attending.includes("Friday"));
        console.log(this.currentAttendee.days_attending.includes("Saturday"));
        console.log(this.currentAttendee.days_attending.includes("Sunday"));
        console.log(this.currentAttendee.days_attending.includes("Monday"));
        this.attendeeForm.setControl('days', this.fb.array([
            this.currentAttendee.days_attending.includes("Friday"),
            this.currentAttendee.days_attending.includes("Saturday"),
            this.currentAttendee.days_attending.includes("Sunday"),
            this.currentAttendee.days_attending.includes("Monday")
        ]));
        // this.attendeeForm.setControl('days', this.fb.array(this.days_bool));
    };
    //Scrolls to top of page when adding new attendee
    AttendeeFormComponent.prototype.scroll = function () {
        console.log("Scrolling to the top");
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 40); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
        console.log("Done scrolling to the top");
    };
    //Binding
    //Updates the list's values with the contents of the form
    AttendeeFormComponent.prototype.bindFormToList = function (index) {
        this.people[index].first_name = this.first_name.value;
        this.people[index].last_name = this.last_name.value;
        this.people[index].t_shirt = this.t_shirt.value;
        this.people[index].gender = this.gender.value;
        this.people[index].age = this.age.value;
        this.people[index].medical = this.medical.value;
        this.people[index].address = this.address.value;
        this.people[index].address_2 = this.address_2.value;
        this.people[index].city = this.city.value;
        this.people[index].state = this.state.value;
        this.people[index].zip_code = this.zip_code.value;
        this.people[index].email = this.email.value;
        this.people[index].emergency_contact_first_name = this.emergency_contact_first_name.value;
        this.people[index].emergency_contact_last_name = this.emergency_contact_last_name.value;
        this.people[index].emergency_contact_phone_number = this.emergency_contact_phone_number.value;
        this.people[index].emergency_contact_relationship = this.emergency_contact_relationship.value;
        this.people[index].days_attending = this.days_attending;
        this.people[index].cost = this.cost;
    };
    //Updates the form's values with the contents from the list
    AttendeeFormComponent.prototype.bindListToForm = function () {
        this.checkChurch();
        this.first_name.setValue(this.currentAttendee.first_name);
        this.last_name.setValue(this.currentAttendee.last_name);
        this.t_shirt.setValue(this.currentAttendee.t_shirt);
        this.gender.setValue(this.currentAttendee.gender);
        this.age.setValue(this.currentAttendee.age);
        this.medical.setValue(this.currentAttendee.medical);
        this.address.setValue(this.currentAttendee.address);
        this.address_2.setValue(this.currentAttendee.address_2);
        this.city.setValue(this.currentAttendee.city);
        this.state.setValue(this.currentAttendee.state);
        this.zip_code.setValue(this.currentAttendee.zip_code);
        this.email.setValue(this.currentAttendee.email);
        this.emergency_contact_first_name.setValue(this.currentAttendee.emergency_contact_first_name);
        this.emergency_contact_last_name.setValue(this.currentAttendee.emergency_contact_last_name);
        this.emergency_contact_phone_number.setValue(this.currentAttendee.emergency_contact_phone_number);
        this.emergency_contact_relationship.setValue(this.currentAttendee.emergency_contact_relationship);
        this.your_church.setValue(this.currentAttendee.your_church);
        this.your_church_point_of_contact_name.setValue(this.currentAttendee.your_church_point_of_contact_name);
        this.your_church_point_of_contact_number.setValue(this.currentAttendee.your_church_point_of_contact_number);
        this.rebindDaysCheck();
    };
    //updates malleable model to target attendee info
    AttendeeFormComponent.prototype.bindToTarget = function (attendee) {
        this.model.first_name = attendee.first_name;
        this.model.last_name = attendee.last_name;
        this.model.t_shirt = attendee.t_shirt;
        this.model.gender = attendee.gender;
        this.model.age = attendee.age;
        this.model.medical = attendee.medical;
        this.model.address = attendee.address;
        this.model.address_2 = attendee.address_2;
        this.model.city = attendee.city;
        this.model.state = attendee.state;
        this.model.zip_code = attendee.zip_code;
        this.model.email = attendee.email;
        this.model.emergency_contact_first_name = attendee.emergency_contact_first_name;
        this.model.emergency_contact_last_name = attendee.emergency_contact_last_name;
        this.model.emergency_contact_phone_number = attendee.emergency_contact_phone_number;
        this.model.emergency_contact_relationship = attendee.emergency_contact_relationship;
    };
    //Helper buttons
    AttendeeFormComponent.prototype.fullUpdate = function () {
        this.attendeeForm.setValue({
            first_name: 'Partial', last_name: 'monkey', t_shirt: 'M', gender: 'Male',
            age: 12, medical: 'yes', address: '123 Adams Ave', address_2: "N/A", city: "Phila",
            state: "PA", zip_code: "12312312", email: "test@test.com", emergency_contact_first_name: "Test",
            emergency_contact_last_name: "Testest", emergency_contact_phone_number: "12312312", emergency_contact_relationship: "asdfasd",
            your_church: "Bapist", your_church_point_of_contact_name: "asdafsdfasdfa", your_church_point_of_contact_number: "1231231232"
        });
    };
    AttendeeFormComponent.prototype.lazyOne = function () {
        this.attendeeForm.setValue({
            first_name: '1', last_name: '1', t_shirt: 'S', gender: 'Male',
            age: 1, medical: '1', address: '123 Adams Ave', address_2: "N/A", city: "Phila",
            state: "PA", zip_code: "12312312", email: "test@test.com"
        });
    };
    AttendeeFormComponent.prototype.lazyTwo = function () {
        this.attendeeForm.setValue({
            first_name: '2', last_name: '2', t_shirt: 'M', gender: 'Female',
            age: 2, medical: '2', address: '123 Adams Ave', address_2: "N/A", city: "Phila",
            state: "PA", zip_code: "12312312", email: "test@test.com"
        });
    };
    AttendeeFormComponent.prototype.partialUpdate = function () {
        this.attendeeForm.patchValue({ age: this.max_index });
        console.log("hi");
    };
    AttendeeFormComponent.prototype.check = function () {
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var entry = _a[_i];
            console.log(entry);
        }
        console.log(this.people.toString);
        console.log(this.people.length);
    };
    AttendeeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendee-form',
            template: __webpack_require__(/*! ./attendee-form.component.html */ "./src/app/attendee-form/attendee-form.component.html"),
            styles: [__webpack_require__(/*! ./attendee-form.component.scss */ "./src/app/attendee-form/attendee-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AttendeeFormComponent);
    return AttendeeFormComponent;
}());



/***/ }),

/***/ "./src/app/info-form/info-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/info-form/info-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Place everything that's in the form but after the attendee stuff here -->\r\n\r\n<!-- No Longer Using This Method -->\r\n\r\n<!-- <form name=\"form_info\" id=\"form_info\">\r\n\r\n<div class=\"title-container\">\r\n    <div class=\"title\">\r\n      Personal Contact\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"page-border\">\r\n    <div class=\"form-control\">\r\n    \r\n        <div class=\"FormRow\">\r\n          <div class=\"FormFieldContainer\">\r\n            <label class=\"control-label\" for=\"address\">Address</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your Address\" name=\"address\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"FormRow\">\r\n          <div class=\"FormFieldContainer\">\r\n            <label class=\"control-label\" for=\"address\">Address 2</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"N/A\" name=\"address\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"FormRow\">\r\n          <div class=\"FormFieldContainer\">\r\n            <label class=\"control-label\" for=\"city\">City</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your City\" name=\"city\" required>\r\n          </div>\r\n        </div>  \r\n        <div class=\"FormRow\">\r\n          <div class=\"MediumFormFieldContainer\">\r\n            <label class=\"control-label\" for=\"state\">State</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your State\" name=\"state\" required>\r\n          </div>\r\n          <div class=\"MediumFormFieldContainer\">\r\n            <label class=\"control-label\" for=\"zip\">Zip Code</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\" Enter Your Zip Code\" name=\"zip\" required>\r\n          </div>\r\n        </div>  \r\n        <div class=\"FormRow\">\r\n          <div class=\"FormFieldContainer\">\r\n            <label class=\"control-label\" for=\"email\">Email</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your Email\" name=\"email\" required>\r\n          </div>\r\n        </div> \r\n        <div class=\"FormRow\">\r\n          <div class=\"FormFieldContainer\">\r\n            <label class=\"control-label\" for=\"your_church\">Your Church</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your Church Name\" name=\"your_church\" required>\r\n          </div>\r\n        </div> \r\n        <div class=\"FormRow\">\r\n          <div class=\"FormFieldContainer\">\r\n            <label class=\"control-label\" for=\"your_church_point_of_contact_name\">Your Church Point of Contact Name</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your Church Point of Contact Name\" name=\"cyour_church_point_of_contact_name\" required>\r\n          </div>\r\n        </div> \r\n        <div class=\"FormRow\">\r\n          <div class=\"FormFieldContainer\">\r\n            <label class=\"control-label\" for=\"your_church_point_of_contact_name_number\">Your Church Point of Contact Number</label>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Your Church Point of Contact Phone Number\" name=\"your_church_point_of_contact_name_number\" required>\r\n          </div>\r\n        </div> \r\n    </div>\r\n</div>\r\n\r\n<div class=\"title-container\">\r\n  <div class=\"title\">\r\n    Emergency Contact\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-border\">\r\n  <div class=\"form-control\">\r\n      <div class=\"FormRow\">\r\n        <div class=\"FormFieldContainer\">\r\n          <label class=\"control-label\" for=\"emergency_contact_first_name\">First Name</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Enter First Name\" name=\"emergency_contact_first_name\" required>\r\n        </div>\r\n        <div class=\"FormFieldContainer\">\r\n          <label class=\"control-label\" for=\"emergency_contact_last_name\">Last Name</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Enter Last Name\" name=\"emergency_contact_last_name\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"FormRow\">\r\n        <div class=\"FormFieldContainer\">\r\n          <label class=\"control-label\" for=\"emergency_contact_phone_number\">Phone Number</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Enter Phone Number\" name=\"emergency_contact_phone_number\" required>\r\n        </div>\r\n      </div>  \r\n      <div class=\"FormRow\">\r\n        <div class=\"FormFieldContainer\">\r\n          <label class=\"control-label\" for=\"relationship\">Relationship</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Relationship\" name=\"relationship\" required>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"title-container\">\r\n  <div class=\"title\">\r\n    Payment\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-border\">\r\n  <div class=\"form-control\">\r\n      <div class=\"FormRow\">\r\n        <div class=\"FormFieldContainer\">\r\n          <label class=\"control-label\" for=\"card_number\">Card Number</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Enter Card Number\" name=\"card_number\" required>\r\n        </div>\r\n        <div class=\"FormFieldContainer\">\r\n          <label class=\"control-label\" for=\"name_on_card\">Name on Card</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Enter Name on Card\" name=\"name_on_card\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"FormRow\">\r\n        <div class=\"MediumFormFieldContainer\">\r\n          <label class=\"control-label\" for=\"expiration_date\">Expiration Date</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Enter Expiration Date\" name=\"expiration_date\" required>\r\n        </div> \r\n        \r\n        <div class=\"MediumFormFieldContainer\">\r\n          <label class=\"control-label\" for=\"security_code\">Security Code</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Relationship\" name=\"security_code\" required>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n</form> -->"

/***/ }),

/***/ "./src/app/info-form/info-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/info-form/info-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/info-form/info-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info-form/info-form.component.ts ***!
  \**************************************************/
/*! exports provided: InfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoFormComponent", function() { return InfoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoFormComponent = /** @class */ (function () {
    function InfoFormComponent() {
    }
    InfoFormComponent.prototype.ngOnInit = function () {
    };
    InfoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-form',
            template: __webpack_require__(/*! ./info-form.component.html */ "./src/app/info-form/info-form.component.html"),
            styles: [__webpack_require__(/*! ./info-form.component.scss */ "./src/app/info-form/info-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoFormComponent);
    return InfoFormComponent;
}());



/***/ }),

/***/ "./src/app/models/Attendee.ts":
/*!************************************!*\
  !*** ./src/app/models/Attendee.ts ***!
  \************************************/
/*! exports provided: Attendee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attendee", function() { return Attendee; });
var Attendee = /** @class */ (function () {
    function Attendee(first_name, last_name, t_shirt, gender, age, medical, address, address_2, city, state, zip_code, email, emergency_contact_first_name, emergency_contact_last_name, emergency_contact_phone_number, emergency_contact_relationship, your_church, your_church_point_of_contact_name, your_church_point_of_contact_number, days_attending, cost) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.t_shirt = t_shirt;
        this.gender = gender;
        this.age = age;
        this.medical = medical;
        this.address = address;
        this.address_2 = address_2;
        this.city = city;
        this.state = state;
        this.zip_code = zip_code;
        this.email = email;
        this.emergency_contact_first_name = emergency_contact_first_name;
        this.emergency_contact_last_name = emergency_contact_last_name;
        this.emergency_contact_phone_number = emergency_contact_phone_number;
        this.emergency_contact_relationship = emergency_contact_relationship;
        this.your_church = your_church;
        this.your_church_point_of_contact_name = your_church_point_of_contact_name;
        this.your_church_point_of_contact_number = your_church_point_of_contact_number;
        this.days_attending = days_attending;
        this.cost = cost;
    }
    return Attendee;
}());



/***/ }),

/***/ "./src/app/review-page/review-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/review-page/review-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- spacing -->\r\n<div style=\"height: 30px;\"></div>\r\n\r\n<!-- Previous Button -->\r\n<div class=\"nav-buttons\" style=\"text-align: left;\">\r\n  <button class=\"nav-button edit-button\" routerLink=\"/form\">Edit</button>\r\n</div>\r\n\r\n<div class=\"total-info\">\r\n  Total Registers:\r\n  <span *ngIf=\"registers.length != undefined\">{{registers.length}}</span>\r\n  <span *ngIf=\"registers.length == undefined\">0</span>\r\n</div>\r\n\r\n<form #checkout=\"ngForm\" (ngSubmit)=\"onSubmit(checkout)\">\r\n  <div class=\"checkout\">\r\n    <!-- spacing -->\r\n    <div style=\"height: 25px;\"></div>\r\n\r\n    <table class=\"Tablecontainer\">\r\n      <tr class=\"Tablerow\">\r\n        <th class=\"col-md-4\">Name</th>\r\n        <th class=\"col-md-2\">Age</th>\r\n        <th class=\"col-md-4\">Days Attending</th>\r\n        <th class=\"col-md-2\">Cost</th>\r\n      </tr>\r\n      <tr *ngFor=\"let attendee of registers\" class=\"Tablerow\">\r\n        <td class=\"col-md-4\">{{attendee.first_name}} {{attendee.last_name}}\r\n          <br>Gender: {{attendee.gender}}\r\n          <br>Shirt Size: {{attendee.t_shirt}}</td>\r\n        <td class=\"col-md-2\">{{attendee.age}}</td>\r\n        <td class=\"col-md-4\">{{attendee.days_attending}}</td>\r\n        <td class=\"col-md-2\">{{attendee.cost | currency }}</td>\r\n    </table>\r\n   \r\n      <div class=\"FormFieldContainer\">\r\n        <label class=\"discount-label\">Discount Code</label>\r\n        <input #discount class=\"discount\" id=\"discount\" type=\"text\" placeholder=\"Enter Promo Code\" name=\"discount\" (keyup)=\"checkDiscount(discount.value)\">\r\n       </div>    \r\n      <div class=\"cost-info\">Sub-Total: ${{original_cost}}</div>\r\n      <div class=\"cost-info\">Discount: - ${{cost_diff}}</div>\r\n      <div class=\"cost-info\">Total: ${{total_cost}}</div>\r\n  </div>\r\n\r\n      <!-- spacing  -->\r\n      <div style=\"height: 30px;\"></div>\r\n  <div class=\"payment-title\">Payment</div>\r\n\r\n\r\n  <div class=\"checkout\">\r\n    <div style=\"height: 20px;\"></div>\r\n    <label for=\"card-info\" id=\"card-title\">Card Information</label>\r\n    <div class=\"CardRow\">\r\n      <div id=\"card-info\" #cardInfo></div>\r\n\r\n      <div id=\"card-errors\" role=\"alert\" *ngIf=\"error\">{{ error }}</div>\r\n    </div>\r\n\r\n    <label class=\"email-info\">Email For Receipt</label>\r\n    <div class='CardRow row'>\r\n      <div class=\"EmailGroup\">\r\n        <input #email (keyup)=\"onKey(email.value)\" id=\"email\" name=\"email\" class=\"field\" placeholder=\"jane.doe@example.com\" ngModel\r\n          email required/>\r\n      </div>\r\n    </div>\r\n    <div style=\"height: 30px;\"></div>\r\n  </div>\r\n\r\n  <button [disabled]='isDisabled()' class=\"primary-button pay-button\" type=\"submit\">Pay {{total_cost | currency}}</button>\r\n\r\n  <!-- spacing -->\r\n  <div style=\"height: 200px;\"></div>\r\n\r\n</form>\r\n\r\n<!-- <button class=\"primary-button\" (click)=\"postToGoogle()\">Post to Google Form</button> -->\r\n<p *ngIf=\"loading === true\">Loading...</p>"

/***/ }),

/***/ "./src/app/review-page/review-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/review-page/review-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/review-page/review-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-page/review-page.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageComponent", function() { return ReviewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_google_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/google-service.service */ "./src/app/services/google-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ReviewPageComponent = /** @class */ (function () {
    function ReviewPageComponent(cd, userService, http, googleService, router) {
        this.cd = cd;
        this.userService = userService;
        this.http = http;
        this.googleService = googleService;
        this.router = router;
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cardHandler = this.onChange.bind(this);
        this.loading = false;
        this.email = '';
        this.total_cost = 0;
        this.original_cost = 0;
        this.cost_diff = 0;
        this.button_disabled = false;
    }
    ReviewPageComponent.prototype.ngOnInit = function () {
        //get data from form registrations
        this.registers = this.userService.getAllRegisters();
        console.log("Registers: ", this.registers);
        //scrolls to top of screen
        window.scrollTo(0, 0);
        //Calculates total for registers
        this.total_cost = this.registers.length * 155;
        this.original_cost = this.registers.length * 155;
        // for(var i = 0; i<this.registers.length; i++){
        //   console.log("Old total is: " + this.total_cost);
        //   console.log("Adding " + this.registers[i].cost);
        //   this.total_cost += this.registers[i].cost;
        //   console.log("New total is: " + this.total_cost);
        // }
        // console.log(this.total_cost);
        this.button_disabled = false;
    };
    ReviewPageComponent.prototype.ngAfterViewInit = function () {
        var style = {
            base: {
                lineHeight: '24px',
                fontFamily: 'monospace',
                fontSmoothing: 'antialiased',
                fontSize: '19px',
                '::placeholder': {
                    color: 'purple'
                }
            }
        };
        this.card = elements.create('card');
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
    };
    ReviewPageComponent.prototype.ngOnDestroy = function () {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    };
    ReviewPageComponent.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = null;
        }
        this.cd.detectChanges();
    };
    ReviewPageComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, token, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.button_disabled = true;
                        return [4 /*yield*/, stripe.createToken(this.card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        if (error) {
                            console.log('Something is wrong:', error);
                            this.button_disabled = false;
                        }
                        else {
                            console.log('Success!');
                            // ...send the token to the your backend to process the charge
                            this.processCharge(token).then(function (success) { return _this.postToGoogle(); }, function (error) { return console.error("Stripe process charge error", error); });
                            this.router.navigate(['/', 'thank-you']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewPageComponent.prototype.processCharge = function (token) {
        var _this = this;
        var task_url = 'https://wt-0abace7df40ea939072b329aa74c0316-0.sandbox.auth0-extend.com/webtask-stripe-payment';
        // var task_url = 'https://wt-0abace7df40ea939072b329aa74c0316-0.sandbox.auth0-extend.com/stripe-payment';
        var promise = new Promise(function (resolve, reject) {
            var command = {
                amount: _this.total_cost * 100,
                currency: 'usd',
                description: 'Registration cost for ' + _this.email,
                source: token,
                receipt_email: _this.email
            };
            _this.http.post(task_url, command).subscribe(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
        return promise;
    };
    ReviewPageComponent.prototype.onKey = function (value) {
        this.email = value;
    };
    ReviewPageComponent.prototype.postToGoogle = function () {
        var _this = this;
        console.log("posting to google: ", this.registers);
        this.loading = true;
        //google sheet response is html, but for some reason, http tries to parse json.
        //this project will reject the html. I think it has to do with http header.
        this.googleService.post(this.registers).then(function () { _this.loading = false; }, function () { _this.loading = false; });
    };
    ReviewPageComponent.prototype.isDisabled = function () {
        return this.button_disabled;
    };
    ReviewPageComponent.prototype.checkDiscount = function (discount) {
        var _this = this;
        var task_url = 'https://wt-0abace7df40ea939072b329aa74c0316-0.sandbox.auth0-extend.com/handle-discount';
        var promise = new Promise(function (resolve, reject) {
            var command = {
                code: discount
            };
            _this.http.post(task_url, command).subscribe(function (data) {
                _this.dataObj = data;
                _this.total_cost = _this.dataObj.newCost * _this.registers.length;
                _this.original_cost = 155 * _this.registers.length;
                _this.cost_diff = _this.original_cost - _this.total_cost;
            }, function (error) { return reject(error); });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardInfo'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReviewPageComponent.prototype, "cardInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReviewPageComponent.prototype, "completed", void 0);
    ReviewPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-page',
            template: __webpack_require__(/*! ./review-page.component.html */ "./src/app/review-page/review-page.component.html"),
            styles: [__webpack_require__(/*! ./review-page.component.scss */ "./src/app/review-page/review-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_google_service_service__WEBPACK_IMPORTED_MODULE_4__["GoogleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReviewPageComponent);
    return ReviewPageComponent;
}());



/***/ }),

/***/ "./src/app/services/google-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/google-service.service.ts ***!
  \****************************************************/
/*! exports provided: GoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleService", function() { return GoogleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleService = /** @class */ (function () {
    function GoogleService(http) {
        this.http = http;
        this.url = "https://docs.google.com/forms/d/e/1FAIpQLSdpCxARcwWV5BeH5kjj45vVzJgrdOca4e78vq2KHPB2epx8yw/formResponse";
    }
    GoogleService.prototype.post = function (registers) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            for (var i in registers) {
                var body = "entry.736264477=" + registers[i].first_name +
                    ("&entry.1216232379=" + registers[i].last_name) +
                    ("&entry.1922331484=" + registers[i].t_shirt) +
                    ("&entry.1808161308=" + registers[i].gender) +
                    ("&entry.982307170=" + registers[i].age) +
                    ("&entry.237564014=" + registers[i].medical) +
                    ("&entry.475860172=" + registers[i].address) +
                    ("&entry.1132819387=" + registers[i].address_2) +
                    ("&entry.882873948=" + registers[i].city) +
                    ("&entry.1300146252=" + registers[i].state) +
                    ("&entry.1995735036=" + registers[i].zip_code) +
                    ("&entry.1163380930=" + registers[i].email) +
                    ("&entry.1814348022=" + registers[i].your_church) +
                    ("&entry.1795731922=" + registers[i].your_church_point_of_contact_name) +
                    ("&entry.42598533=" + registers[i].your_church_point_of_contact_number) +
                    ("&entry.1822987082=" + registers[i].emergency_contact_first_name) +
                    ("&entry.854313620=" + registers[i].emergency_contact_last_name) +
                    ("&entry.1752027412=" + registers[i].emergency_contact_phone_number) +
                    ("&entry.516070659=" + registers[i].emergency_contact_relationship) +
                    ("&entry.1868024724=" + registers[i].days_attending) +
                    ("&entry.345154263=" + registers[i].cost) +
                    "&entry.1114223182=Yes";
                _this.http.post(_this.url, body, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                }).subscribe(function (data) { return resolve(data); }, function (error) { return reject(error); });
            }
        });
        return promise;
    };
    GoogleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleService);
    return GoogleService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.registers = [];
    }
    UserService.prototype.addAttendee = function (index, attendee) {
        this.registers[index] = attendee;
    };
    UserService.prototype.removeAttendee = function (index) {
        this.registers.splice(index, 1);
    };
    UserService.prototype.getAllRegisters = function () {
        return this.registers;
    };
    UserService.prototype.setAllRegisters = function (registers) {
        for (var i in registers) {
            this.registers.push(registers[i]);
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/thankyoupage/thankyoupage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/thankyoupage/thankyoupage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- spacing -->\r\n<div style=\"height: 30px;\"></div>\r\n\r\n\r\n<div class=\"ty-header\">\r\n\tThank you for registering!\r\n</div>\r\n\r\n<div class=\"ty-info\">\r\n\tYou will receive a confirmation email shortly within the next 24 hours. If not, contact us at: <b>cvcfcontact@gmail.com.</b> Looking\r\n\tforward to seeing you there!\r\n</div>\r\n<!-- \r\n<div class=\"share-link\">\r\n\t<a href=\"https://www.facebook.com/cvcfministry/\">\r\n\t\t<img src=\"../assets/check_flat/facebook.png\" alt=\"share on facebook\" height=\"40\" width=\"200\">\r\n\t</a>\r\n</div> -->\r\n\r\n\r\n<div class=\"LinkContainer h4\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"MediumFormFieldContainer\">\r\n\t\t\t<a class=\"LinkButton\" href=\"https://www.facebook.com/cvcfministry/\">\r\n\t\t\t\tCheck out our Facebook\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"MediumFormFieldContainer\">\r\n\t\t\t<a class=\"LinkButton\" href=\"https://cvcfministry.org\">\r\n\t\t\t\tReturn to CVCF Website\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/thankyoupage/thankyoupage.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/thankyoupage/thankyoupage.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thankyoupage/thankyoupage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/thankyoupage/thankyoupage.component.ts ***!
  \********************************************************/
/*! exports provided: ThankyoupageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyoupageComponent", function() { return ThankyoupageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankyoupageComponent = /** @class */ (function () {
    function ThankyoupageComponent() {
    }
    ThankyoupageComponent.prototype.ngOnInit = function () {
        //scrolls to top of screen
        window.scrollTo(0, 0);
    };
    ThankyoupageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thankyoupage',
            template: __webpack_require__(/*! ./thankyoupage.component.html */ "./src/app/thankyoupage/thankyoupage.component.html"),
            styles: [__webpack_require__(/*! ./thankyoupage.component.scss */ "./src/app/thankyoupage/thankyoupage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankyoupageComponent);
    return ThankyoupageComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jha\Documents\CVCF\CustomRegistrationForm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map