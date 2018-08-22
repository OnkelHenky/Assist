import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Material imports
import { MaterialModule } from './material/material.module';
// Flex-Layout Import
import { FlexLayoutModule } from '@angular/flex-layout';

// Custom  modules
import { NavigationModule } from './modules/navigation-module/navigation.module';
import { CompetitionsModule } from './modules/competitions-module/competitions.module';
import { TeamsModule } from './modules/teams-module/teams.module';
import { TicketsModule } from './modules/ticket-module/tickets.module';
import { GamesModule } from './modules/games-module/games.module';
import { MyCompetitionsModule } from './modules/my-competitions-module/my-competitions.module';

// Custom components
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  //{path: '/', component:  , pathMatch: 'full'},
   {path: '**', component: NotFoundComponent, pathMatch: 'full', data: {breadcrumb: 'wildcard'}} //Wildcard match
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,

    // Custom app modules
    NavigationModule,
    CompetitionsModule,
    TeamsModule,
    TicketsModule,
    GamesModule,
    MyCompetitionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
