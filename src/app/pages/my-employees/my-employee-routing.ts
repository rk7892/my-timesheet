import { Routes } from '@angular/router';
import { MyEmployeeListComponent } from './my-employee-list/my-employee-list.component';
import { MyEmployeeInfoComponent } from './my-employee-info/my-employee-info.component';
import { MyEmployeeCurrentProjectComponent } from './my-employee-current-project/my-employee-current-project.component';
import { MyEmployeeTimesheetComponent } from './my-employee-timesheet/my-employee-timesheet.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component: MyEmployeeListComponent,
  },
  {
    path: 'create-employee',
    component: CreateEmployeeComponent,
  },
  {
    path: 'edit-employee',
    component: EditEmployeeComponent,
  },
  {
    path: 'my-employee-info',
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
