import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../../material/material.module';

import {RouterModule} from '@angular/router';

import { TeamsDeashboardComponent } from './container/teams-deashboard/teams-deashboard.component';
import { TeamViewerComponent } from './container/team-viewer/team-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    TeamsDeashboardComponent,
    TeamViewerComponent
  ],
  exports: [
    TeamsDeashboardComponent,
    TeamViewerComponent
  ]
})
export class TeamsModule { }
