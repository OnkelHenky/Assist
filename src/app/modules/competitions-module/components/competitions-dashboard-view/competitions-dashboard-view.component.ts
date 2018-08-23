import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-competitions-dashboard-view',
  templateUrl: './competitions-dashboard-view.component.html',
  styleUrls: ['./competitions-dashboard-view.component.css']
})
export class CompetitionsDashboardViewComponent implements OnInit {

  @Input()
  competition: any; //any for know make proper Competition interface

  constructor() { }

  ngOnInit() {
  }

}
