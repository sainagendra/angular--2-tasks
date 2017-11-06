
import{ Component } from "@angular/core"
import { appService } from "./app.service"

@Component({
selector:'app-root',
template:`

<img src ='http://saibersys.com/images/{{imagePath}}'>
<button [disabled]='isDisabled'>clickMe</button>


<h1>{{getFullName()}}</h1>
<my-employee></my-employee>
`

})


export class AppComponent { 

   pageHeader:string = 'Employee Details';
   imagePath:string ='logo.png';
   firstName = 'sai nagendra';
   lastName =                  " siddamshetty";
   getFullName():string{
   return this.firstName+""+this.lastName;
   }
isDisabled:boolean= false ;


}