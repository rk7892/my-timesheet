import { CommonModule } from '@angular/common';
import { Component,OnDestroy, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyEmployeeInfoCardComponent } from '../my-employee-info-card/my-employee-info-card.component';
import { MyEmployeeCurrentProjectComponent } from '../my-employee-current-project/my-employee-current-project.component';
import { MyEmployeeTimesheetComponent } from '../my-employee-timesheet/my-employee-timesheet.component';
import { Subscription, filter } from 'rxjs';


@Component({
  selector: 'app-my-employee-info',
  templateUrl: './my-employee-info.component.html',
  styleUrls: ['./my-employee-info.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MyEmployeeInfoCardComponent,
    MyEmployeeCurrentProjectComponent,
    MyEmployeeTimesheetComponent
  ]
})
export class MyEmployeeInfoComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private subscriptions = new Subscription();
  links = [
    { label: 'current project', link: 'my-employee-current-project' },
    { label: 'timesheet', link: 'my-employee-timesheet' },
  ];
  lastActiveTab = this.links[0].link;
  tabs: any;

  constructor() {
    this.subscriptions.add(
      this.router.events.pipe(filter(x => x instanceof NavigationEnd)).subscribe(() => {
        if (this.route.children.length > 0) {
          const [route] = this.route.children;
          this.lastActiveTab = route.snapshot.url[0].path;
          // fetch data based on the tab selected
        } else {
          this.router.navigate([this.links[0].link], { relativeTo: this.route })
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

