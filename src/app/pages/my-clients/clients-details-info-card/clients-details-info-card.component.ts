import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients-details-info-card',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatButtonModule,MatMenuModule,MatIconModule, RouterLink],
  templateUrl: './clients-details-info-card.component.html',
  styleUrls: ['./clients-details-info-card.component.scss']
})
export class ClientsDetailsInfoCardComponent {

}
