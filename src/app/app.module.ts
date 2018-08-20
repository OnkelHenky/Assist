import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Material imports
import { MaterialModule } from './material/material.module';
// Flex-Layout Import
import { FlexLayoutModule } from '@angular/flex-layout';

// Custom app modules
import  { HeadernavModule } from './modules/headernav-module/headernav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,

    // Custom app modules
    HeadernavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
