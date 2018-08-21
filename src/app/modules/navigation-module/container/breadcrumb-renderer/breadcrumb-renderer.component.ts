import { Component, OnInit } from '@angular/core';
import {  Router, NavigationEnd, ActivatedRoute,RoutesRecognized } from '@angular/router';
import {map, tap} from 'rxjs/operators';

import {Breadcrumb} from '../../../../models/breadcrumb';

@Component({
  selector: 'app-breadcrumb-renderer',
  templateUrl: './breadcrumb-renderer.component.html',
  styleUrls: ['./breadcrumb-renderer.component.css']
})
export class BreadcrumbRendererComponent implements OnInit {

  breadcrumbs: Breadcrumb[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
   this.router.events
      .pipe(
        tap((event) => {
          if(event instanceof NavigationEnd){
          //  console.log('event: ', event)
          }
          return event;
        }),
        tap((event) => {
          if (event instanceof RoutesRecognized) {
           // console.log('event  ',  event);
           // console.log('event route: ',  event.state.root.firstChild.data)
          //  this.routeData = data.state.root.firstChild.data;
          }
        })
      )//.subscribe();
  }

}
