/// <reference path="../typings/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { CookieService } from 'angular2-cookie/services/cookies.service';

// import avatar01 from '../src/assets/img/avatar-1.png';

@Component({
    selector: 'da-chat',
    template:   `<div>
                    <p>Welcome, {{nick}}!</p>
                    <div class="chat-box" #chatbox [scrollTop]="chatbox.scrollHeight">

                            <div *ngFor="let message of messages; let i = index; trackBy: index" class="message-box">
                                <div class="author-avatar-box">
                                <span class="author-avatar {{message.avatar}}" style="display: inline-block; width: 30px; height: 30px;"></span>

                                </div>
                                <div>
                                    <span class="author-nick">{{message.author}}, {{message.date | date: 'hh:mm:ss a'}}</span>
                                    <div class="message-content">{{message.content}}</div>

                                </div>
                            </div>
                    </div>
                    <div class="user-message-box">
                        <input #message [(ngModel)]="usermessage" (keyup.enter)="sendMessage(message.value)" style="width: 400px">
                        <button (click)="sendMessage(message.value)">Send</button>
                    </div>
                </div>`
})

@Injectable()
export class ChatComponent implements OnInit {
    nick: string;
    items: any[];
    itemsCount: any;
    usermessage: any;
    messages: any[];
    sound: any;
    timeoutID: any;
    http: any;

    constructor(cookieservice: CookieService, http: Http) {
        this.http = http;
        this.nick = cookieservice.get('nick');
        this.items = [];
        this.sound = new Audio('../src/assets/sounds/incoming.mp3');
        this.messages = [];
    }

    ngOnInit() {
        this.getComments();

        (function loop(obj) {
            let rand = Math.round(Math.random() * (5000)) + 2000;
            obj.timeoutID = setTimeout(function() {
                obj.writeMessage();
                loop(obj);
            }, rand);
        }(this));
    }

    getComments() {
        let _this = this;
        return _this.http.get('../src/assets/data/messages.json')
            .map(res => res.json())
            .subscribe(function(data){
                _this.items = data;
                _this.itemsCount = _this.items.length;
            },
            function(err) {
                // error log
            });
    }

    writeMessage() {
        let itemID = Math.round(Math.random() * (this.itemsCount - 1));
        this.items[itemID].date = new Date();
        this.messages.push({
            content: this.items[itemID].content,
            author: this.items[itemID].author,
            avatar: this.items[itemID].avatar,
            date: (new Date())
        });
        this.sound.play();
    }

    ngOnDestroy() {
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
        }
    }

    sendMessage(message) {
        if(message !== '') {
            this.usermessage = message;
            this.messages.push({
                content: message,
                author: this.nick,
                avatar: 'user',
                date: (new Date())
            });
            this.usermessage = null;
        }
    }
}