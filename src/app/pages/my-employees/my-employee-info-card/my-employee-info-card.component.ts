import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-employee-info-card',
  templateUrl: './my-employee-info-card.component.html',
  styleUrls: ['./my-employee-info-card.component.scss'],
  standalone: true,
  imports: [
    RouterLink,MatButtonModule,MatMenuModule,MatIconModule,MatCardModule,
  ]
})
export class MyEmployeeInfoCardComponent {

}
