import { Component } from '@angular/core';

@Component({
  selector: 'app-secondcompo',
  templateUrl: './secondcompo.component.html',
  styleUrls: ['./secondcompo.component.css']
})
export class SecondcompoComponent {

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

  Users=[
    {
      Uid:123,
      Uemail:"vishal@gmail.com",
      Upassword:"vishal@123"
    },

    {
      Uid:124,
      Uemail:"komal@gmail.com",
      Upassword:"komal@124"
    },

    {
      Uid:125,
      Uemail:"pranav@gmail.com",
      Upassword:"pranav@125"
    },

    {
      Uid:126,
      Uemail:"kiara@gmail.com",
      Upassword:"kaira@126"
    }
  ]

  Personalinfo = [
    {
      Pid: 25,
      Pname: "Pranali",
      Pcountry: "India"
    }
  ]

  BankInformation=[

    {
      accNo: 123456,
      accName: "Pranesh",
      accBalance: 90000,
      accBank: "SBI"
    },
    {
      accNo: 168903,
      accName: "Sngita",
      accBalance: 80000,
      accBank: "SBI"
    },
    {
      accNo: 126876,
      accName: "Sunesh",
      accBalance: 50000,
      accBank: "ICCI"
    },
    {
      accNo: 918765,
      accName: "Sai",
      accBalance: 10000,
      accBank: "BOI"
    }
  ]

  loggedIn=false;
}
