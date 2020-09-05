import { Component } from '@angular/core';   //       p23.3

@Component({                                //         p30.4
    selector: 'my-app',
    template: `<div style="padding:5px">
                    <ul class="nav nav-tabs">
                        <li routerLinkActive="active"><a routerLink="home">Home</a></li>
                        <li routerLinkActive="active"><a routerLink="employees">Employees</a></li>
                    </ul>
                    <router-outlet></router-outlet>
                </div>`
})
export class AppComponent {
    name: string = 'Tom';
}


//@Component({                              //        p23.3
//    selector: 'my-app',
//    template: `<list-employee></list-employee>`
//})
//export class AppComponent {
//    name: string = 'Tom';
//}


////import { Component } from '@angular/core';

////@Component({
////    selector: 'my-app',
////    template: `Your Text : <input type='text' [(ngModel)]='name'/>
////                <br/><br/>
////                <simple [simpleInput]='name'></simple>`
////})
////export class AppComponent {
////    name: string = 'Tom';
////}


//import { Component } from '@angular/core';

//@Component({
//    selector: 'my-app',
//    template: `Name : <input [(ngModel)]='name'/>
//                <br/>
//                You entered : {{name}}
//                <button style='color:red' [style.font-weight]="applyBold ? 'bold' : 'normal'">My Button</button>
//                <br/><br/>
//                <button style='color:red' [style.font-size.px]="fontSize">My Button</button>
//                <br/><br/>
//                <button (click)='onClick()'>Click Me</button>
//                <my-employee></my-employee>`
//})
//export class AppComponent {
//    classToApply: string = 'italicsClass boldClass';
//    name: string = 'Tom';
//    applyBold: boolean = true;
//    fontSize: number = 50;
//    onClick(): void {
//        console.log('Button Clicked');
//    }
//}


//import { Component } from '@angular/core';

//@Component({
//    selector: 'my-app',
//    template: `<div>
                            //Name: <input[value]='name'(input) = 'name=$event.target.value' />
                            //    <br/>
                            //You entered: { { name } }

//                    <h1>Hello {{name}}</h1>

//                    <h1>{{'Page header = ' + name}}</h1>
//                    <h1>{{10 + 20 + 30}}</h1>
//                    <h1>{{name ? name : 'No Header'}}</h1>
//                    <img src='{{imagePath}}'/>
//                    <h1>{{getFullName()}}</h1>
//                    <my-employee></my-employee>
//                    <button [disabled]='isDisabled'>Click me</button>
//                    <button disabled='{{isDisabled}}'>Click me</button>
//                    <div [innerHtml]='badHtml'></div>
//                    <button class='colorClass'>My Button</button>
//                </div>`
//})
//export class AppComponent {
//    name: string = 'Employee Details';
//    imagePath: string = 'https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png';
//    isDisabled: boolean = true;
//    badHtml: string = 'Hello <script>alert("Hacked");</script> world';

//    firstName: string = 'Farhan';
//    lastname: string = 'Kader';

//    getFullName(): string {
//        return this.firstName + ' ' + this.lastname;
//    } 
//}



//import { Component } from '@angular/core';

//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//templateUrl: 'app/app.component.html'        //p5
//})
//export class AppComponent  { name = 'Angular 2! continue'; }
