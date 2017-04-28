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
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api/product';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.options = options;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.createProduct = function (product) {
        return this.http.post(this.apiUrl, product, this.options);
        //.map(this.extractData)
        //.catch(this.handleError);
    };
    ProductService.prototype.getProductById = function (id) {
        return this.http.get(this.apiUrl + '/' + id, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.extractData = function (res) {
        var body = res.json();
        //let out = body.data || { };
        //console.log( body  );
        return body || {};
    };
    ProductService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        //console.log('jest_err');
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    ProductService.prototype.updateProductByProductObj = function (product) {
        //console.log( product );
        return this.http.put(this.apiUrl + '/' + product._id, product, this.options);
        //.map(this.extractData)
        //.catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (id) {
        var out = this.http.delete(this.apiUrl + '/' + id, this.options);
        return out;
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map