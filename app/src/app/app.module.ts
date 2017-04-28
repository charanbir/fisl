import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }     from './app.component';
import {ProductListComponent}  from './components/product-list.component';
import {ProductAddComponent}   from './components/product-add.component';
import {ProductEditComponent}  from './components/product-edit.component';

import {ProductService} from './services/product.service';

const appRoutes: Routes = [
  { path: '',                     component: ProductListComponent },
  { path: 'add',				  component: ProductAddComponent },
  { path: 'edit/:id',             component: ProductEditComponent }
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
	ProductEditComponent
  ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
