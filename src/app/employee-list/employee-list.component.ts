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
  ) {
    this.route.params.subscribe((params) => {
      console.log(params);
      // Defaults to 0 if no query param provided.
      try {
        this.userId = params.userId;
        if (this.userId == undefined) {
          this.userId = false;
        }
      } catch {
        this.userId = false;
      }
    });
    this.employee.getemployeeData().subscribe((data: any) => {
      this.allemployee = data.Employees;
    });
  }

  ngOnInit(): void {}

  showDetail($event: any, employee: any) {
    this.userId = employee.userId;
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
