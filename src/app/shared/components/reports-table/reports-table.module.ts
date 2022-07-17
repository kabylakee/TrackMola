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

import {NoDataModule} from 'src/app/shared/components/no-data/no-data.module';
import {ReportsTableComponent} from './reports-table.component';
import {LinkDialogComponent} from '../link-dialog/link-dialog.component';
import {CdkTableModule} from '@angular/cdk/table';
import {ProjectModule} from '../project/projects.module';

@NgModule({
	declarations: [ReportsTableComponent, LinkDialogComponent],
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
<<<<<<< HEAD
		NoDataModule,
=======
		ProjectModule,
>>>>>>> master
	],
	exports: [ReportsTableComponent],
})
export class ReportsTableModule {}
