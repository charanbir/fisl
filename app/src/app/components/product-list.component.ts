import { Component, OnInit  } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from '../services/product.service';

@Component({
	selector: 'products',
	template: `
		<div class="product-list">
			<table class="table table-striped">
				<tr>
					<th>#</th>
					<th>Code</th>
					<th>Description</th>
					<th>Country</th>
					<th></th>
				</tr>
				<tr *ngFor="let product of products, let i = index ">
					<td>{{i+1}}</td>
					<td>{{product.code}}</td>
					<td>{{product.desc}}</td>
					<td>{{product.country}}</td>
					<td>
						<a  [routerLink]="['/edit', product._id]" class="btn btn-default">Edit</a> 
						<a  (click)="deleteProduct(product._id)" class="btn btn-danger">Delete</a>
					</td>
				</tr>
		   </table>
		</div>
	`	
})
export class ProductListComponent implements OnInit {
	products: Product[];
	del : any;

	constructor( private productService: ProductService  ){
    }

	ngOnInit(){
		this.productService.getProducts().subscribe(products => {
	        this.products = products;
		});
	}

	deleteProduct( id: string ){
		this.productService.deleteProduct(id).subscribe( del => {
	        for( let i = 0; i < this.products.length;i++ ){
				if( id == this.products[i]._id  ){
					this.products.splice(i, 1);
				}
			}
		});
	}


}
