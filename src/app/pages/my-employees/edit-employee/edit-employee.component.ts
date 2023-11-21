import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule, MatDialogModule,MatButtonModule],
})
export class EditEmployeeComponent {

}
