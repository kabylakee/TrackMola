import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderModule} from './shared/components/header/header.module';
import { DayTableComponent } from './shared/components/day-table/day-table.component';
@NgModule({
	declarations: [AppComponent, DayTableComponent],
	imports: [BrowserModule, AppRoutingModule, HeaderModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
