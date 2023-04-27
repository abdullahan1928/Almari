import { Injectable, NgZone } from '@angular/core';
import { User } from '../../model/user-model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    userData: any; // Save logged in user data
    constructor(
        public router: Router,
        public ngZone: NgZone // NgZone service to remove outside scope warning
    ) {
    }   

}