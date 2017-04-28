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
var CountryEditComponent = (function () {
    function CountryEditComponent(_countryService, _router, _route) {
        this._countryService = _countryService;
        this._router = _router;
        this._route = _route;
        this.country = {};
        this.isEdit = true;
    }
    CountryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this._countryService.getCountryById(this.id).subscribe(function (country) {
            _this.country = country;
        });
    };
    CountryEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this._countryService.updateCountryByCountryObj(this.country).subscribe(function (ans) { }, function (error) { return _this.errorMessage = error; });
        this._router.navigateByUrl('/');
    };
    return CountryEditComponent;
}());
CountryEditComponent = __decorate([
    core_1.Component({
        selector: 'country-edit',
        templateUrl: 'app/components/country-form.html',
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService, router_1.Router, router_1.ActivatedRoute])
], CountryEditComponent);
exports.CountryEditComponent = CountryEditComponent;
//# sourceMappingURL=country-edit.component.js.map