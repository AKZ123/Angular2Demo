﻿import { Component, OnInit } from '@angular/core';  //p6
import { IEmployee } from './employee';     //p31.4.1
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent implements OnInit {    //p31.4.2

    employee: IEmployee;
    statusMessage: string ='Loading data .Please wait...';

    constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];  //take route parametar value from URL use snapshot.
        //this._employeeService.getEmployeeByCode(empCode).subscribe((employeData) => this.employee = employeData,
        //    (error) => {
        //        this.statusMessage = 'Problem with the server. Please try again after sometime';
        //        console.log(error);
        //    });
        this._employeeService.getEmployeeByCode(empCode).subscribe(
            (employeData) => {
                if (employeData == null) {
                    this.statusMessage = 'Employee with the specified Employee Code does not exist';
                } else {
                    this.employee = employeData
                }
            },
            (error) => {
                this.statusMessage = 'Problem with the server. Please try again after sometime';
                console.log(error);
            });
    }

    //firstName: string = 'Tom';
    //lastName: string = 'Hopkins';
    //gender: string = 'Male';
    //age: number = 20;
    //showDetails: boolean = false;

    //toggelDetails(): void {
    //    this.showDetails = !this.showDetails;
    //}
}