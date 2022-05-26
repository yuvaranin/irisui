import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FilterByPropertyPipe } from './directives/FilterByPropertyPipe';
import { NoAccessPageComponent } from './error/no-access-page/no-access-page.component';


@NgModule({
  declarations: [
    FilterByPropertyPipe,
    NoAccessPageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FilterByPropertyPipe,
    NoAccessPageComponent
  ]
})
export class SharedModule { }
