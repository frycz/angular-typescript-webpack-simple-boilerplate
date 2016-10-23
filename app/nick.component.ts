/// <reference path="../typings/index.d.ts" />

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ChatGuard } from './guards/chat.guard';

import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
    selector: 'da-nick',
    template: ` <div>Choose your nick:
                    <input #name type="text" (keyup.enter)="saveUser(name.value)">
                    <button (click)="saveUser(name.value)">Go!</button>
                </div>`
})

export class NickComponent {
    router: Router;
    cookieService: CookieService;

    constructor(router: Router, guard: ChatGuard, _cookieService: CookieService) {
        this.router = router;
        if(guard.canActivate()) {
            this.router.navigate(['./chat']);
        }

        this.cookieService = _cookieService;
    }

    saveUser(nick) {
        if(nick !== '') {
            this.cookieService.put('nick', nick);
            this.router.navigate(['./chat']);
        }
    }
}