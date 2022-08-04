import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';

@Component({
	selector: 'app-year-calendar',
	templateUrl: './year-calendar.component.html',
	styleUrls: ['./year-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearCalendarComponent {
	@Input() datePickerDate = new Date();
	// public calendars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	public calendars = [
		{
			id: 0,
			monthName: 'January',
		},
		{
			id: 1,
			monthName: 'February',
		},
		{
			id: 2,
			monthName: 'March',
		},
		{
			id: 3,
			monthName: 'April',
		},
		{
			id: 4,
			monthName: 'May',
		},
		{
			id: 5,
			monthName: 'June',
		},
		{
			id: 6,
			monthName: 'July',
		},
		{
			id: 7,
			monthName: 'August',
		},
		{
			id: 8,
			monthName: 'September',
		},
		{
			id: 9,
			monthName: 'October',
		},
		{
			id: 10,
			monthName: 'November',
		},
		{
			id: 11,
			monthName: 'December',
		},
	];
	public legendItems: DayTypeEnum[] = [DayTypeEnum.Vacation, DayTypeEnum.DayOff];
}
