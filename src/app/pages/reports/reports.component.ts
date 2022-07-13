import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
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
import {IFilter} from 'src/app/entities/interfaces/filter.interface';
import {IOptionInterface} from '../../entities/interfaces/option.interface';

@Component({
	selector: 'app-reports',
	templateUrl: './reports.component.html',
	styleUrls: ['./reports.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements OnInit {
	@Input() selectedDate: Date = new Date();
	public filters: IFilter;

	public tasks: ITask[] = [];
	public columns: ITableColumn[] = [];

	public monthTasks: ITask[];
	public calendarConfig: IReportsDayInfo[];
	public sumTime: IHours = DEFAULT_TIME;
	public readonly legendItems = Object.values(DayTypeEnum);

	public readonly title =
		RouterPaths.Reports.charAt(0).toUpperCase() + RouterPaths.Reports.slice(1);

	public searchValue: string = '';
	public actionHanding: IOptionInterface;
	public day: Date = new Date(2022, 7, 12);

	constructor(private taskService: TaskService) {}

	public ngOnInit(): void {
		this.getTasks();
		this.getMonthTasks();

		this.columns = DAY_TABLE_CONFIG;

		this.tasks.forEach((t) => (t.checked = false));

		this.calendarConfig = MonthTasksHelper.getCalendarConfig(this.monthTasks, this.selectedDate);
	}

	public onChangeDate(event: Date): void {
		this.day = event;
		this.getTasks();
	}

	private getTasks(): void {
		this.taskService
			.getTasks(new Date(0), new Date(), this.filters)
			.subscribe((tasks) => {this.tasks = tasks.filter((task) => {
        return +task.date === +this.day;
      })});
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

	public getFilters(filters: IFilter): void {
		this.filters = filters;
		this.getTasks();
	}

	public onSearchValueChange(event: string): void {
		this.searchValue = event;
	}

	public onActionHanding(event: IOptionInterface): void {
		this.actionHanding = event;
	}
}
