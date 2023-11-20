import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { CurrentProjectComponent } from './current-project/current-project.component';
import { UpcomingProjectComponent } from './upcoming-project/upcoming-project.component';
import { CompletedProjectComponent } from './completed-project/completed-project.component';

const routes: Routes = [
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
