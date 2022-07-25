import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VacationTeamCalendarComponent} from './vacation-team-calendar.component';
import {VacationCalendarItemModule} from '../vacation-calendar-item/vacation-calendar-item.module';
import {CalendarLegendModule} from '../calendar-legend/calendar-legend.module';

@NgModule({
	declarations: [VacationTeamCalendarComponent],
	imports: [CommonModule, VacationCalendarItemModule, CalendarLegendModule],
	exports: [VacationTeamCalendarComponent],
})
export class VacationTeamCalendarModule {}
