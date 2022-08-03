import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';
import {WeekDayEnum} from 'src/app/entities/enums/week-day.enum';
import {IAdminCalendarItem} from 'src/app/entities/interfaces/admin-calendar-item.interface';
import {IHoliday} from 'src/app/entities/interfaces/holiday.interface';
import {MonthTasksHelper} from '../../helpers/month-tasks.helper';
import {HolidayService} from '../../services/holiday.service';
import {CountryEnum} from '../../../entities/enums/country.enum';

@Component({
	selector: 'app-admin-calendar',
	templateUrl: './admin-calendar.component.html',
	styleUrls: ['./admin-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCalendarComponent implements OnInit, OnChanges {
	@Input() date: Date = new Date();
	@Input() country: CountryEnum;
	@Input() holiday: IHoliday;

	@Output() dayClicked = new EventEmitter<Set<Date>>();

	public readonly weekDay = Object.values(WeekDayEnum);
	public weekCount = MonthTasksHelper.getWeek(
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
	private readonly sundayIndex = 6;
	private paddingDaysStart =
		this.firstDayOfMonth.getDay() === 0 ? this.sundayIndex : this.firstDayOfMonth.getDay() - 1; // amount of days from last month
	private readonly weekDayCount = 7;
	private selectedDays = new Set<Date>();
	private holidays: IHoliday[] = [];

	constructor(private holidayService: HolidayService) {}

	public ngOnInit(): void {
		this.daysCalc();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.date?.currentValue) {
			this.weekCount = MonthTasksHelper.getWeek(
				new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0),
			);
			this.selectedMonth = this.date.getMonth();
			this.selectedYear = this.date.getFullYear();
			this.firstDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 1);
			this.paddingDaysStart =
				this.firstDayOfMonth.getDay() === 0 ? this.sundayIndex : this.firstDayOfMonth.getDay() - 1;
			this.selectedDays = new Set<Date>();
			this.holidays = [];
			this.daysCalc();
		}
		if (changes.country?.currentValue) {
			this.daysCalc();
		}
	}

	public daysCalc(): void {
		this.holidayService
			.getHolidays(this.country, this.date)
			.subscribe((holidays) => (this.holidays = holidays));
		this.days = [];
		for (let i = 0; i < this.weekCount * this.weekDayCount; i++) {
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

	public onSelectDay(day: Date): void {
		if (this.selectedDays.has(day)) this.selectedDays.delete(day);
		else this.selectedDays.add(day);
		this.dayClicked.emit(this.selectedDays);
	}
}
