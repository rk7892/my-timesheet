import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

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
        path: 'my-projects',
        loadChildren: () => import('./pages/my-projects/projects-routing'),
      },
      {
        path: 'my-employees',
        loadChildren: () => import('./pages/my-employees/my-employee-routing'),
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
      {
        path: 'post',
        loadComponent: () => import('./pages/post/post.component').then(c => c.PostComponent),
      },
      {
        path: 'post1',
        loadChildren: () => import('./pages/post1/post1-routing'),
      },
    ]
  }

    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
