import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dash',
    loadChildren: () => import('./dashboard/dashboard.module')
                                                .then((m) => m.DashboardModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module')
                                                .then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
