import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TopNavBarComponent } from './layout/top-nav-bar/top-nav-bar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { OffSideBarComponent } from './layout/off-side-bar/off-side-bar.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    TopNavBarComponent,
    SidebarComponent,
    OffSideBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class AdminModule { }
