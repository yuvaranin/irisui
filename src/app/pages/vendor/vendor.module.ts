import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VendorComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class VendorModule { }
