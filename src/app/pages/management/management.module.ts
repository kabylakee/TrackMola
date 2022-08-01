import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagementComponent} from './management.component';
import {HeaderModule} from 'src/app/shared/components/header/header.module';
import {ManagementRoutingModule} from './management-routing.module';
import {ManagerFiltersModule} from 'src/app/shared/components/manager-filters/manager-filters.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ExportFormComponent} from 'src/app/shared/components/export-form/export-form.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	declarations: [ManagementComponent, ExportFormComponent],
	imports: [
		CommonModule,
		HeaderModule,
		ManagementRoutingModule,
		ManagerFiltersModule,
		MatDialogModule,
		MatIconModule,
	],
})
export class ManagementModule {}
