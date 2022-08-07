import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import {ICalendarDays} from 'src/app/entities/interfaces/calendar-days.interface';
import {VACATION} from 'src/app/entities/constants/vacation.constant';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {ICalendarMonth} from 'src/app/entities/interfaces/calendar-month.interface';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
	@Input() public calendarMonth: ICalendarMonth;
	@Input() public currentYear: number;
	@Output() public checkCounter = new EventEmitter<number>();

	public weekDays: String[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	public dates: ICalendarDays[] = [];
	private readonly dateCount = 42;
	public vacations: IVacation[] = VACATION;

	ngOnInit(): void {
		const currentDate = new Date(this.currentYear, this.calendarMonth.id, 1);
		const sundayIndex = 6;
		let count = 0;

		const paddingDaysStart = currentDate.getDay() === 0 ? sundayIndex : currentDate.getDay() - 1;
		for (let i = 0; i < this.vacations.length; i++) {
			if (this.vacations[i].paid) {
				count = count + 1;
			}
		}
		this.checkCounter.emit(count);
		for (let i = 0; i < this.dateCount; i++) {
			this.dates.push({
				date: new Date(this.currentYear, this.calendarMonth.id, i - paddingDaysStart + 1),
				disabled: !(
					new Date(this.currentYear, this.calendarMonth.id, i - paddingDaysStart + 1).getMonth() !==
					this.calendarMonth.id
				),
				vacation: false,
				dayOff: false,
				startVacation: false,
				endVacation: false,
				startVacationUnpaid: false,
				endVacationUnpaid: false,
			});
			for (let j = 0; j < this.vacations.length; j++) {
				if (
					this.dates[i].date >= this.vacations[j].dateFrom &&
					this.dates[i].date <= this.vacations[j].dateTo &&
					this.dates[i].disabled
				) {
					if (this.vacations[j].paid) {
						this.dates[i].vacation = true;
					} else this.dates[i].dayOff = true;
				}
				if (+this.dates[i].date === +this.vacations[j].dateFrom && this.dates[i].disabled) {
					if (this.dates[i].vacation) {
						this.dates[i].startVacation = true;
					} else {
						this.dates[i].startVacationUnpaid = true;
					}
				}
				if (+this.dates[i].date === +this.vacations[j].dateTo && this.dates[i].disabled) {
					if (this.dates[i].vacation) {
						this.dates[i].endVacation = true;
					} else {
						this.dates[i].endVacationUnpaid = true;
					}
				}
			}
		}
	}
}
