import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  //p27.1
import { RouterModule, Routes } from '@angular/router';  //p30.3.1

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';  //p6
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';

import { EmployeeService } from './employee/employee.service';   //p31.6.1
import { UserPreferencesService } from './employee/userPreferences';//p34.3.1

const appRoutes: Routes = [                                //p30.3.2                 
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },  //31.1
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({                                                     //p30.3.3
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent, HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService, UserPreferencesService]     //p31.6.2
})
export class AppModule { }
