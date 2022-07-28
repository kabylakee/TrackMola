import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ICalendarDays} from 'src/app/entities/interfaces/calendar-days.interface';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
	@Input() public calendarMonth: number;
	@Input() public currentYear: number;

	public weekDays: String[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	public dates: ICalendarDays[] = [];
	private readonly dateCount = 42;

	ngOnInit(): void {
		const currentDate = new Date(this.currentYear, this.calendarMonth, 1);
		const sundayIndex = 6;

		const paddingDaysStart = currentDate.getDay() === 0 ? sundayIndex : currentDate.getDay() - 1;
		for (let i = 0; i < this.dateCount; i++) {
			this.dates.push({
				date: new Date(this.currentYear, this.calendarMonth, i - paddingDaysStart + 1),
				disabled: !(
					new Date(this.currentYear, this.calendarMonth, i - paddingDaysStart + 1).getMonth() !==
					this.calendarMonth
				),
			});
		}
	}
}
