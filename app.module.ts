import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import {  EmployeeComponent } from './EmployeeComponent'

@NgModule({
  declarations: [
    AppComponent , EmployeeComponent
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
