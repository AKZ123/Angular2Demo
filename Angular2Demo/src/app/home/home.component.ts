import { Component } from '@angular/core';
import { UserPreferencesService } from '../employee/userPreferences';  //p34.2.1

@Component({                                   //p30.1
    template: `<h1>This is the home page</h1>
                <div>
                    Colour Preference : 
                    <input type='text' [(ngModel)]='colour' [style.background]='colour'/>
                </div>`
})

export class HomeComponent {
    //p34.2.2
    //private _userPreferencesService: UserPreferencesService;  
    constructor(private _userPreferencesService: UserPreferencesService) {
        //this._userPreferencesService = new UserPreferencesService();
    }

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }
}