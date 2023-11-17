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
    ]
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
