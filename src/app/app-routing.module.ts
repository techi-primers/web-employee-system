import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaveEmployeeComponent} from './save-employee/save-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {GetEmployeeInformationComponent} from './get-employee-information/get-employee-information.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [

  {path:'save', component:SaveEmployeeComponent},
  {path:'update', component:UpdateEmployeeComponent},
  {path:'home', component:HomeComponent},
  {path:'get-employee', component:GetEmployeeInformationComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
