import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
    children: [
      {
        path: ':userId',
        component: EmployeeDetailComponent,
      },
    ],
  },
  // { path: 'employees/:userId', component: EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
