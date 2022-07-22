import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthTableComponent} from './month-table.component';
import {ReportsCalendarItemModule} from '../reports-calendar-item/reports-calendar-item.module';
import {CalendarLegendModule} from '../calendar-legend/calendar-legend.module';

@NgModule({
	declarations: [MonthTableComponent],
	imports: [CommonModule, ReportsCalendarItemModule, CalendarLegendModule],
	exports: [MonthTableComponent],
})
export class MonthTableModule {}
