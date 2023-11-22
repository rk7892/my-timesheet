import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
export class ClientsDetailsInfoComponent {

  links = [
    { label: 'Current Project', link: 'clients-details-current-project'},
    { label: 'Completed Project', link: 'clients-details-completed-project'},
  ];
  lastActiveTab = this.links[0].link;

}
