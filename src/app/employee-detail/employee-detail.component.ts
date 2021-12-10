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
  @Input() selectedEmployee: any = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employee: EmployeeService
  ) {}

  ngOnInit(): void {}
}
