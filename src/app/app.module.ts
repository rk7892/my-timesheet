import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateProjectComponent } from './pages/my-projects/create-project/create-project.component';
import { ProjectDetailsTeamComponent } from './pages/my-projects/project-details-team/project-details-team.component';
import { ProjectDetailsTaskComponent } from './pages/my-projects/project-details-task/project-details-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsTeamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
