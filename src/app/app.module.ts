import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentManagmentComponent } from './student-managment/student-managment.component';
import { StudentItemComponent } from './student-managment/student-item/student-item.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-managment/student-list/student-list.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentManagmentComponent,
    StudentItemComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
