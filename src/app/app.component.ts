import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';

num:number=23;
num1:number=45.67;
num2=456;
arr1 = [12, "c", 23.4];
courses = ["C", "C++", "Java"]
arr  = [2, "c", 100, 3]

student = {
  name: "Pranali",
  age: " 22",
  city: "Pune",
  marks: 90
}

showmsg(){
  console.log("Hello Students")
}

Employees=[
  {
   ename: "John",
   sal:34567,
   Country:"US",
   deptno:20,
   Role:"Admin" 
  },
  {
    ename: "Nlake",
    sal:34007,
    Country:"UK",
    deptno:38,
    Role:"Developer" 
   },
   {
    ename: "Rohit",
    sal:34000,
    Country:"India",
    deptno:21,
    Role:"Manager" 
   },
   {
    ename: "Scott",
    sal:45000,
    Country:"Germany",
    deptno:80,
    Role:"Salesma" 
   },
   {
    ename: "Vishal",
    sal:30000,
    Country:"India",
    deptno:41,
    Role:"Developer" 
   }
]
}

