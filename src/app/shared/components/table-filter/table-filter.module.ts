import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableFilterComponent} from './table-filter.component';
import {ToggleButtonModule} from 'src/app/shared/components/toggle-button/toggle-button.module';
import {DatePickerModule} from 'src/app/shared/components/date-picker/date-picker.module';

@NgModule({
	declarations: [TableFilterComponent],
	imports: [CommonModule, ToggleButtonModule, DatePickerModule],
	exports: [TableFilterComponent],
})
export class TableFilterModule {}
