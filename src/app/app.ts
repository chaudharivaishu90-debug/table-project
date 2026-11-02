
import { Component, signal } from '@angular/core';
import{employee, student, product,course, book, customer, order, movie, teacher, vehicle,   } from './model/students'
import { empArr, studentArr, productArr,courseArr,bookArr,customerArr, orderArr, movieArr, teacherArr, vehicleArr,   } from './const/student';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  styleUrl: './app.scss',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('table-project');

  empArr: employee[] = empArr;
  studentArr: student[] = studentArr;
  productArr:product[] = productArr;
  courseArr:course[] = courseArr;
  bookArr:book[] = bookArr;
  customerArr:customer[] = customerArr;
  orderArr:order[] = orderArr;
  movieArr:movie[] = movieArr;
  teacherArr:teacher[] = teacherArr;
  vehicleArr:vehicle[] = vehicleArr;
  
}
