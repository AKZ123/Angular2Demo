import { Component, OnInit } from '@angular/core';  //p6
import { IEmployee } from './employee';     //p31.4.1
import { ActivatedRoute, Router } from '@angular/router';  //p37.2.1
import { EmployeeService } from './employee.service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent implements OnInit {    //p31.4.2

    employee: IEmployee;
    statusMessage: string ='Loading data .Please wait...';
    //                                                                                                      p37.2.2
    constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];  //take route parametar value from URL use snapshot.
        //this._employeeService.getEmployeeByCode(empCode).subscribe((employeData) => this.employee = employeData,
        //    (error) => {
        //        this.statusMessage = 'Problem with the server. Please try again after sometime';
        //        console.log(error);
        //    });
        this._employeeService.getEmployeeByCode(empCode)
            //.subscribe((employeeData) => {
            .then((employeeData) => {                   //p38.2.1

                if (employeeData == null) {
                    this.statusMessage = 'Employee with the specified Employee Code does not exist';
                } else {
                    this.employee = employeeData
                }
            } //,
            //(error) => {
            //    this.statusMessage = 'Problem with the server. Please try again after sometime';
            //    //console.log(error);
            //    console.error(error);
            //}
         //);
        ).catch((error) => {                            //38.2.2
            this.statusMessage = 'Problem with the server. Please try again after sometime';
            console.log(error);
        });
    }

    onBackButtonClick(): void {                     //37.2.3
        this._router.navigate(['/employees']);
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