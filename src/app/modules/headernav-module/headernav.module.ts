import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadernavComponent } from './components/headernav/headernav.component';

// Material imports
import {MaterialModule} from '../../material/material.module';
// Flex-Layout Import
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    HeadernavComponent
  ],
  declarations: [HeadernavComponent]
})
export class HeadernavModule { }
