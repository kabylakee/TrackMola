import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';
import {YEARCALENDAR} from 'src/app/entities/constants/year-calendar.constatnts';
import {IYearCalendar} from 'src/app/entities/interfaces/calendar-year.interface';

@Component({
	selector: 'app-year-calendar',
	templateUrl: './year-calendar.component.html',
	styleUrls: ['./year-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearCalendarComponent implements OnChanges {
	@Input() datePickerDate = new Date();
	public counter = 0;

	ngOnChanges() {
		this.getCount(this.counter);
	}
	getCount(number: number) {
		this.counter = number;
    //TODO create counter
	}
	public calendars: IYearCalendar[] = YEARCALENDAR;
	public legendItems: DayTypeEnum[] = [DayTypeEnum.Vacation, DayTypeEnum.DayOff];
}
