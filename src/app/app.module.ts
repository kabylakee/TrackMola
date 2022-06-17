import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HeaderModule} from './shared/components/header/header.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {AppComponent} from './app.component';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, HeaderModule, MatIconModule, MatButtonModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
