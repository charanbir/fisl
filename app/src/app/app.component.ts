import { Component } from '@angular/core';

@Component({
  selector: 'fisl-app',
  template: `
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" routerLink='/'>USC FISL</a>
			</div>
			<ul class="nav navbar-nav">
				<li><a routerLink='/'>List of Products</a></li>
			    <li><a routerLink='/add'>Create New Product</a></li>
                <li><a routerLink='/country'>List of Countries</a></li>
                <li><a routerLink='/country/add'>Create New Country</a></li>
			</ul>
		</div>
	</nav>
	<div class="container">
		<router-outlet></router-outlet>
	</div>
  `,
})
export class AppComponent  { 
}
