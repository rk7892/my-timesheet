import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { CurrentProjectComponent } from './current-project/current-project.component';
import { UpcomingProjectComponent } from './upcoming-project/upcoming-project.component';
import { CompletedProjectComponent } from './completed-project/completed-project.component';
import { ProjectDetailsTaskComponent } from './project-details-task/project-details-task.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  {
    path: 'project-details-task',
    component: ProjectDetailsTaskComponent
  },
  {
    path:'edit-project',
    component: EditProjectComponent
  },
  {
    path:'create-project',
    component: CreateProjectComponent
  },
  {
        path: '',
        component: ProjectListComponent,
        
          children: [
          {
            path:'current-project',
            component: CurrentProjectComponent
          },
          {
            path:'upcoming-project',
            component: UpcomingProjectComponent
          },
          {
            path:'completed-project',
            component: CompletedProjectComponent,
          },
          
    
        ]
        
      },
];

export default routes;
