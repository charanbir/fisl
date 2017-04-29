"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var country_service_1 = require("../services/country.service");
var CountryListComponent = (function () {
    function CountryListComponent(countryService) {
        this.countryService = countryService;
    }
    CountryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.getCountrys().subscribe(function (countries) {
            _this.countries = countries;
        });
    };
    CountryListComponent.prototype.deleteCountry = function (id) {
        var _this = this;
        this.countryService.deleteCountry(id).subscribe(function (del) {
            for (var i = 0; i < _this.countries.length; i++) {
                if (id == _this.countries[i]._id) {
                    _this.countries.splice(i, 1);
                }
            }
        });
    };
    return CountryListComponent;
}());
CountryListComponent = __decorate([
    core_1.Component({
        selector: 'countries',
        template: "\n\t\t<div class=\"country-list\">\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>#</th>\n\t\t\t\t\t<th>Code</th>\n\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t\t<tr *ngFor=\"let country of countries, let i = index \">\n\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t<td>{{country.code}}</td>\n\t\t\t\t\t<td>{{country.desc}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a  [routerLink]=\"['/edit', country._id]\" class=\"btn btn-default\">Edit</a> \n\t\t\t\t\t\t<a  (click)=\"deleteCountry(country._id)\" class=\"btn btn-danger\">Delete</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t   </table>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryListComponent);
exports.CountryListComponent = CountryListComponent;
//# sourceMappingURL=country-list.component.js.map