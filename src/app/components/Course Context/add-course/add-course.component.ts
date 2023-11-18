import { Component ,OnInit,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { DataModel } from 'src/app/core/models/data.model';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  courseData!: DataModel;
  @ViewChild('courseForm',{static:false})
  courseForm!: NgForm;


  

  constructor(private router: Router, 
    private _coursesService: CoursesService, 
    private _snackBar: MatSnackBar,
    private _dialogRef: DialogRef<AddCourseComponent>,
    private _dialog: MatDialog) {
    this.courseData = {} as DataModel;
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
    this.courseData.rating = 0.0;
    this._coursesService.createCourse(this.courseData).subscribe((data: any)=>{
      alert("Course created");
      console.log(data);
      this._dialogRef.close();
      
    })
  } 

  cancel(){
    this._dialog.closeAll(); 
  }

  

}
