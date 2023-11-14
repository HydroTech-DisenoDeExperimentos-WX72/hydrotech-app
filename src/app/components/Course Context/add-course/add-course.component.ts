import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseModel } from 'src/app/core/models/course.model';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  courseData!: CourseModel;
  @ViewChild('courseForm', { static: false })
  courseForm!: NgForm;

  constructor(
    private router: Router,
    private _coursesService: CoursesService,
    private _snackBar: MatSnackBar,
    private _dialogRef: DialogRef<AddCourseComponent>,
    private _dialog: MatDialog
  ) {
    this.courseData = {
      id: '',
      name: '',
      image: '',
      description: '',
      price: '',
      rating: 0,
      duration: '',
      category: '',
      date: new Date().toLocaleDateString('es-ES'),
    };
  }

  /*onSubmit() {
    if(this.courseForm.form.valid){
      console.log('valid');
      console.log("create")
      this.addCourse();
    }else{
      console.log('invalid');
    }
  } */
  addCourse() {
    this._coursesService.createCourse(this.courseData).subscribe(
      (data: any) => {
        this._snackBar.open('Course created', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
        console.log(data);
        this._dialogRef.close();
      },
      (error) => {
        console.error('Error creating course:', error);
        this._snackBar.open(
          'Error creating course. Please try again later.',
          'Close',
          {
            duration: 5000,
            panelClass: ['error-snackbar'],
          }
        );
      }
    );
  }

  cancel() {
    this._dialog.closeAll();
  }
}
