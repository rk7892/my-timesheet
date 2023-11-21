import { Routes } from '@angular/router';
import { MyClientsListComponent } from './my-clients-list/my-clients-list.component';
import { ClientsDetailsInfoComponent } from './clients-details-info/clients-details-info.component';
import { ClientsDetailsCompletedProjectComponent } from './clients-details-completed-project/clients-details-completed-project.component';
import { ClientsDetailsCurrentProjectComponent } from './clients-details-current-project/clients-details-current-project.component';

const routes: Routes = [
  {
    path: '',
    component: MyClientsListComponent,
  },
  {
    path: ':id',
    component: ClientsDetailsInfoComponent,
    children: [
      {
        path:'clients-details-completed-project',
        component: ClientsDetailsCompletedProjectComponent,
      },
      {
        path:'clients-details-current-project',
        component: ClientsDetailsCurrentProjectComponent,
      },
      
    ]
  },



];

export default routes;
