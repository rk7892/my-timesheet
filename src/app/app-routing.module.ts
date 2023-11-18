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
        loadComponent: () => import('./pages/my-clients/my-clients.component').then(c => c.MyClientsComponent),
      },
      {
        path: 'my-projects',
        loadComponent: () => import('./pages/my-projects/my-projects.component').then(c => c.MyProjectsComponent),
      },
      {
        path: 'my-employees',
        loadComponent: () => import('./pages/my-employees/my-employees.component').then(c => c.MyEmployeesComponent),
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
