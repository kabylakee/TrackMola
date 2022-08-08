import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationHeaderComponent} from './vacation-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DatePickerModule} from 'src/app/shared/components/date-picker/date-picker.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectModule} from '../project/projects.module';
import {MatSelectModule} from '@angular/material/select';
import {VacationRequestFormComponent} from '../vacation-request-form/vacation-request-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {VacationToggleModule} from '../vacation-toggle/vacation-toggle.module';
import {ProjectSelectModule} from '../project-select/project-select.module';

@NgModule({
	declarations: [VacationHeaderComponent, VacationRequestFormComponent],
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule,
		DatePickerModule,
		ProjectModule,
		FormsModule,
		ReactiveFormsModule,
		MatSelectModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatFormFieldModule,
		MatInputModule,
		MatCheckboxModule,
		VacationToggleModule,
		ProjectSelectModule,
	],
	exports: [VacationHeaderComponent],
	entryComponents: [VacationRequestFormComponent],
})
export class VacationHeaderModule {}
