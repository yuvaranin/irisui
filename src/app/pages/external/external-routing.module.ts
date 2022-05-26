import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInAuthGuardService } from 'src/app/core/utils/services/guard/sign-in-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [SignInAuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
