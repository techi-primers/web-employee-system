import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../services/backend-api.service';
import {EmployeeNew} from '../EmployeeNew';

@Component({
  selector: 'app-get-employee-information',
  templateUrl: './get-employee-information.component.html',
  styleUrls: ['./get-employee-information.component.css']
})
export class GetEmployeeInformationComponent implements OnInit {

  employeeList: Array<EmployeeNew> = [];

  constructor(private backendApiService: BackendApiService) { }
  //dtptions: DataTables.Settings = {};

  ngOnInit() {
    this.loadData();


  }

  loadData() {
    this.backendApiService.getAllEmployee()
      .subscribe(result => {
        this.employeeList = result;
      });
  }

}
