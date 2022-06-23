import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HeaderModule} from './shared/components/header/header.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {AppComponent} from './app.component';
import {LeftPanelModule} from './shared/components/left-panel/left-panel.module';
import {DatePickerComponent} from './app/shared/components/date-picker/date-picker.component';

@NgModule({
	declarations: [AppComponent, DatePickerComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HeaderModule,
		MatIconModule,
		MatButtonModule,
		LeftPanelModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
