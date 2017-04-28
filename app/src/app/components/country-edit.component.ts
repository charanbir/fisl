import { Component, OnInit, OnDestroy } from '@angular/core';
import { Country } from '../model/country';
import {CountryService} from '../services/country.service';

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
	selector: 'country-edit',
    templateUrl: 'app/components/country-form.html',
})

export class CountryEditComponent  implements OnInit {
	public country: any = {};
	errorMessage: string;
	public isEdit: boolean = true;
	id: string;

	constructor( private _countryService: CountryService, private _router: Router, private _route: ActivatedRoute  ){
    }

	ngOnInit(){
		this._route.params.subscribe(params => {
			this.id = params['id'];
		});
		this._countryService.getCountryById(this.id).subscribe( country => {
			this.country = country;
		});


	}

	onSubmit(f: NgForm) {

		this._countryService.updateCountryByCountryObj( this.country ).subscribe(
			ans => {},
            error =>  this.errorMessage = <any>error				
		);

		this._router.navigateByUrl('/');

	}

}
