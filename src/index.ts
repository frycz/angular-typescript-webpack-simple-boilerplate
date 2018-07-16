import 'reflect-metadata';
import 'rxjs';
import 'zone.js/dist/zone';

import '@angular/common';
import '@angular/compiler';
import '@angular/core';
import '@angular/forms';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import './css/style.css';

platformBrowserDynamic().bootstrapModule(AppModule);