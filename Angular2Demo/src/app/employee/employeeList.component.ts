import { Component, OnInit } from '@angular/core'; //       p25.4.1
import { IEmployee } from './employee';  //p23
import { EmployeeService } from './employee.service';  //p25.2.1

//employeeList.component
@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]   //p25.2.4
})
export class EmployeeListComponent implements OnInit {  //p25.4.2
    ///employees: any[];
    employees: IEmployee[];  //p25.2.2

    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading data. Please wait...';   //p28.3.1

    //constructor(){
    //this.employees = [
    //    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '9/6/1982' },
    //    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    //    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500, dateOfBirth: '10/24/1980' },
    //    { code: 'emp105', name: 'Kader', gender: 'Male', annualSalary: 9900, dateOfBirth: '01/01/1996' }
    //    ];
    //}

    //p25.2.3
    constructor(private _employeeService: EmployeeService) {
        //this.employees = this._employeeService.getEmployees();
    }

    ngOnInit() {
        //this.employees = this._employeeService.getEmployees();
        //this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData); //p27.3.1
        this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData, (error) => {
            this.statusMessage = 'Problem with the service. Please try again after some time.';
            console.error(error);
        });
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonVaue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonVaue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    //getEmployees(): void {
    //    this.employees = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '9/6/1982' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    //        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500, dateOfBirth: '10/24/1980' },
    //        { code: 'emp105', name: 'Kader', gender: 'Male', annualSalary: 9900, dateOfBirth: '01/01/1996' }
    //    ];
    //}

    //trackByEmpCode(index: number, employee: any): string {
    //    return employee.code;
    //}

}