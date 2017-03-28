import { Component } from '@angular/core';
import {Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {
  	/* implement autoscroll to top, on new route */
  	router.events.subscribe((val) => {
  		if (val instanceof NavigationEnd) {
  			window.scrollTo(0,0);
  		}
  	});
  }
}
