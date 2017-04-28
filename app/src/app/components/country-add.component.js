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
var router_1 = require("@angular/router");
var CountryAddComponent = (function () {
    function CountryAddComponent(countryService, _router) {
        this.countryService = countryService;
        this._router = _router;
        this.country = {};
        this.isEdit = false;
    }
    CountryAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.countryService.createcountry(this.country).
            subscribe(function (country) { }, //  this.country.push(country),
        function (//  this.country.push(country),
            error) { return _this.errorMessage = error; });
        this._router.navigateByUrl('/');
    };
    return CountryAddComponent;
}());
CountryAddComponent = __decorate([
    core_1.Component({
        selector: 'country-add',
        templateUrl: 'app/components/country-form.html',
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService, router_1.Router])
], CountryAddComponent);
exports.CountryAddComponent = CountryAddComponent;
//# sourceMappingURL=country-add.component.js.map