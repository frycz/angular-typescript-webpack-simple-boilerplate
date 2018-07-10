import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ChatGuard } from './guards/chat.guard';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }  from './app.component';
import { ChatComponent }  from './chat.component';
import { NickComponent }  from './nick.component';

enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'chat', component: ChatComponent, canActivate:[ChatGuard]},
            { path: '', component: NickComponent }
        ], { useHash: true })
    ],
    providers: [ChatGuard, CookieService],
    declarations: [
        AppComponent,
        NickComponent,
        ChatComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
