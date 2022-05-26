import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthGuardService } from './services/guard/admin-auth-guard.service';
import { VendorAuthGuardService } from './services/guard/vendor-auth-guard.service';
import { NoAccessPageComponent } from './shared/error/no-access-page/no-access-page.component';

const routes: Routes = [
  {
    path: 'E',
    loadChildren: () => import('./external/external.module').then(m => m.ExternalModule)
  },
  {
    path: 'Admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    component: AdminComponent,
    canActivate: [AdminAuthGuardService]
  },
  {
    path: 'Vendor',
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule),
    canActivate: [VendorAuthGuardService]
  },
  { path: '', redirectTo: 'E', pathMatch: 'full' },
  {
    path: '403',
    component: NoAccessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
