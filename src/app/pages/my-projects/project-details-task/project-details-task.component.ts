import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-project-details-task',
  standalone: true,
  imports: [CommonModule, RouterLink,MatTabsModule, ReactiveFormsModule,MatDialogModule,MatExpansionModule,MatFormFieldModule],
  templateUrl: './project-details-task.component.html',
  styleUrls: ['./project-details-task.component.scss']
})
export class ProjectDetailsTaskComponent {

  panelOpenState = false;
  customCollapsedHeight: string = '80px';
  customExpandedHeight: string = '80px';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) {}
 
  }


