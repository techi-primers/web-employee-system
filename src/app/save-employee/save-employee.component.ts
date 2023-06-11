import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BackendApiService} from '../services/backend-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrls: ['./save-employee.component.css']
})
export class SaveEmployeeComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb : FormBuilder, private backendApiService: BackendApiService, private router: Router) {
    this.createForm();
  }

  createForm() {

  }

  ngOnInit() {
    this.angForm = this.fb.group({
      employeeName:['',Validators.required],
      mobileNo:[''],
      departmentName:['']
    })
  }

  onSubmit() {
    this.backendApiService.createEmployee(this.angForm.value)
      .subscribe( data => {
        this.router.navigate(['get-employee']);
      });
  }

}
