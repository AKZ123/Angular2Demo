//p25.1
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

import { Http, Response } from '@angular/http';  //p27.2.1
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';  //p28.1
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { } //p27.2.2

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:61104/api/Employees")
            .map((response: Response) => <IEmployee[]>response.json())
            //map operator taking response and transporm it to IEmployee[] array
            .catch(this.handleError);     //p28.2.1
    }


    getEmployeeByCode(empCode: string): Observable<IEmployee> {                //p31.3
        return this._http.get("http://localhost:61104/api/Employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);  
    }

    handleError(error: Response) {       //p28.2.2
        console.error(error);
        return Observable.throw(error);
    }

    //getEmployees(): IEmployee[] {
    //    return [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '9/6/1982' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    //        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500, dateOfBirth: '10/24/1980' },
    //        { code: 'emp105', name: 'Kader', gender: 'Male', annualSalary: 9900, dateOfBirth: '01/01/1996' }
    //    ];
    //}
}