import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionsDashboardComponent } from './container/competitions-dashboard/competitions-dashboard.component';
import { CompetitionsDashboardViewComponent } from './components/competitions-dashboard-view/competitions-dashboard-view.component';
import {MaterialModule} from '../../material/material.module';

import {HttpClientModule} from '@angular/common/http';
// Flex-Layout Import
import { FlexLayoutModule } from '@angular/flex-layout';

import {CompetitionDashboardService} from './competition-dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  declarations: [
    CompetitionsDashboardComponent,
    CompetitionsDashboardViewComponent
  ],
  exports :[
    CompetitionsDashboardComponent,
    CompetitionsDashboardViewComponent
  ],
  providers:[
    CompetitionDashboardService
  ]
})
export class CompetitionsModule { }
