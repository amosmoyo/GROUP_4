(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-users-user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/login/login.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main container bg-light\">\n\t<br>\n<div style=\"min-height: 80vh;\">\n  <div class=\"text-center\">\n\t\t<h1 style=\"color: rgb(74, 146, 212);\">CROMO</h1>\n\t\t<p class=\"lead\" style=\"margin-bottom: 20px;\">Please sign in here...</p>\n\t</div>\n\t<div class=\"sub-main\">\n\t  <br>\n\t  <br>\n\t  <div class=\"col-md-6\">\n\t\t<form autocomplete=\"off\" novalidate #loginForm=\"ngForm\" (ngSubmit)=\"save(loginForm)\">\n\n\t\t\t<div class=\"form-group\"\n\t\t\t\t[ngClass] = \"{'error': usern.invalid && (usern.touched || usern.dirty || mouseOver)}\"\n\t\t\t>\n\t\t\t\t<label for=\"email\">Username:</label>\n\t\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\t\tngModel\n\t\t\t\t\tname=\"email\"\n\t\t\t\t\t#usern = \"ngModel\"\n\t\t\t\t\tplaceholder=\" Email Address...\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\trequired\n\t\t\t\t  email\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"usern.invalid && (usern.touched || usern.dirty || mouseOver)\">\n\t\t\t\t\t<em *ngIf=\"usern.errors.required\">email is required.</em>\n\t\t\t\t\t<em *ngIf=\"usern.errors.email\">Enter a valid email.</em>\n\t\t\t\t</div>\n            </div>\n\n\t\t\t<div class=\"form-group\"\n\t\t\t     [ngClass] = \"{'error': pass.invalid && (pass.touched || pass.dirty || mouseOver)}\"\n\t\t\t>\n\t\t\t\t<label for=\"password\">Password:</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tngModel\n\t\t\t\t\tname=\"password\"\n\t\t\t\t\t#pass = \"ngModel\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\" Password...\"\n\t\t\t\t\trequired\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"pass.invalid && (pass.touched || pass.dirty || mouseOver)\">\n\t\t\t\t\t<em *ngIf=\"pass.errors.required\">password is required.</em>\n\t\t\t\t</div>\n            </div>\n\n\t\t\t<span (mouseenter)=\"mouseOver = true\" (mouseleave)=\"mouseOver = false\">\n\t\t\t<button type=\"submit\" class=\"btn btn-outline-secondary \" id=\"btn-one\" [disabled]=\"loginForm.invalid || loginForm.invalid\">Save</button>\n\t\t\t</span>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn-two\" (click)=\"cancel()\">Cancel</button>\n\n        </form>\n       <br><br>\n       <p style=\"color: #fff;\">Dont have an account? please <a routerLink=\"/user/signup\" style=\"color: rgb(250, 10, 10); font-weight: 100;\"> REGISTER.</a></p>\n     </div>\n   </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main container bg-light\">\n\t<br>\n\t<div class=\"text-center\">\n\t\t<h1 style=\"color: rgb(74, 146, 212);\">CROMO</h1>\n\t\t<p class=\"lead\" style=\"margin-bottom: 20px;\">Please Register here...</p>\n\t</div>\n\t<div class=\"sub-main\">\n\t  <br>\n\t  <br>\n\t  <div class=\"col-md-6\">\n\t\t<form autocomplete=\"off\" novalidate #signUpForm=\"ngForm\"  (ngSubmit)=\"save(signUpForm)\">\n\n\t\t <div class=\"form-group\"\n\t\t\t[ngClass] = \"{'error': fname.invalid && (fname.touched || fname.dirty || mouseOver)}\"\n\t\t >\n\t\t\t\t<label for=\"fname\">Firstname *</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tngModel\n\t\t\t\t\tname=\"fname\"\n\t\t\t\t\t#fname = \"ngModel\"\n\t\t\t\t\tplaceholder=\"Firstname...\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\trequired\n\t\t\t\t\tpattern = \"[a-zA-Z].*\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"fname.invalid && (fname.touched || fname.dirty || mouseOver)\">\n\t\t\t\t\t<em *ngIf=\"fname.errors.required\">first-name is required.</em>\n\t\t\t\t\t<em *ngIf=\"fname.errors.pattern\">first-name must  with a letter.</em>\n\t\t\t\t</div>\n\t\t  </div>\n\n\t\t  <div class=\"form-group\"\n\t\t\t  [ngClass] = \"{'error': sname.invalid && (sname.touched || sname.dirty || mouseOver)}\"\n\t\t  >\n\t\t\t\t<label for=\"username\">Lastname *</label>\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tngModel\n\t\t\t\t\tname=\"sname\"\n\t\t\t\t\t#sname = \"ngModel\"\n\t\t\t\t\tplaceholder=\"Lastnameame...\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\trequired\n\t\t\t\t\tpattern = \"[a-zA-Z].*\"\n\t\t\t\t>\n\t\t\t\t<div *ngIf=\"sname.invalid && (sname.touched || sname.dirty || mouseOver)\">\n\t\t\t\t\t<em *ngIf=\"sname.errors.required\">lastname name is required.</em>\n\t\t\t\t\t<em *ngIf=\"sname.errors.pattern\">lastname must  with a letter.</em>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\"\n\t\t\t\t[ngClass] = \"{'error': usern.invalid && (usern.touched || usern.dirty || mouseOver)}\"\n\t\t\t>\n\t\t\t\t\t<label for=\"username\">Username *</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tngModel\n\t\t\t\t\t\tname=\"username\"\n\t\t\t\t\t\t#usern = \"ngModel\"\n\t\t\t\t\t\tplaceholder=\" Username...\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tid=\"username\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tpattern = \"[a-zA-Z].*\"\n\t\t\t\t\t>\n\t\t\t\t\t<div *ngIf=\"usern.invalid && (usern.touched || usern.dirty || mouseOver)\">\n\t\t\t\t\t\t<em *ngIf=\"usern.errors.required\">username is required.</em>\n\t\t\t\t\t\t<em *ngIf=\"usern.errors.pattern\">username must  with a letter.</em>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n        <div class=\"form-group\"\n             [ngClass] = \"{'error': useremail.invalid && (useremail.touched || useremail.dirty || mouseOver)}\"\n        >\n\t\t\t\t\t<label for='email'>Email *</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tname=\"email\"\n\t\t\t\t\t\tngModel\n\t\t\t\t\t\tplaceholder=\"enter email\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\tid=\"email\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\temail\n\t\t\t\t\t\t#useremail=\"ngModel\"\n\t\t\t\t\t>\n\t\t\t\t\t<div *ngIf=\"useremail.invalid && (useremail.touched || useremail.dirty || mouseOver)\">\n\t\t\t\t\t\t<em *ngIf=\"useremail.errors.required\">email is required.</em>\n\t\t\t\t\t\t<em *ngIf=\"useremail.errors.email\">enter a valid email.</em>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t<div ngModelGroup=\"passwordGroup\"\n\t\t\t\t #passwordGroup=\"ngModelGroup\"\n\t\t\t\t [ngClass] = \"{'error':\n\t\t\t\t\t\t\t   c_pass.invalid && (c_pass.touched || c_pass.dirty || mouseOver) && !c_pass.errors.required}\"\n\t\t    >\n\t\t\t   <div class=\"form-group\"\n\t\t\t\t   [ngClass] = \"{'error': pass.invalid && (pass.touched || pass.dirty || mouseOver)}\"\n\t\t\t   >\n\t\t\t\t   <label for=\"password\">Password *</label>\n\t\t\t\t   <input\n\t\t\t\t\t   type=\"password\"\n\t\t\t\t\t   ngModel\n\t\t\t\t\t   name=\"password\"\n\t\t\t\t\t   #pass = \"ngModel\"\n\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t   class=\"form-control\"\n\t\t\t\t\t   (input)=\"c_pass.control.updateValueAndValidity()\"\n\t\t\t\t\t   id=\"password\"\n\t\t\t\t\t   placeholder=\" Password...\"\n\t\t\t\t\t   required\n\t\t\t\t   >\n\t\t\t   <div *ngIf=\"pass.invalid && (pass.touched || pass.dirty || mouseOver)\">\n\t\t\t\t   <em *ngIf=\"pass.errors.required\">password is required.</em>\n\t\t\t   </div>\n\t\t       </div>\n\n\t\t   <div class=\"form-group\"\n\t\t\t\t[ngClass] = \"{'error': pass.invalid && (pass.touched || pass.dirty || mouseOver)}\"\n\t\t   >\n\t\t\t  <label for=\"c_password\">Confirm Password *</label>\n\t\t\t  <input\n\t\t\t\t  type=\"password\"\n\t\t\t\t  ngModel\n\t\t\t\t  name=\"c_password\"\n\t\t\t\t  #c_pass = \"ngModel\"\n\t\t\t\t  appconfirmpassword=\"password\"\n\t\t\t\t  class=\"form-control\"\n\t\t\t\t  id=\"c_password\"\n\t\t\t\t  placeholder=\" Confirm password...\"\n\t\t\t\t  required\n\t\t\t  >\n\t\t\t  <div *ngIf=\"c_pass.invalid && (c_pass.touched || c_pass.dirty || mouseOver)\">\n\t\t\t\t  <em *ngIf=\"c_pass.errors.required\">Confirm password.</em>\n\t\t\t\t  <em *ngIf=\"c_pass.errors.notEqual && !c_pass.errors.required\">password does not match.</em>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\n\t\t\t<span (mouseenter)=\"mouseOver = true\" (mouseleave)=\"mouseOver = false\">\n\t\t\t<button type=\"submit\" class=\"btn btn-outline-secondary\" id=\"btn-one\" [disabled]=\"signUpForm.invalid || signUpForm.invalid\">Save</button>\n\t\t\t</span>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn-two\" (click)=\"cancel()\">Cancel</button>\n\n        </form>\n       <br><br>\n       <p style=\"color: #fff;\">Have an account? please <a routerLink=\"/user/login\" style=\"color: rgb(250, 10, 10); font-weight: 100;\"> LOGIN.</a></p>\n     </div>\n   </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/user-dashboard/user-dashboard.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/user-dashboard/user-dashboard.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main\">\r\n\t<mat-card id=\"matCard\">\r\n\t\t<div>\r\n\t\t\t<div *ngIf=\"user\">\r\n        <div>\r\n          <p style=\"text-align: right;\"><button style=\"background-color: rgb(20, 3, 36); color: #fff;\">welcome {{user.username}}</button></p>\r\n          <h3>PROFILE INFORMATION</h3>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<button class=\"btn btn-outline-secondary one\">ID:{{user.id}}</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<button class=\"btn btn-outline-secondary one\">Name: {{user.firstname}} {{user.lastname}}</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n                        <button class=\"btn btn-outline-secondary one\">{{user.email}}</button>\r\n          </div>\r\n        </div>\r\n        <div>\r\n        </div>\r\n\r\n      </div>\r\n\t\t\t<div>\r\n        <br>\r\n\t\t\t\t<h2>Dashboard Details.</h2>\r\n\t\t\t\t<br>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<mat-accordion>\r\n\t\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n\t\t\t\t\t\t\t\t\t\t\t (closed)=\"panelOpenState = false\" id=\"matExpansionPanel\">\r\n\t\t\t\t\t\t  <mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t<mat-panel-title id=\"matPanelTitle\">\r\n\t\t\t\t\t\t\t  Decorator\r\n\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t  The panel {{panelOpenState ? 'open' : 'closed'}}\r\n\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t  </mat-expansion-panel-header>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\t\t\t\t\t  </mat-accordion>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br><br>\r\n\t\t\t\t<div *ngIf=\"payDetail\">\r\n\t\t\t\t\t<mat-accordion  *ngFor=\"let pay of payDetail \" >\r\n\t\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n\t\t\t\t\t\t\t\t\t\t\t (closed)=\"panelOpenState = false\" class=\"payments\">\r\n\t\t\t\t\t\t  <mat-expansion-panel-header class=\"matexpansionpanelheader\">\r\n\t\t\t\t\t\t\t<mat-panel-title id=\"mat-panel-title\">\r\n\t\t\t\t\t\t\t  Success Pay\r\n\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t  The panel {{panelOpenState ? 'open' : 'closed'}}\r\n\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t  </mat-expansion-panel-header>\r\n\t\t\t\t\t\t  <div>\r\n                <p>Payment ID: {{pay.id}}</p>\r\n                <p>Amount Charge: {{pay.amount | currency:'Ksh': 'symbol':'1.2-2'}}</p>\r\n                <p>Date: {{pay.date}}</p>\r\n              </div>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n            </mat-accordion>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</mat-card>\r\n\t<br>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  padding-top: 15vh;\r\n  min-height: 100vh;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border: 0.1px solid #eee;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nlabel {\r\n  color: rgb(74, 146, 212);\r\n  font-weight: 900;\r\n}\r\n\r\n.error input {\r\n  background-color: rgb(241, 168, 168);\r\n}\r\n\r\nem {\r\n  color: red;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.sub-main {\r\n  border-radius: 10px;\r\n  border: 0.5px solid rgb(74, 146, 212);\r\n  background-color: rgb(74, 146, 212);\r\n}\r\n\r\nform {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#btn-one {\r\n  color: #fff;\r\n  background-color: rgb(59, 7, 126);\r\n  margin-right: 10px;\r\n}\r\n\r\n#btn-two {\r\n  color: rgb(107, 19, 103);\r\n  background-color: #fff;\r\n}\r\n\r\n.toast-top-center {\r\n  top: 30vh;\r\n  margin: 30vh auto;\r\n  left: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcGFkZGluZy10b3A6IDE1dmg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjZWVlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiByZ2IoNzQsIDE0NiwgMjEyKTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uZXJyb3IgaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDE2OCwgMTY4KTtcclxufVxyXG5cclxuZW0ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zdWItbWFpbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYig3NCwgMTQ2LCAyMTIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NCwgMTQ2LCAyMTIpO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jYnRuLW9uZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA3LCAxMjYpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI2J0bi10d28ge1xyXG4gIGNvbG9yOiByZ2IoMTA3LCAxOSwgMTAzKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udG9hc3QtdG9wLWNlbnRlciB7XHJcbiAgdG9wOiAzMHZoO1xyXG4gIG1hcmdpbjogMzB2aCBhdXRvO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toastr */ "./src/app/components/users/toastr.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth, toastr) {
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    LoginComponent.prototype.save = function (form) {
        if (form.invalid) {
            return;
        }
        var user = {
            email: form.value.email,
            password: form.value.password
        };
        this.auth.login(user);
    };
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/users/signup/confirmed.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/users/signup/confirmed.directive.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmedEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedEqualValidatorDirective", function() { return ConfirmedEqualValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ConfirmedEqualValidatorDirective = /** @class */ (function () {
    function ConfirmedEqualValidatorDirective() {
    }
    ConfirmedEqualValidatorDirective_1 = ConfirmedEqualValidatorDirective;
    ConfirmedEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appconfirmpassword);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { notEqual: true };
        }
        return null;
    };
    var ConfirmedEqualValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmedEqualValidatorDirective.prototype, "appconfirmpassword", void 0);
    ConfirmedEqualValidatorDirective = ConfirmedEqualValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[appconfirmpassword]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    useExisting: ConfirmedEqualValidatorDirective_1,
                    multi: true
                }
            ]
        })
    ], ConfirmedEqualValidatorDirective);
    return ConfirmedEqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/components/users/signup/signup.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/users/signup/signup.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  padding-top: 15vh;\r\n  min-height: 120vh;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border: 0.1px solid #eee;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nlabel {\r\n  color: #fff;\r\n  font-weight: 900;\r\n}\r\n\r\n.error input {\r\n  background-color: rgb(241, 168, 168);\r\n}\r\n\r\nem {\r\n  color: red;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.sub-main {\r\n  border-radius: 10px;\r\n  border: 0.5px solid  rgb(74, 146, 212);\r\n  background-color: rgb(74, 146, 212);\r\n}\r\n\r\nform {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#btn-one {\r\n  color: rgb(74, 146, 212);\r\n  background-color: #fff;\r\n  margin-right: 10px;\r\n}\r\n\r\n#btn-two {\r\n  color: rgb(74, 146, 212);\r\n  background-color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwYWRkaW5nLXRvcDogMTV2aDtcclxuICBtaW4taGVpZ2h0OiAxMjB2aDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDAuMXB4IHNvbGlkICNlZWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmVycm9yIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxNjgsIDE2OCk7XHJcbn1cclxuXHJcbmVtIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc3ViLW1haW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAgcmdiKDc0LCAxNDYsIDIxMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc0LCAxNDYsIDIxMik7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNidG4tb25lIHtcclxuICBjb2xvcjogcmdiKDc0LCAxNDYsIDIxMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNidG4tdHdvIHtcclxuICBjb2xvcjogcmdiKDc0LCAxNDYsIDIxMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/users/signup/signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/users/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toastr */ "./src/app/components/users/toastr.ts");
