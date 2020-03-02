import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})

//resolver itu biar data udah ada sebelum page load
export class EmployeeResolverService implements Resolve<any>{

  constructor(private es: EmployeeService) { }//es = nama dari kita aja

  resolve(): Observable<Employee[]>{
    return this.es.getEmployees();
  }




  //end
}
