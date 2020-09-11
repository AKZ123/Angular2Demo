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
var core_1 = require("@angular/core"); //p6
var router_1 = require("@angular/router"); //p37.2.1
var employee_service_1 = require("./employee.service");
var EmployeeComponent = /** @class */ (function () {
    //                                                                                                      p37.2.2
    function EmployeeComponent(_employeeService, _activatedRoute, _router) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.statusMessage = 'Loading data .Please wait...';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code']; //take route parametar value from URL use snapshot.
        //this._employeeService.getEmployeeByCode(empCode).subscribe((employeData) => this.employee = employeData,
        //    (error) => {
        //        this.statusMessage = 'Problem with the server. Please try again after sometime';
        //        console.log(error);
        //    });
        this._employeeService.getEmployeeByCode(empCode)
            //.subscribe((employeeData) => {
            .then(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = 'Employee with the specified Employee Code does not exist';
            }
            else {
                _this.employee = employeeData;
            }
        } //,
        //(error) => {
        //    this.statusMessage = 'Problem with the server. Please try again after sometime';
        //    //console.log(error);
        //    console.error(error);
        //}
        //);
        ).catch(function (error) {
            _this.statusMessage = 'Problem with the server. Please try again after sometime';
            console.log(error);
        });
    };
    EmployeeComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(['/employees']);
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, router_1.Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map