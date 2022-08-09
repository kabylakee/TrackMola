import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';
import {ICalendarDays} from 'src/app/entities/interfaces/calendar-days.interface';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {ICalendarMonth} from 'src/app/entities/interfaces/calendar-month.interface';
import {VacationService} from '../../services/vacation.service';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnChanges {
	@Input() public calendarMonth: ICalendarMonth;
	@Input() public currentYear: Date;
	@Input() public vacations: IVacation[];

	@Output() public checkCounter = new EventEmitter<number>();

	public weekDays: String[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	public currentUser: IEmployee = EMPLOYEE_MOCK[0];
	public dates: ICalendarDays[] = [];
	private readonly dateCount = 42;
	get year() {
		return this.currentYear.getFullYear();
	}

	constructor(public vacationService: VacationService) {}

	public drawCalendar() {
		if (this.dates) {
			this.dates = [];
		}
		const currentDate = new Date(this.year, this.calendarMonth.id, 1);
		const sundayIndex = 6;

		const paddingDaysStart = currentDate.getDay() === 0 ? sundayIndex : currentDate.getDay() - 1;

		for (let i = 0; i < this.dateCount; i++) {
			this.dates.push({
				date: new Date(this.year, this.calendarMonth.id, i - paddingDaysStart + 1),
				disabled: !(
					new Date(this.year, this.calendarMonth.id, i - paddingDaysStart + 1).getMonth() !==
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

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.currentYear?.currentValue || changes.vacations?.currentValue) {
			this.drawCalendar();
		}
	}
}
