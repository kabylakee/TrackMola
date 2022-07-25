import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {COLOR_CONSTANTS} from 'src/app/entities/constants/color.constants';
import {VACATION} from 'src/app/entities/constants/vacation.constant';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';
import {VacationRequest} from 'src/app/entities/enums/vacation-request.enum';
import {WeekDayEnum} from 'src/app/entities/enums/week-day.enum';
import {IVacationWeek} from 'src/app/entities/interfaces/vacation-week.interface';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {MonthTasksHelper} from '../../helpers/month-tasks.helper';

@Component({
	selector: 'app-vacation-team-calendar',
	templateUrl: './vacation-team-calendar.component.html',
	styleUrls: ['./vacation-team-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationTeamCalendarComponent implements OnInit {
	@Input() date: Date = new Date();
	@Input() dataSource: IVacation[];
	@Input() filteredByDepartment = false;

	public readonly weekDay = Object.values(WeekDayEnum);
	public weekCount = MonthTasksHelper.getWeek(
		new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0),
	);
	public weeks: IVacationWeek[] = [];
	public initialOffset = 34;
	public standardOffset = 20;
	public readonly legendItems = [DayTypeEnum.Vacation, DayTypeEnum.DayOff, DayTypeEnum.Unapproved];

	private selectedMonth = this.date.getMonth();
	private selectedYear = this.date.getFullYear();
	private firstDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 1);
	private paddingDaysStart =
		this.firstDayOfMonth.getDay() === 0 ? 6 : this.firstDayOfMonth.getDay() - 1; // amount of days from last month
	private sundayIndex = 7;
	// private readonly vacations = VACATION.filter(
	// 	(vacation) =>
	// 		vacation.status === VacationRequest.Approved &&
	// 		((vacation.dateFrom.getFullYear() === this.date.getFullYear() &&
	// 			vacation.dateFrom.getMonth() === this.date.getMonth()) ||
	// 			(vacation.dateFrom.getFullYear() === this.date.getFullYear() &&
	// 				vacation.dateFrom.getMonth() === this.date.getMonth() - 1) ||
	// 			(vacation.dateFrom.getFullYear() === this.date.getFullYear() &&
	// 				vacation.dateFrom.getMonth() === this.date.getMonth() + 1)),
	// );

	public ngOnInit(): void {
		for (let i = 0, dayCounter = 0; i < this.weekCount; i++) {
			const week: IVacationWeek = {dates: [], vacationInfo: []};
			for (let j = 0; j < this.sundayIndex; j++) {
				week.dates.push(
					new Date(this.selectedYear, this.selectedMonth, dayCounter - this.paddingDaysStart + 1),
				);
				dayCounter++;
			}
			this.weeks.push(week);
		}

		this.weeks.forEach((week) => {
			week.dates.forEach((day) => {
				this.dataSource.forEach((vacation) => {
					if (+day >= +vacation.dateFrom && +day < +vacation.dateTo) {
						if (!week.vacationInfo.includes(vacation)) week.vacationInfo.push(vacation);
					}
				});
			});
		});
	}

	public getLeftOffset(dateFrom: Date, week: IVacationWeek): string {
		const day = dateFrom.getDay() === 0 ? this.sundayIndex : dateFrom.getDay();
		if (week.dates.some((date) => +date === +dateFrom)) return `calc(100% / 7 * ${day - 1})`;
		return '0';
	}

	public getRightOffset(dateFrom: Date, week: IVacationWeek): string {
		const day = dateFrom.getDay() === 0 ? this.sundayIndex : dateFrom.getDay();
		if (week.dates.some((date) => +date === +dateFrom)) return `calc(100% / 7 * ${7 - day + 1})`;
		return '0px';
	}

	public getBorder(date: Date, week: IVacationWeek, vacation: IVacation): string {
		let borderColor = vacation.paid
			? COLOR_CONSTANTS[DayTypeEnum.Holiday].standard
			: COLOR_CONSTANTS[DayTypeEnum.DayOff].standard;
		if (vacation.status === VacationRequest.Unapproved) {
			borderColor = COLOR_CONSTANTS[DayTypeEnum.Unapproved].standard;
		}
		if (week.dates.some((day) => +day === +date)) return `2px solid ${borderColor}`;
		return 'none';
	}

	public getBackgroundColor(vacation: IVacation): string {
		if (vacation.status === VacationRequest.Approved) {
			return vacation.paid
				? COLOR_CONSTANTS[DayTypeEnum.Holiday].transparent
				: COLOR_CONSTANTS[DayTypeEnum.DayOff].transparent;
		}
		return COLOR_CONSTANTS[DayTypeEnum.Unapproved].transparent;
	}
}
