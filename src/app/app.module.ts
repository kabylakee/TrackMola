import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {LeftPanelModule} from './shared/components/left-panel/left-panel.module';
import {HeaderModule} from './shared/components/header/header.module';
import {DayTableModule} from './shared/components/day-table/day-table.module';

import {AppComponent} from './app.component';
import {TableModule} from './shared/components/table/table.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatIconModule,
		MatButtonModule,
		LeftPanelModule,
		HeaderModule,
		DayTableModule,
		TableModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
