import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import { NavigationRendererComponent } from './container/navigation-renderer/navigation-renderer.component';

import {MaterialModule} from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompetitionsDashboardComponent} from '../competitions-module/container/competitions-dashboard/competitions-dashboard.component';
import { TeamsDeashboardComponent } from '../teams-module/container/teams-deashboard/teams-deashboard.component';
import {TeamViewerComponent} from '../teams-module/components/team-viewer/team-viewer.component';

const routes: Routes = [
    {path: 'competitions', component: CompetitionsDashboardComponent, pathMatch: 'full'},
    {path: 'teams',
      children: [
        { path: '', component: TeamsDeashboardComponent},
        { path: ':id', component: TeamViewerComponent}
      ]}
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
    NavigationRendererComponent
  ]
})
export class NavigationModule { }
