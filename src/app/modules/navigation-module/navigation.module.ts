import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import { NavigationRendererComponent } from './container/navigation-renderer/navigation-renderer.component';

import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompetitionsDashboardComponent} from '../competitions-module/container/competitions-dashboard/competitions-dashboard.component';
import { TeamsDeashboardComponent } from '../teams-module/container/teams-deashboard/teams-deashboard.component';
import { TeamViewerComponent } from '../teams-module/container/team-viewer/team-viewer.component';
import { BreadcrumbRendererComponent } from './container/breadcrumb-renderer/breadcrumb-renderer.component';
import { BreadcrumbViewComponent } from './component/breadcrumb-view/breadcrumb-view.component';
import { TicketDashboardComponent } from '../ticket-module/container/ticket-dashboard/ticket-dashboard.component';
import { GamesDashboardComponent } from '../games-module/container/games-dashboard/games-dashboard.component';
import { MyCompetitionDashboardComponent } from '../my-competitions-module/container/my-competition-dashboard/my-competition-dashboard.component';


const routes: Routes = [
    {path: 'competitions', component: CompetitionsDashboardComponent, pathMatch: 'full', data: {breadcrumb: 'competitions'}},
    {path: 'teams',
      children: [
        { path: '', component: TeamsDeashboardComponent,data: {breadcrumb: 'teams'}},
        { path: ':id', component: TeamViewerComponent,data: {breadcrumb: 'team_id'}}
    ]},
    {path: 'tickets',
       children: [
         { path: '', component: TicketDashboardComponent, data: {breadcrumb: 'tickets'}}
       ]
    },
     {path: 'games',
      children: [
        { path: '', component: GamesDashboardComponent, data: {breadcrumb: 'games'}}
      ]
    },
  {path: 'mycompetitions',
    children: [
      { path: '', component: MyCompetitionDashboardComponent, data: {breadcrumb: 'mycompetition'}}
    ]
  }
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
    NavigationRendererComponent,
    BreadcrumbRendererComponent,
    BreadcrumbViewComponent
  ],
  declarations: [
    NavigationRendererComponent,
    BreadcrumbRendererComponent,
    BreadcrumbViewComponent
  ]
})
export class NavigationModule { }
