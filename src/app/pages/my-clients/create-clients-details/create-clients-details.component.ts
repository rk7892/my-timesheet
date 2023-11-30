import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-create-clients-details',
  standalone: true,
  imports: [CommonModule,RouterLink,MatIconModule,MatTabsModule,MatDialogModule,MatButtonModule],
  templateUrl: './create-clients-details.component.html',
  styleUrls: ['./create-clients-details.component.scss']
})
export class CreateClientsDetailsComponent {
  constructor(public dialog: MatDialog) {

  }
  openDialog() {
    const dialogRef = this.dialog.open(EditClientsPopupDialog, {
      height: '45%',
      width: '35%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'edit-clients-popup',
  templateUrl: 'edit-clients-popup.html',
  standalone: true,
  imports: [MatDialogModule,
    MatButtonModule,
    MatCheckboxModule
  ],
})
export class EditClientsPopupDialog {}



