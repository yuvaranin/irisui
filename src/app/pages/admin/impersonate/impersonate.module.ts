import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpersonateComponent } from '../impersonate/impersonate.component';
import { ImpersonateRoutingModule } from './impersonate-routing.module';



@NgModule({
  declarations: [
    ImpersonateComponent
  ],
  imports: [
    CommonModule,
    ImpersonateRoutingModule
  ]
})
export class ImpersonateModule { }
