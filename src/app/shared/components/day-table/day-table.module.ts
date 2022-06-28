import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {TableModule} from '../table/table.module';

import {DayTableComponent} from './day-table.component';

@NgModule({
	declarations: [DayTableComponent],
	imports: [
		CommonModule,
		TableModule,
		MatTableModule,
		MatCheckboxModule,
		FormsModule,
		MatIconModule,
		MatButtonModule,
	],
	exports: [DayTableComponent],
})
export class DayTableModule {}
