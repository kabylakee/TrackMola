import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

import {UsersTableComponent} from './users-table.component';
import {CdkTableModule} from '@angular/cdk/table';
import {ProjectModule} from '../project/projects.module';
import {NoDataModule} from '../no-data/no-data.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
	declarations: [UsersTableComponent],
	imports: [
		CommonModule,
		MatTableModule,
		MatIconModule,
		MatButtonModule,
		FormsModule,
		MatInputModule,
		MatMenuModule,
		CdkTableModule,
		MatSelectModule,
		ProjectModule,
		NoDataModule,
		MatTooltipModule,
		MatSnackBarModule,
	],
	exports: [UsersTableComponent],
})
export class UsersTableModule {}
