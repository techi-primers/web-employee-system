import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrls: ['./save-employee.component.css']
})
export class SaveEmployeeComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb : FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name:['',Validators.required],
      email:[],
      mobileNo:[],
      password:[]
    })
  }

  ngOnInit() {
  }

}
