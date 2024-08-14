import { Component } from '@angular/core';

@Component({
  selector: 'app-pipecomp',
  templateUrl: './pipecomp.component.html',
  styleUrls: ['./pipecomp.component.css']
})
export class PipecompComponent {
  title = 'my-first-app';
  todayDate = new Date();
  jsonval = {
    name: 'Alex', 
    age:'25', 
    address:{a1:'Paris', a2:'France'}
  };
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
}
