import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  allemployee: any = [];
  employees: any = [];
  selectedEmployee: any = [];
  userId: any = null;

  constructor(
    private employee: EmployeeService,
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      console.log(params);
      // Defaults to 0 if no query param provided.
      try {
        this.userId = params.userId;
      } catch {
        this.userId = false;
      }
    });
    this.employee.getemployeeData().subscribe((data: any) => {
      this.allemployee = data.Employees;
      console.log(this.allemployee);
    });
  }

  ngOnInit(): void {}

  onSelect(employee: any) {
    this.selectedEmployee = employee;
    console.log(this.selectedEmployee);
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
