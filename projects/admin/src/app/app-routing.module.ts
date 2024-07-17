import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./dash/dash.module`).then((m) => m.DashModule),
  },
  {
    path: 'login',
    loadChildren: () => import(`./auth/auth.module`).then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
