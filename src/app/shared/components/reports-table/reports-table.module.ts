import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import {ReportsTableComponent} from './reports-table.component';
import {ProjectComponent} from '../../components/project/project.component';
import {LinkDialogComponent} from '../link-dialog/link-dialog.component';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
	declarations: [ReportsTableComponent, ProjectComponent, LinkDialogComponent],
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
		MatSelectModule,
		MatDialogModule,
	],
	exports: [ReportsTableComponent],
})
export class ReportsTableModule {}
