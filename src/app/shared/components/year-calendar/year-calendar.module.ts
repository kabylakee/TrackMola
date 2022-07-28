import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {YearCalendarComponent} from './year-calendar.component';
import {MatNativeDateModule} from '@angular/material/core';
import {CalendarModule} from '../calendar/calendar.module';

@NgModule({
	declarations: [YearCalendarComponent],
	imports: [CommonModule, MatDatepickerModule, MatNativeDateModule, CalendarModule],
	exports: [YearCalendarComponent],
})
export class YearCalendarModule {}
