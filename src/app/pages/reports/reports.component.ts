import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DAY_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TaskService} from 'src/app/shared/services/task.service';

@Component({
	selector: 'app-reports',
	templateUrl: './reports.component.html',
	styleUrls: ['./reports.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent implements OnInit {
	public tasks: ITask[] = [];
	public columns: ITableColumn[] = [];

	constructor(private taskService: TaskService) {}

	public ngOnInit(): void {
		this.getTasks();
		this.columns = DAY_TABLE_CONFIG;

		this.tasks.forEach((t) => (t.checked = false));
	}

	// Get all tasks from task service
	private getTasks(): void {
		this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
	}
}
