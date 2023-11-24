import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [MatTabsModule, CommonModule,MatDialogModule,RouterLink,MatButtonModule],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  constructor(public dialog: MatDialog) {

  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateProjectDialog, {
      height: '45%',
      width: '35%',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
@Component({
  selector: 'create-project-popup',
  templateUrl: 'create-project-popup.html',
  standalone: true,
  imports: [MatDialogModule,
    MatButtonModule,
  ],
})
export class CreateProjectDialog { }
  
