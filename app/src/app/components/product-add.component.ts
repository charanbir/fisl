import { Component, OnInit  } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from '../services/product.service';
import {
	    FormGroup,
	    FormBuilder,
	    Validators,
	    FormControl
} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'product-add',
	templateUrl: 'app/components/product-form.html',
})
export class ProductAddComponent  {
	public product: any = {};
    public isEdit: boolean = false;
	errorMessage: string;


	constructor( private productService: ProductService, private _router: Router  ){
    }

	onSubmit(f: NgForm) {

		this.productService.createProduct( this.product  ).
			subscribe(
                    product  => {}, //  this.product.push(product),
		            error =>  this.errorMessage = <any>error );				


		this._router.navigateByUrl('/');
	}

}
