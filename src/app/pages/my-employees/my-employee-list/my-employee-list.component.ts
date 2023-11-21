import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-my-employee-list',
  templateUrl: './my-employee-list.component.html',
  styleUrls: ['./my-employee-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule,MatButtonModule,MatMenuModule,MatIconModule 
   
  ]
})
export class MyEmployeeListComponent {

}