/* harmony import */ var _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, toastr, auth) {
        this.router = router;
        this.toastr = toastr;
        this.auth = auth;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    SignupComponent.prototype.save = function (form) {
        if (form.invalid) {
            return;
        }
        var user = {
            firstname: form.value.fname,
            lastname: form.value.sname,
            username: form.value.username,
            email: form.value.email,
            password: form.value.passwordGroup.password
        };
        this.auth.register(user);
    };
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    SignupComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _toastr__WEBPACK_IMPORTED_MODULE_3__["Toastr"] },
        { type: _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/users/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _toastr__WEBPACK_IMPORTED_MODULE_3__["Toastr"],
            _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user-dashboard/user-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/users/user-dashboard/user-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  padding-top: 20vh;\r\n  background-color: #fff;\r\n}\r\n\r\nh2,\r\nh3 {\r\n  color: rgb(0, 119, 255);\r\n}\r\n\r\n#matCard {\r\n  min-height: 80vh;\r\n  background-color: rgb(189, 205, 223);\r\n}\r\n\r\n.payments {\r\n  color: rgb(58, 4, 102);\r\n}\r\n\r\n.one {\r\n  background-color: rgb(0, 119, 255);\r\n  color: #fff;\r\n  cursor: pointer;\r\n  min-width: 255px;\r\n  text-align: left;\r\n}\r\n\r\n.one:hover {\r\n  background-color: #fff;\r\n  color: rgb(0, 119, 255);\r\n}\r\n\r\n#matExpansionPanel {\r\n  background-color: rgb(126, 180, 241);\r\n}\r\n\r\n#matPanelTitle {\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n\r\n#mat-panel-title {\r\n  color: rgb(39, 9, 63);\r\n}\r\n\r\n.matexpansionpanelheader {\r\n  font-weight: 100;\r\n  font-size: 1em;\r\n  color: rgb(39, 9, 63);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaDIsXHJcbmgzIHtcclxuICBjb2xvcjogcmdiKDAsIDExOSwgMjU1KTtcclxufVxyXG5cclxuI21hdENhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMjA1LCAyMjMpO1xyXG59XHJcblxyXG4ucGF5bWVudHMge1xyXG4gIGNvbG9yOiByZ2IoNTgsIDQsIDEwMik7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTksIDI1NSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1pbi13aWR0aDogMjU1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm9uZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogcmdiKDAsIDExOSwgMjU1KTtcclxufVxyXG5cclxuI21hdEV4cGFuc2lvblBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCAxODAsIDI0MSk7XHJcbn1cclxuXHJcbiNtYXRQYW5lbFRpdGxlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI21hdC1wYW5lbC10aXRsZSB7XHJcbiAgY29sb3I6IHJnYigzOSwgOSwgNjMpO1xyXG59XHJcblxyXG4ubWF0ZXhwYW5zaW9ucGFuZWxoZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgY29sb3I6IHJnYigzOSwgOSwgNjMpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/users/user-dashboard/user-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/users/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toastr */ "./src/app/components/users/toastr.ts");
/* harmony import */ var _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cart-items/cart/cart.service */ "./src/app/components/cart-items/cart/cart.service.ts");






