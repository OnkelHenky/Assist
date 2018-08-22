import { Component, OnInit } from '@angular/core';
import {  Router, NavigationEnd, ActivatedRoute,RoutesRecognized,ActivationEnd } from '@angular/router';
import {map, tap} from 'rxjs/operators';

import {Breadcrumb} from '../../../../models/breadcrumb';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-breadcrumb-renderer',
  templateUrl: './breadcrumb-renderer.component.html',
  styleUrls: ['./breadcrumb-renderer.component.css']
})
export class BreadcrumbRendererComponent implements OnInit {

 // breadcrumbs$: Observable<Breadcrumb[]>;
  routerEvents$: Observable<any>;
  breadcrumbs: Breadcrumb[];

  constructor(
  private activatedRoute: ActivatedRoute
  , private router: Router) { }

  ngOnInit() {
    this.breadcrumbs = [{label: "foo", url:"fooURL"},{label: "bar", url:"barURl"},{label: "baz", url:"bazURl"}] ;
  // this.breadcrumbs$ = this.breadcrumbService.currentbreadCrumbs;

  }
}
