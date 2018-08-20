import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionsDashboardComponent } from './container/competitions-dashboard/competitions-dashboard.component';
import { CompetitionsDashboardViewComponent } from './components/competitions-dashboard-view/competitions-dashboard-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CompetitionsDashboardComponent,
    CompetitionsDashboardViewComponent
  ],
  exports :[
    CompetitionsDashboardComponent,
    CompetitionsDashboardViewComponent
  ]
})
export class CompetitionsModule { }
