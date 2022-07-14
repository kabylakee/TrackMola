import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationHeaderComponent} from './vacation-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DatePickerModule} from 'src/app/shared/components/date-picker/date-picker.module';

@NgModule({
	declarations: [VacationHeaderComponent],
	imports: [CommonModule, MatIconModule, MatButtonModule, DatePickerModule],
	exports: [VacationHeaderComponent],
})
export class VacationHeaderModule {}
