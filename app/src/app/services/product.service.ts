import {Injectable} from '@angular/core';
import {Http,  Response ,  Headers, RequestOptions} from '@angular/http';
import { Product } from '../model/product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{
		private apiUrl = 'http://localhost:3000/api/product'; 
		private options : any;


	    constructor(private http: Http){
			let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
			this.options = options;

	    }

	    getProducts(){
	        return this.http.get( this.apiUrl  )
	            .map(res => res.json());
	    }


	    createProduct(product : Product) : Observable<Response> {
	        return  this.http.post( this.apiUrl, product  , this.options );
					//.map(this.extractData)
					//.catch(this.handleError);
	    }

		getProductById( id: String ) : Observable<Product> {
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


		updateProductByProductObj( product : Product ) : Observable<Response> {
			//console.log( product );
			return this.http.put(  this.apiUrl+'/'+ product._id, product,  this.options );
					//.map(this.extractData)
					//.catch(this.handleError);
		}


		deleteProduct(id : string ) :  Observable<Response>  {
			let out = this.http.delete(  this.apiUrl+'/'+id, this.options );
			return out;
		}

}

