import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  allemployee: any = [];
  employees: any = [];
  selectedEmployee: any = [];
  userId: any = false;

  constructor(
    private employee: EmployeeService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employee.getemployeeData().subscribe((data: any) => {
      this.allemployee = data.Employees;
      /**typcial snapshot won't give the child route params, so
       * need to use firstChild.paramMap
       */
      this.route.firstChild?.paramMap.subscribe((params) => {
        if (params.get('userId')) {
          this.userId = params.get('userId');
          this.allemployee.forEach((emp: any) => {
            if (emp.userId == this.userId) {
              this.selectedEmployee = emp;
            }
          });
        } else {
          this.userId = null;
          this.selectedEmployee = null;
        }
      });
    });
  }

  showDetail($event: any, employee: any) {
    this.userId = employee.userId;
    this.selectedEmployee = employee;
    this.router.navigate(['/employees/' + employee.userId]);
  }

  onSelect(employee: any) {
    this.selectedEmployee = employee;
  }
  openDetails(targetModal: any, employee: any) {
    this.selectedEmployee = employee;
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
  }
}
