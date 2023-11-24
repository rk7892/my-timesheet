import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Subscription, filter } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    MatTabsModule,
    MatSelectModule,
    RouterOutlet,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule
    
    ],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
  
})
export class ProjectListComponent implements OnDestroy {
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private subscriptions = new Subscription();
  
  
  links = [
    { label: 'Current-project', link: 'current-project' },
    { label: 'Upcoming-project', link: 'upcoming-project' },
    { label: 'Completed-project', link: 'completed-project' }
  ];
  lastActiveTab = this.links[0].link;

  constructor(public dialog: MatDialog) {
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
  openDialog() {
    const dialogRef = this.dialog.open(AddNewModelDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}


export class AddNewModelDialog {}


