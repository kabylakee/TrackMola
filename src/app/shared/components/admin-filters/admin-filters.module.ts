import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminFiltersComponent} from './admin-filters.component';
import {ToggleButtonModule} from 'src/app/shared/components/toggle-button/toggle-button.module';
import {DatePickerModule} from 'src/app/shared/components/date-picker/date-picker.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PageTabsModule} from '../page-tabs/page-tabs.module';
import {SetScheduleComponent} from '../set-schedule/set-schedule.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {InputSearchModule} from '../input-search/input-search.module';
import {ProjectModule} from '../project/projects.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
	declarations: [AdminFiltersComponent, SetScheduleComponent],
	imports: [
		CommonModule,
		ToggleButtonModule,
		DatePickerModule,
		MatButtonModule,
		MatIconModule,
		PageTabsModule,
		MatDialogModule,
		MatRadioModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		InputSearchModule,
		ProjectModule,
		MatSelectModule,
	],
	exports: [AdminFiltersComponent],
})
export class AdminFiltersModule {}
