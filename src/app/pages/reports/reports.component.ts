import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DAY_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {IReportsDayInfo} from 'src/app/entities/interfaces/reports-day-info.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TaskService} from 'src/app/shared/services/task.service';
import {MonthTasksHelper} from '../../shared/helpers/month-tasks.helper';
import {IHours} from '../../entities/interfaces/hours.interface';
import {DEFAULT_TIME} from '../../entities/constants/hours.constants';

@Component({
	selector: 'app-reports',
	templateUrl: './reports.component.html',
	styleUrls: ['./reports.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements OnInit {
	@Input() selectedDate: Date = new Date();

	public tasks: ITask[] = [];

	public columns: ITableColumn[] = [];

	public monthTasks: ITask[];
	public calendarConfig: IReportsDayInfo[];
	public sumTime: IHours = DEFAULT_TIME;

	constructor(private taskService: TaskService) {}

	public ngOnInit(): void {
		this.getTasks();
		this.getMonthTasks();

		this.columns = DAY_TABLE_CONFIG;

		this.tasks.forEach((t) => (t.checked = false));

		this.calendarConfig = MonthTasksHelper.getCalendarConfig(this.monthTasks, this.selectedDate);
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
	}

	public updateSumTime(event: IHours): void {
		this.sumTime = {...event};
	}
}
