import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})

export class EmployeeCountComponent {

    selectedRadioButtonVaue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();



    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;
    //all: number = 10;
    //male: number = 5;
    //female: number = 5;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonVaue);
        //console.log(this.selectedRadioButtonVaue);
    }
}