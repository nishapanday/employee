import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  @Input() allemployee: any;
  selectedEmployee: any = null;
  userId: any = false;
  employees: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employee: EmployeeService
  ) {
    this.route.params.subscribe((params) => {
      console.log(params);
      // Defaults to 0 if no query param provided.
      try {
        this.userId = params.userId;
        this.employee.getemployeeData().subscribe((data: any) => {
          this.allemployee = data.Employees;
          this.allemployee.forEach((emp: any) => {
            if (emp.userId == this.userId) {
              this.selectedEmployee = emp;
            }
          });
        });
      } catch {
        this.userId = false;
      }
    });
  }

  ngOnInit(): void {}
}
