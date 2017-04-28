import { Component, OnInit  } from '@angular/core';
import { Country } from '../model/country';
import {CountryService} from '../services/country.service';
import {
	    FormGroup,
	    FormBuilder,
	    Validators,
	    FormControl
} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'country-add',
	templateUrl: 'app/components/country-form.html',
})
export class CountryAddComponent  {
	public country: any = {};
    public isEdit: boolean = false;
	errorMessage: string;


	constructor( private countryService: CountryService, private _router: Router  ){
    }

	onSubmit(f: NgForm) {

		this.countryService.createCountry( this.country  ).
			subscribe(
                    country  => {}, //  this.country.push(country),
		            error =>  this.errorMessage = <any>error );				


		this._router.navigateByUrl('/');
	}

}
