import { Component, OnInit, Input } from '@angular/core';
import {Breadcrumb} from '../../../../models/breadcrumb';

@Component({
  selector: 'app-breadcrump-view',
  templateUrl: './breadcrumb-view.component.html',
  styleUrls: ['./breadcrumb-view.component.css']
})
export class BreadcrumbViewComponent implements OnInit {

  @Input()
  breadcrumps: Breadcrumb[];

  constructor() { }

  ngOnInit() {
  }

}
