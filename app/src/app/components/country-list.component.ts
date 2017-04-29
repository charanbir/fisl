import { Component, OnInit  } from '@angular/core';
import { Country } from '../model/country';
import {CountryService} from '../services/country.service';

@Component({
	selector: 'country',
	template: `
		<div class="country-list">
			<table class="table table-striped">
				<tr>
					<th>#</th>
					<th>Code</th>
					<th>Description</th>
					<th></th>
				</tr>
				<tr *ngFor="let country_var of country, let i = index ">
					<td>{{i+1}}</td>
					<td>{{country_var.code}}</td>
					<td>{{country_var.desc}}</td>
					<td>
						<a  [routerLink]="['/edit', country_var._id]" class="btn btn-default">Edit</a> 
						<a  (click)="deleteCountry(country_var._id)" class="btn btn-danger">Delete</a>
					</td>
				</tr>
		   </table>
		</div>
	`	
})
export class CountryListComponent implements OnInit {
	country: Country[];
	del : any;

	constructor( private countryService: CountryService  ){
    }

	ngOnInit(){
		this.countryService.getCountrys().subscribe(country => {
	        this.country = country;
		});
	}

	deleteCountry( id: string ){
		this.countryService.deleteCountry(id).subscribe( del => {
	        for( let i = 0; i < this.country.length;i++ ){
				if( id == this.country[i]._id  ){
					this.country.splice(i, 1);
				}
			}
		});
	}


}
