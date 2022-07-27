import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';
import {WeekDayEnum} from 'src/app/entities/enums/week-day.enum';
import {IAdminCalendarItem} from 'src/app/entities/interfaces/admin-calendar-item.interface';
import {IHoliday} from 'src/app/entities/interfaces/holiday.interface';
import {MonthTasksHelper} from '../../helpers/month-tasks.helper';
import {HolidayService} from '../../services/holiday.service';

@Component({
	selector: 'app-admin-calendar',
	templateUrl: './admin-calendar.component.html',
	styleUrls: ['./admin-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCalendarComponent implements OnInit {
	@Input() date: Date = new Date();

	@Output() dayClicked = new EventEmitter();

	public readonly weekDay = Object.values(WeekDayEnum);
	public readonly weekCount = MonthTasksHelper.getWeek(
		new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0),
	);
	public readonly legendItems = [
		DayTypeEnum.Holiday,
		DayTypeEnum.Weekend,
		DayTypeEnum.WorkDay,
		DayTypeEnum.HalfDay,
	];
	public days: IAdminCalendarItem[] = [];

	private selectedMonth = this.date.getMonth();
	private selectedYear = this.date.getFullYear();
	private firstDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 1);
	private paddingDaysStart =
		this.firstDayOfMonth.getDay() === 0 ? 6 : this.firstDayOfMonth.getDay() - 1; // amount of days from last month
	private sundayIndex = 7;
	private selectedDays = new Set<Date>();
	private holidays: IHoliday[] = [];

	constructor(private holidayService: HolidayService) {}

	public ngOnInit(): void {
		this.holidayService.getHolidays(this.date).subscribe((holidays) => (this.holidays = holidays));
		for (let i = 0; i < this.weekCount * this.sundayIndex; i++) {
			this.days.push({
				date: new Date(this.selectedYear, this.selectedMonth, i - this.paddingDaysStart + 1),
				disabled: !(
					new Date(
						this.selectedYear,
						this.selectedMonth,
						i - this.paddingDaysStart + 1,
					).getFullYear() === this.date.getFullYear() &&
					new Date(
						this.selectedYear,
						this.selectedMonth,
						i - this.paddingDaysStart + 1,
					).getMonth() === this.date.getMonth()
				),
			});
			this.holidays.forEach((holiday) => {
				if (+holiday.date === +this.days[i].date) this.days[i].info = holiday;
			});
		}
	}

	public onSelectDay(day: Date) {
		if (this.selectedDays.has(day)) this.selectedDays.delete(day);
		else this.selectedDays.add(day);
		this.dayClicked.emit(this.selectedDays);
	}
}
