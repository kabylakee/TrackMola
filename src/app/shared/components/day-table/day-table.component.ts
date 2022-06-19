import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TaskService} from '../../services/task.service';

@Component({
	selector: 'app-day-table',
	templateUrl: './day-table.component.html',
	styleUrls: ['./day-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayTableComponent implements OnInit {
	tasks: ITask[] = [];

	displayedColumns: string[] = [
		'checkbox',
		'title',
		'project',
		'status',
		'time',
		'overtime',
		'paid',
		'asanaLink',
		'options',
	];

	allChecked: boolean = false;

	constructor(private taskService: TaskService) {}

	ngOnInit(): void {
		this.getTasks();

		this.tasks.forEach((t) => (t.checked = false));
	}

	// Get all tasks from task service
	getTasks(): void {
		this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
	}

	// When you click subcheckbox update main checkbox
	updateAllChecked(): void {
		this.allChecked = this.tasks.filter((t) => t.checked == true).length === this.tasks.length;
	}

	// When you click main checkbox update subcheckboxes
	setAll(checked: boolean): void {
		this.allChecked = checked;
		if (this.tasks) {
			this.tasks.forEach((t) => (t.checked = checked));
		}
	}
}
