import { Component } from '@angular/core'

@Component({
selector:'my-employee',
templateUrl:'./employee.component.html',
styleUrls:['./employee.component.css']


}) 

export class EmployeeComponent{
firstname:string="sai nagendra";
lastname:string="siddamshetty";
gender:string="male";
age:number=24;

}