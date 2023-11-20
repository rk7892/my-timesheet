import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
      },
      {
        path: 'my-clients',
        loadChildren: () => import('./pages/my-clients/my-clients-routing'),
      },
      {
        path: 'create-clients-details',
        loadComponent: () => import('./pages/my-clients/create-clients-details/create-clients-details.component').then(c => c.CreateClientsDetailsComponent),
      },
      {
        path: 'my-projects',
        loadChildren: () => import('./pages/my-projects/projects-routing'),
      },
      {
        path: 'my-employees',
        loadChildren: () => import('./pages/my-employees/my-employee-routing'),
      },
      {
        path: 'create-employee',
        loadComponent: () => import('./pages/my-employees/create-employee/create-employee.component').then(c => c.CreateEmployeeComponent),
      },
      {
        path: 'my-timesheet',
        loadComponent: () => import('./pages/my-timesheet/my-timesheet.component').then(c => c.MyTimesheetComponent),
      },
      {
        path: 'approval',
        loadComponent: () => import('./pages/approval/approval.component').then(c => c.ApprovalComponent),
      },
      {
        path: 'reports',
        loadComponent: () => import('./pages/reports/reports.component').then(c => c.ReportsComponent),
      },
    ]
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
