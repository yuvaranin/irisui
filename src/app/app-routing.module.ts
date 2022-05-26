import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from './core/utils/services/guard/admin-auth-guard.service';
import { VendorAuthGuardService } from './core/utils/services/guard/vendor-auth-guard.service';
import { AdminComponent } from './pages/admin/admin.component';
import { NoAccessPageComponent } from './pages/shared/error/no-access-page/no-access-page.component';

const routes: Routes = [
  {
    path: 'E',
    loadChildren: () => import('./pages/external/external.module').then(m => m.ExternalModule)
  },
  {
    path: 'Admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    component: AdminComponent,
    canActivate: [AdminAuthGuardService]
  },
  {
    path: 'Vendor',
    loadChildren: () => import('./pages/vendor/vendor.module').then(m => m.VendorModule),
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
