import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule, MatDialogModule,MatButtonModule],
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
 

})
export class CreateEmployeeComponent {

  constructor(public dialog: MatDialog) {

  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateEmployeeDialog, {
      height: '40%',
      width: '40%',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
}
@Component({
  selector: 'create-employee-popup',
  templateUrl: 'create-employee-popup.html',
  standalone: true,
  imports: [MatDialogModule,
    MatButtonModule, 
  ],
})
export class CreateEmployeeDialog { }

