import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagementComponent} from './management.component';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {ManagementRoutingModule} from './management-routing.module';
import {ManagerFiltersModule} from 'src/app/shared/components/manager-filters/manager-filters.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ExportFormComponent} from 'src/app/shared/components/export-form/export-form.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {ReportsTableModule} from 'src/app/shared/components/reports-table/reports-table.module';

@NgModule({
	declarations: [ManagementComponent, ExportFormComponent],
	imports: [
		CommonModule,
		HeaderModule,
		ManagementRoutingModule,
		ManagerFiltersModule,
		MatDialogModule,
		MatIconModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatButtonModule,
		MatSelectModule,
		ReportsTableModule,
	],
})
export class ManagementModule {}
