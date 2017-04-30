import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent }     from './app.component';
import {ProductListComponent}  from './components/product-list.component';
import {ProductAddComponent}   from './components/product-add.component';
import {ProductEditComponent}  from './components/product-edit.component';

import {ProductService} from './services/product.service';

import {CountryListComponent}  from './components/country-list.component';
import {CountryAddComponent}   from './components/country-add.component';
import {CountryEditComponent}  from './components/country-edit.component';

import {CountryService} from './services/country.service';

const appRoutes: Routes = [
  { path: '',                     component: ProductListComponent },
  { path: 'add',				  component: ProductAddComponent },
  { path: 'edit/:id',             component: ProductEditComponent },
  
  { path: 'country',                      component: CountryListComponent },
  { path: 'country-add',                  component: CountryAddComponent },
  { path: 'country/edit/:id',             component: CountryEditComponent }
];

@NgModule({
  imports:      [ 
	  BrowserModule,
	  HttpModule,
	  //ReactiveFormsModule,
	  FormsModule,
	  RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
	AppComponent,
	ProductListComponent,
	ProductAddComponent,
	ProductEditComponent,
    CountryListComponent,
	CountryAddComponent,
	CountryEditComponent
  ],
  providers: [ProductService, CountryService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
