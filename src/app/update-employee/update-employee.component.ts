import { Component, OnInit } from '@angular/core';
import {EmployeeNew} from '../EmployeeNew';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackendApiService} from '../services/backend-api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  editForm: FormGroup;
  employee: EmployeeNew;

  constructor(private formBuilder: FormBuilder, private backendApiService: BackendApiService, private router: Router) { }

  ngOnInit() {
    let employeeId = window.localStorage.getItem("editUserId");
    this.editForm = this.formBuilder.group({
      id: [''],
      employeeName: ['',Validators.required],
      mobileNo: ['',Validators.required],
      departmentNew:['']
    });

    // retrive employee record from employee id;
    // pending....
    this.backendApiService.getEmployee(+employeeId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });


  }

  onSubmit() {
      // going to start update process
      this.backendApiService.updateEmployee(this.editForm.value)
        .pipe()
        .subscribe(
          data => {
            if(data != null) {
              alert('User updated successfully.');
              this.router.navigate(['get-employee']);
            }else {
              alert(data.message);
            }
          },
          error => {
            alert(error);
          });

  }
}
