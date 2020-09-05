"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core"); //       p25.4.1
var employee_service_1 = require("./employee.service"); //p25.2.1
//employeeList.component
var EmployeeListComponent = /** @class */ (function () {
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
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeCountRadioButton = 'All';
        this.statusMessage = 'Loading data. Please wait...'; //p28.3.1
        //this.employees = this._employeeService.getEmployees();
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.employees = this._employeeService.getEmployees();
        //this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData); //p27.3.1
        this._employeeService.getEmployees().subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try again after some time.';
            console.error(error);
        });
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonVaue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonVaue;
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
            providers: [employee_service_1.EmployeeService] //p25.2.4
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map