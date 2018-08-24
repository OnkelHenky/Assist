import { Component, OnInit, AfterContentInit, ViewChild, OnDestroy } from '@angular/core';

import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import {Observable} from 'rxjs';
import {map, startWith, takeWhile} from 'rxjs/operators';
import {CompetitionDashboardService} from '../../competition-dashboard.service';
import {MatGridList} from '@angular/material';
import {Competition} from '../../models/competition.interface';

@Component({
  selector: 'app-competitions-dashboard',
  templateUrl: './competitions-dashboard.component.html',
  styleUrls: ['./competitions-dashboard.component.css']
})
export class CompetitionsDashboardComponent implements OnInit, AfterContentInit, OnDestroy {

  title: string = "Competitions";
  public cols: Observable<number>;
  competitions$: Observable<Competition[]>;
  competitions: Competition[];
  mq: string;
  mq_alias: string;
  device_has_sm: boolean;

  @ViewChild('grid') grid: MatGridList;

  constructor(private observableMedia: ObservableMedia,
              private compService: CompetitionDashboardService) { }

  ngOnInit() {
   this.competitions$ = this.compService.getCompetitions();
  }

  gridByBreakpoint = {
    xl: {
      col: 5,
      rowHeight: '550px',
      gutterSize: '1px'
    },
    lg: {
      col: 4,
      rowHeight: '550px',
      gutterSize: '5px'
    },
    md: {
      col: 3,
      rowHeight: '550px',
      gutterSize: '1px'
    },
    sm:{
      col: 2,
      rowHeight: '550px',
      gutterSize: '1px'
    },
    xs: {
      col: 1,
      rowHeight: '550px',
      gutterSize: '10px'
    }
  };

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      console.log('gridByBreakpoint : ', this.gridByBreakpoint[change.mqAlias]);
      this.mq = change.mediaQuery;
      this.mq_alias = change.mqAlias;
      (change.mqAlias === 'xs' || change.mqAlias === 'sm')? this.device_has_sm = true : this.device_has_sm = false;
      this.grid.cols = this.gridByBreakpoint[change.mqAlias].col;
      this.grid.rowHeight = this.gridByBreakpoint[change.mqAlias].rowHeight;
      this.grid.gutterSize = this.gridByBreakpoint[change.mqAlias].gutterSize;
    });
  }

  ngOnDestroy(){
  }

}
