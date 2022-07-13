import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DAY_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {DayTypeEnum} from 'src/app/entities/enums/day-type.enum';
import {IReportsDayInfo} from 'src/app/entities/interfaces/reports-day-info.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TaskService} from 'src/app/shared/services/task.service';
import {MonthTasksHelper} from '../../shared/helpers/month-tasks.helper';
import {IHours} from '../../entities/interfaces/hours.interface';
import {DEFAULT_TIME} from '../../entities/constants/hours.constants';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {Period} from 'src/app/entities/enums/period.enum';

@Component({
	selector: 'app-reports',
	templateUrl: './reports.component.html',
	styleUrls: ['./reports.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements OnInit {
	public selectedDate: Date = new Date();
	public period: Period = Period.Day;
	public readonly periods = Period;

	public tasks: ITask[] = [];
	public columns: ITableColumn[] = [];

	public monthTasks: ITask[];
	public calendarConfig: IReportsDayInfo[];
	public sumTime: IHours = DEFAULT_TIME;
	public readonly legendItems = Object.values(DayTypeEnum);

	public readonly title =
		RouterPaths.Reports.charAt(0).toUpperCase() + RouterPaths.Reports.slice(1);

	constructor(private taskService: TaskService) {}

	public ngOnInit(): void {
		this.getTasks();
		this.getMonthTasks();

		this.columns = DAY_TABLE_CONFIG;

		this.tasks.forEach((t) => (t.checked = false));
	}

	// Get all tasks from task service
	private getTasks(): void {
		this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
	}

	private getMonthTasks(): void {
		this.taskService
			.getTasks(
				new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1),
				new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 1),
			)
			.subscribe((tasks) => (this.monthTasks = tasks));
		this.calendarConfig = MonthTasksHelper.getCalendarConfig(this.monthTasks, this.selectedDate);
		this.sumTime = this.calculateMonthSumTime(this.calendarConfig);
	}

	private calculateMonthSumTime(days: IReportsDayInfo[]): IHours {
		const weeks = days.filter((day) => day.isWeekInfo === true);
		return {
			time: weeks.reduce((monthTime, week) => (monthTime += week.total), 0),
			overtime: weeks.reduce((monthOvertime, week) => (monthOvertime += week.overtime), 0),
		};
	}

	public updateSumTime(event: IHours): void {
		this.sumTime = {...event};
	}

	public togglePeriod(period: Period): void {
		this.period = period;
		if (this.period === Period.Month) this.getMonthTasks();
	}

	public onChangeDate(event: Date): void {
		this.selectedDate = event;
		this.getMonthTasks();
	}
}
