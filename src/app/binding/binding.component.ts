import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  msg = "Good morning Student"
  text = "Angular is frontend framwork"
  imgPath = "assets/images/s1.png";

  greeting=""
  
  num1:number=0;
  num2:number=0;

  num3:number=0;
  num4:number=0;

  num5:number=0;
  num6:number=0;

  num7:number=0;
  num8:number=0;

 
  sayHello(){
    alert("Hello Students")
  }

  name="";
  hello(){
    this.name = "Pranali"

  }

  name1=""
  hey(){
    this.name1="Runali"
  }

  Nothello(){
    this.name1= "Pranu"
  }

}
