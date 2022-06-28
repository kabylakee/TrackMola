import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DAY_TABLE_MOCK} from 'src/app/entities/constants/day-columns.mock';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TaskService} from '../../services/task.service';

@Component({
	selector: 'app-day-table',
	templateUrl: './day-table.component.html',
	styleUrls: ['./day-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayTableComponent implements OnInit {
	public tasks: ITask[] = [];

	public columns: ITableColumn[] = [];

	public allChecked: boolean = false;

	constructor(private taskService: TaskService) {}

	public ngOnInit(): void {
		this.getTasks();
		this.columns = DAY_TABLE_MOCK;

		this.tasks.forEach((t) => (t.checked = false));
	}

	// Get all tasks from task service
	private getTasks(): void {
		this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
	}

	// When you click subcheckbox update main checkbox
	public updateAllChecked(): void {
		this.allChecked = this.tasks.filter((t) => t.checked == true).length === this.tasks.length;
	}

	// When you click main checkbox update subcheckboxes
	public setAll(checked: boolean): void {
		this.allChecked = checked;
		if (this.tasks) {
			this.tasks.forEach((t) => (t.checked = checked));
		}
	}
}
