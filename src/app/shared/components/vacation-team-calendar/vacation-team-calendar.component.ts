import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {VACATION} from 'src/app/entities/constants/vacation.constant';
import {WeekDayEnum} from 'src/app/entities/enums/week-day.enum';
import {IVacation} from 'src/app/entities/interfaces/vacation.interface';
import {MonthTasksHelper} from '../../shared/helpers/month-tasks.helper';

@Component({
	selector: 'app-vacation-team-calendar',
	templateUrl: './vacation-team-calendar.component.html',
	styleUrls: ['./vacation-team-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationTeamCalendarComponent implements OnInit {
	@Input() date: Date = new Date();

	public readonly weekDay = Object.values(WeekDayEnum);
	private readonly vacations = VACATION;
	private weeks: IVacation[];
	private lastDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
	private weekCount = MonthTasksHelper.getWeek(this.lastDayOfMonth);

	public ngOnInit(): void {
		for (let i = 0; i < this.weekCount; i++) {}
	}
}
