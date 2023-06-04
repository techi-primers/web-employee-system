import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeeNew} from '../EmployeeNew';
import { HttpService } from '../HttpService';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }



  getAllEmployee() : Observable<EmployeeNew[]>{

    return this.http.get(HttpService.SERVICE_PATH + '/employeeNew/getEmployeeDetails', {headers: null})
      .pipe(map(response => response as EmployeeNew[]));
  }

  getEmployee(id : number) : Observable<EmployeeNew>{

    return this.http.get(HttpService.SERVICE_PATH + '/employeeNew/getEmployeeNewDetailsById/'+id, {headers: null})
      .pipe(map(response => response as EmployeeNew));
  }

  /*getAllEmployeeMock() : any{

    /!*return this.http.get(HttpS  ervice.SERVICE_PATH + '/employeeNew/getEmployeeDetails', {headers: null})
      .pipe(map(response => response as EmployeeNew[]));*!/
    let db = this.createDb();
  }*/
}
