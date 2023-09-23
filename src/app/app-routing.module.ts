import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Add this
import { CoursesComponent } from './components/courses/courses.component';
import  LogInComponent  from './components/log-in/log-in.component'; // Add this
import  SignUpComponent  from './components/sign-up/sign-up.component'; // Add this
import { ArticlesComponent } from './components/articles/articles.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LogInComponent }, 
  { path: 'signup', component: SignUpComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