var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(auth, router, toastr, payment) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.payment = payment;
        this.panelOpenState = false;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getDashboard()
            .subscribe(function (res) {
            if (res) {
                var data = {
                    id: res.id,
                    firstname: res.firstname,
                    lastname: res.lastname,
                    username: res.username,
                    email: res.email
                };
                _this.user = data;
                // tslint:disable-next-line: max-line-length
                _this.toastr.success("_______________________________________________________________________________________________________________Welcome to Your Dashboard " + data.username + " .................................................................................................................");
            }
            else {
                _this.toastr.warning('Errr');
            }
        }, function (err) {
            console.log('The error is amos', err);
        });
        this.payment.paymentInfo().subscribe(function (res) {
            // tslint:disable-next-line: no-unused-expression
            _this.payDetail = res.data;
        }, function (err) {
            console.log('The error is ', err);
        });
    };
    UserDashboardComponent.ctorParameters = function () { return [
        { type: _autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"] },
        { type: _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceT"] }
    ]; };
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/components/users/user-dashboard/user-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"],
            _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceT"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user/user.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/users/user/user.module.ts ***!
  \******************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/components/users/signup/signup.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-dashboard/user-dashboard.component */ "./src/app/components/users/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_confirmed_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signup/confirmed.directive */ "./src/app/components/users/signup/confirmed.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_materials_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/materials/material/material.module */ "./src/app/materials/material/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Guard */ "./src/app/components/Guard.ts");












var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'dashboard', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"], canActivate: [_Guard__WEBPACK_IMPORTED_MODULE_11__["AuthGurds"]] }
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"], _signup_confirmed_directive__WEBPACK_IMPORTED_MODULE_7__["ConfirmedEqualValidatorDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], src_app_materials_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-users-user-user-module-es5.js.map