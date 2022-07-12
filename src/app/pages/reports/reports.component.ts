import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DAY_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TaskService} from 'src/app/shared/services/task.service';
import {IHours} from '../../entities/interfaces/hours.interface';
import {DEFAULT_TIME} from '../../entities/constants/hours.constants';
import {IOptionInterface} from '../../entities/interfaces/option.interface';

@Component({
	selector: 'app-reports',
	templateUrl: './reports.component.html',
	styleUrls: ['./reports.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements OnInit {
	public tasks: ITask[] = [];

	public columns: ITableColumn[] = [];

	public sumTime: IHours = DEFAULT_TIME;

	public searchValue: string = '';

	public actionHanding: IOptionInterface;

	public day: Date = new Date(2022, 7, 12);

	constructor(private taskService: TaskService) {}

	public ngOnInit(): void {
		this.getTasks();

		this.columns = DAY_TABLE_CONFIG;

		this.tasks.forEach((t) => (t.checked = false));
	}

	public onChangeDate(event: Date): void {
		this.day = event;
		this.getTasks();
	}

	private getTasks(): void {
		this.taskService.getTasks().subscribe((tasks) => {
			this.tasks = tasks.filter((task) => {
				return +task.date === +this.day;
			});
		});
	}

	public updateSumTime(event: IHours): void {
		this.sumTime = {...event};
	}

	public onSearchValueChange(event: string): void {
		this.searchValue = event;
	}

	public onActionHanding(event: IOptionInterface): void {
		this.actionHanding = event;
	}
}
