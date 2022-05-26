import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: 'Impersonate',  loadChildren: () => import('./impersonate/impersonate.module').then(m => m.ImpersonateModule)},
  {path:'',redirectTo:'Impersonate', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
