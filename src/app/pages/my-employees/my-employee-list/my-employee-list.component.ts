import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-employee-list',
  templateUrl: './my-employee-list.component.html',
  styleUrls: ['./my-employee-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, 
   
  ]
})
export class MyEmployeeListComponent {

}
