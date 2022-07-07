import {NgModule} from '@angular/core';
import {ReportFilterComponent} from './report-filter.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations: [ReportFilterComponent],
	imports: [
		CommonModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		FormsModule
	],
	exports: [ReportFilterComponent],
})
export class ReportFilterModule {}
