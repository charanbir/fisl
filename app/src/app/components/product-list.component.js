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
var product_service_1 = require("../services/product.service");
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.productService.deleteProduct(id).subscribe(function (del) {
            for (var i = 0; i < _this.products.length; i++) {
                if (id == _this.products[i]._id) {
                    _this.products.splice(i, 1);
                }
            }
        });
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'products',
        template: "\n\t\t<div class=\"product-list\">\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>#</th>\n\t\t\t\t\t<th>Code</th>\n\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t<th>Country</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t\t<tr *ngFor=\"let product of products, let i = index \">\n\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t<td>{{product.code}}</td>\n\t\t\t\t\t<td>{{product.desc}}</td>\n\t\t\t\t\t<td>{{product.country}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a  [routerLink]=\"['/edit', product._id]\" class=\"btn btn-default\">Edit</a> \n\t\t\t\t\t\t<a  (click)=\"deleteProduct(product._id)\" class=\"btn btn-danger\">Delete</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t   </table>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map