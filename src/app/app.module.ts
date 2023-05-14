import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { GetEmployeeInformationComponent } from './get-employee-information/get-employee-information.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BackendApiService} from './services/backend-api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SaveEmployeeComponent,
    UpdateEmployeeComponent,
    GetEmployeeInformationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule, HttpClientModule],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
