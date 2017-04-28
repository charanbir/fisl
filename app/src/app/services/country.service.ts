import {Injectable} from '@angular/core';
import {Http,  Response ,  Headers, RequestOptions} from '@angular/http';
import { Country } from '../model/country';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService{
		private apiUrl = 'http://localhost:3000/api/country'; 
		private options : any;


	    constructor(private http: Http){
			let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
			this.options = options;

	    }

	    getCountrys(){
	        return this.http.get( this.apiUrl  )
	            .map(res => res.json());
	    }


	    createCountry(country : Country) : Observable<Response> {
	        return  this.http.post( this.apiUrl, country  , this.options );
					//.map(this.extractData)
					//.catch(this.handleError);
	    }

		getCountryById( id: String ) : Observable<Country> {
			return this.http.get(  this.apiUrl+'/'+id, this.options )
					.map(this.extractData)
					.catch(this.handleError);
		}
	

		private extractData(res: Response) {
			let body = res.json();
			//let out = body.data || { };
			//console.log( body  );
			return body || { };
		}
		private handleError (error: Response | any) {
			// In a real world app, we might use a remote logging infrastructure
			//console.log('jest_err');
			let errMsg: string;
			if (error instanceof Response) {
				const body = error.json() || '';
				const err = body.error || JSON.stringify(body);
				errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
			} else {
				errMsg = error.message ? error.message : error.toString();
			}
			console.error(errMsg);
			return Promise.reject(errMsg);
		}


		updateCountryByCountryObj( country : Country ) : Observable<Response> {
			//console.log( country );
			return this.http.put(  this.apiUrl+'/'+ country._id, country,  this.options );
					//.map(this.extractData)
					//.catch(this.handleError);
		}


		deleteCountry(id : string ) :  Observable<Response>  {
			let out = this.http.delete(  this.apiUrl+'/'+id, this.options );
			return out;
		}

}

