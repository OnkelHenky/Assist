import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import { NavigationRendererComponent } from './container/navigation-renderer/navigation-renderer.component';

import {MaterialModule} from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompetitionsDashboardComponent} from '../competitions-module/container/competitions-dashboard/competitions-dashboard.component';
import { CompetitionsDashboardViewComponent } from '../competitions-module/components/competitions-dashboard-view/competitions-dashboard-view.component';

const routes: Routes = [
    {path: 'competitions', component: CompetitionsDashboardComponent, pathMatch: 'full'},
  //{path: '', redirectTo: 'passengers', pathMatch: 'full'}, //Redirecting eine "leere" URL ('/') auf '/passengers'
//  {path: '**', component: NotFoundComponent, pathMatch: 'full'} //Wildcard match '**' für 404!
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes),

    MaterialModule
  ],
  exports: [
    NavigationRendererComponent
  ],
  declarations: [
    NavigationRendererComponent,
    CompetitionsDashboardComponent,
    CompetitionsDashboardViewComponent
  ]
})
export class NavigationModule { }
