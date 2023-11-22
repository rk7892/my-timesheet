import { CommonModule,  } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Subscription, filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ClientsDetailsInfoCardComponent } from '../clients-details-info-card/clients-details-info-card.component';
import { ClientsDetailsCurrentProjectComponent } from '../clients-details-current-project/clients-details-current-project.component';
import { ClientsDetailsCompletedProjectComponent } from '../clients-details-completed-project/clients-details-completed-project.component';

@Component({
  selector: 'app-clients-details-info',
  standalone: true,
  templateUrl: './clients-details-info.component.html',
  styleUrls: ['./clients-details-info.component.scss'],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    ClientsDetailsInfoCardComponent,
    ClientsDetailsCurrentProjectComponent,
    ClientsDetailsCompletedProjectComponent

  ]
})
export class ClientsDetailsInfoComponent implements OnDestroy{

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private subscriptions = new Subscription();

  links = [
    { label: 'Current Project', link: 'clients-details-current-project'},
    { label: 'Completed Project', link: 'clients-details-completed-project'},
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
