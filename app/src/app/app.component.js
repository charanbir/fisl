"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'fisl-app',
        template: "<nav class=\"navbar navbar-default\">" +
        		"<div class=\"container-fluid\">" +
        		"<div class=\"navbar-header\">" +
        		"<a class=\"navbar-brand\" routerLink='/'>USC FISL</a>" +
        		"</div>" +
        		"<ul class=\"nav navbar-nav\">" +
        		"<li><a routerLink='/'>List of Products</a></li>" +
        		"<li><a routerLink='/add'>Create New Product</a></li>" +
        		"<li><a routerLink='/country'>List of Countries</a></li>" +
        		"<li><a routerLink='/country/add'>Create New Country</a></li>" +
        		"</ul>" +
        		"</div>" +
        		"</nav>" +
        		"<div class=\"container\">\n\t\t<router-outlet></router-outlet></div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map