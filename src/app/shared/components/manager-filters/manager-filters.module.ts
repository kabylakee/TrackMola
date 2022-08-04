import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManagerFiltersComponent} from './manager-filters.component';
import {DatePickerModule} from '../date-picker/date-picker.module';
import {InputSearchModule} from '../input-search/input-search.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ProjectSelectModule} from '../project-select/project-select.module';

@NgModule({
	declarations: [ManagerFiltersComponent],
	imports: [
		CommonModule,
		DatePickerModule,
		InputSearchModule,
		MatButtonModule,
		MatIconModule,
		ProjectSelectModule,
	],
	exports: [ManagerFiltersComponent],
})
export class ManagerFiltersModule {}
