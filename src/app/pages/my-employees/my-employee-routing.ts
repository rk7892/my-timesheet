import { Routes } from '@angular/router';
import { MyEmployeeListComponent } from './my-employee-list/my-employee-list.component';
import { MyEmployeeInfoComponent } from './my-employee-info/my-employee-info.component';
import { MyEmployeeCurrentProjectComponent } from './my-employee-current-project/my-employee-current-project.component';
import { MyEmployeeTimesheetComponent } from './my-employee-timesheet/my-employee-timesheet.component';

const routes: Routes = [
  {
    path: '',
    component: MyEmployeeListComponent,
  },
  {
    path: ':id',
    component: MyEmployeeInfoComponent,
    children: [
      {
        path: 'my-employee-current-project',
        component: MyEmployeeCurrentProjectComponent,
      },
      {
        path: 'my-employee-timesheet',
        component: MyEmployeeTimesheetComponent,
      },
    ]
  },
];

export default routes;
