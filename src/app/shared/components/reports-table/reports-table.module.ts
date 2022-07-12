import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

import {ReportsTableComponent} from './reports-table.component';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
	declarations: [ReportsTableComponent],
	imports: [
		CommonModule,
		MatTableModule,
		MatCheckboxModule,
		MatIconModule,
		MatButtonModule,
		FormsModule,
		MatInputModule,
		MatMenuModule,
		ReactiveFormsModule,
		CdkTableModule,
	],
	exports: [ReportsTableComponent],
})
export class ReportsTableModule {}
