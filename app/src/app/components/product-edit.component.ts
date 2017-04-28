import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from '../services/product.service';

import {
	       FormGroup,
		   FormBuilder,
		   Validators,
		   FormControl
} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'product-edit',
    templateUrl: 'app/components/product-form.html',
})

export class ProductEditComponent  implements OnInit {
	public product: any = {};
	errorMessage: string;
	public isEdit: boolean = true;
	id: string;

	constructor( private _productService: ProductService, private _router: Router, private _route: ActivatedRoute  ){
    }

	ngOnInit(){
		this._route.params.subscribe(params => {
			this.id = params['id'];
		});
		this._productService.getProductById(this.id).subscribe( product => {
			this.product = product;
		});


	}

	onSubmit(f: NgForm) {

		this._productService.updateProductByProductObj( this.product ).subscribe(
			ans => {},
            error =>  this.errorMessage = <any>error				
		);

		this._router.navigateByUrl('/');

	}

}
