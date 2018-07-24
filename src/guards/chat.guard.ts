import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ChatGuard implements CanActivate{
    cookieService: CookieService;
    router: Router;
    constructor(cookieService: CookieService, router: Router){
        this.router = router;
        this.cookieService = cookieService;
    }

    canActivate() {
        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn(): boolean{
        if(this.cookieService.get('nick')) {
            return true;
        } else {
            this.router.navigate(['./']);
            return false;
        }

    }
}