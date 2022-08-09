import {FinanceHeaderComponent} from './finance-header.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DatePickerModule} from 'src/app/shared/components/date-picker/date-picker.module';
import {ProjectModule} from '../project/projects.module';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {InputSearchModule} from '../input-search/input-search.module';
import {ProjectSelectModule} from '../project-select/project-select.module';

@NgModule({
	declarations: [FinanceHeaderComponent],
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule,
		DatePickerModule,
		ProjectModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatFormFieldModule,
		InputSearchModule,
		ProjectSelectModule,
	],
	exports: [FinanceHeaderComponent],
})
export class FinanceHeaderModule {}
