import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
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
        path: 'create-project',
        loadComponent: () => import('./pages/my-projects/create-project/create-project.component').then(c => c. CreateProjectComponent),
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
        path: 'edit-employee',
        loadComponent: () => import('./pages/my-employees/edit-employee/edit-employee.component').then(c => c.EditEmployeeComponent),
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
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.component').then(c => c.SettingsComponent),
      },
    ]
  }

    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
