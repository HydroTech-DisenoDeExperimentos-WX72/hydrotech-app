import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  breakpoint: number = 0;
  constructor() { }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1500) ? 1 : 3;
}
  
onResize(event:any) {
  this.breakpoint = (event.target.innerWidth <= 1500) ? 1 : 3;
}

}
