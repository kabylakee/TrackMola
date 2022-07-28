import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminCalendarComponent} from './admin-calendar.component';
import {AdminCalendarItemModule} from '../admin-calendar-item/admin-calendar-item.module';
import {CalendarLegendModule} from '../calendar-legend/calendar-legend.module';

@NgModule({
	declarations: [AdminCalendarComponent],
	imports: [CommonModule, AdminCalendarItemModule, CalendarLegendModule],
	exports: [AdminCalendarComponent],
})
export class AdminCalendarModule {}
