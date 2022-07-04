import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

import {ReportsTableComponent} from './reports-table.component';

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
		MatSelectModule,
	],
	exports: [ReportsTableComponent],
})
export class ReportsTableModule {}
