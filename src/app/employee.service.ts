import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getemployeeData() {
    let url = 'https://60b5b568fe923b0017c8475e.mockapi.io/api/ang/employee';
    return this.http.get(url);
  }
}
