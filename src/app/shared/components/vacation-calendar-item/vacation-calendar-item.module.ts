import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationCalendarItemComponent} from './vacation-calendar-item.component';

@NgModule({
	declarations: [VacationCalendarItemComponent],
	imports: [CommonModule],
	exports: [VacationCalendarItemComponent],
})
export class VacationCalendarItemModule {}
