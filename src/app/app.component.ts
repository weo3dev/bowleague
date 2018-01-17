import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentTitle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {

    /* implement autoscroll to top, on new route */
  	router.events.subscribe((val) => {
  		if (val instanceof NavigationEnd) {
  			window.scrollTo(0,0);
  		}
  	});

  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe( event => {
        this.titleService.setTitle(event['title']);
        this.currentTitle = this.titleService.getTitle();
      })

  }

}


