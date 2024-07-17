import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import(`./admin-tasks/admin-tasks.module`).then(
            (m) => m.AdminTasksModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import(`./manage-users/manage-users.module`).then(
            (m) => m.ManageUsersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashRoutingModule {}
