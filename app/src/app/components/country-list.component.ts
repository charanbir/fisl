import { Component, OnInit  } from '@angular/core';
import { Country } from '../model/country';
import {CountryService} from '../services/country.service';

@Component({
	selector: 'countrys',
	template: `
		<div class="country-list">
			<table class="table table-striped">
				<tr>
					<th>#</th>
					<th>Code</th>
					<th>Description</th>
					<th></th>
				</tr>
				<tr *ngFor="let country of countrys, let i = index ">
					<td>{{i+1}}</td>
					<td>{{country.code}}</td>
					<td>{{country.desc}}</td>
					<td>
						<a  [routerLink]="['/edit', country._id]" class="btn btn-default">Edit</a> 
						<a  (click)="deleteCountry(country._id)" class="btn btn-danger">Delete</a>
					</td>
				</tr>
		   </table>
		</div>
	`	
})
export class CountryListComponent implements OnInit {
	countrys: Country[];
	del : any;

	constructor( private countryService: CountryService  ){
    }

	ngOnInit(){
		this.countryService.getCountrys().subscribe(countrys => {
	        this.countrys = countrys;
		});
	}

	deleteCountry( id: string ){
		this.countryService.deleteCountry(id).subscribe( del => {
	        for( let i = 0; i < this.countrys.length;i++ ){
				if( id == this.countrys[i]._id  ){
					this.countrys.splice(i, 1);
				}
			}
		});
	}


}
