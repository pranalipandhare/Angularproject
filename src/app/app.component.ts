import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';

courses = ["C", "C++", "Java"]
arr  = [2, "c", 100, 3]

student = {
  name: "Pranali",
  age: " 22",
  city: "Pune",
  marks: 90
}
}

