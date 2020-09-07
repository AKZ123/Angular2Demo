import { Injectable } from '@angular/core';    //p34.1

@Injectable()
export class UserPreferencesService {
    constructor() {
        console.log("A Instance of Service create.");
    }
    colourPreference: string = 'orange';
}