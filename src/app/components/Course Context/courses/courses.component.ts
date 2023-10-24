import { Component ,OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { DataModel } from 'src/app/core/models/data.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  breakpoint: number = 0;
  Allcourses: any[] = []


  
  constructor(private _dialog: MatDialog, private router: Router, private _coursesService: CoursesService) { 

  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1500) ? 1 : 3;
    this.getAllCourses();
}
  
onResize(event:any) {
  this.breakpoint = (event.target.innerWidth <= 1500) ? 1 : 3;
}
openAddCourse() {
  this._dialog.open(AddCourseComponent);
}

//GetAllCourses
getAllCourses(){
  this._coursesService.getListCourses().subscribe((data: any)=>{
    this.Allcourses = data;
  })
}
redirectToPayment(curso: any) {
  this.router.navigate(['/payment'], {
      queryParams: {
          id: curso.id, // Suponiendo que cada curso tiene un identificador único 'id'
          image: curso.image,
          name: curso.name,
          price: curso.price
          // Agrega otros datos del curso que desees enviar al componente de pago
      }
  });
}
}

