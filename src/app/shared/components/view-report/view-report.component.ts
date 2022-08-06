import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MODAL_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {DEFAULT_TIME} from 'src/app/entities/constants/hours.constants';
import {IHours} from 'src/app/entities/interfaces/hours.interface';
import {IManagementRequest, ViewDialogData} from 'src/app/entities/interfaces/request.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {TaskService} from '../../services/task.service';

@Component({
	selector: 'app-view-report',
	templateUrl: './view-report.component.html',
	styleUrls: ['./view-report.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewReportComponent {
	// Table data
	private dataSourse: IManagementRequest;
	public columns: ITableColumn[];
	public tasks: ITask[];

	// Cards
	public sumTime: IHours;

	constructor(
		private dialogRef: MatDialogRef<ViewReportComponent>,
		private taskServise: TaskService,
		@Inject(MAT_DIALOG_DATA) public data: ViewDialogData,
	) {
		this.columns = MODAL_TABLE_CONFIG;
		this.tasks = this.getTasks(
			data.dataSource.name,
			data.dataSource.project.title,
			data.dataSource.weekFirstDay,
		);
		this.getSum();
	}

	private getTasks(name: string, project: string, dateFrom: Date): ITask[] {
		const daysInWeek = 7;
		const dateTo = new Date(
			dateFrom.getFullYear(),
			dateFrom.getMonth(),
			dateFrom.getDate() + daysInWeek,
		);

		let result: ITask[] = [];

		this.taskServise.getTaskFromTo(dateFrom, dateTo).subscribe((tasks) => {
			result = tasks;
		});

		result = result.filter(
			(task) => task.employee?.userName === name && task.project.title === project,
		);

		return result;
	}

	private getSum(): void {
		let sum: IHours = DEFAULT_TIME;
		sum.time = this.tasks.reduce((acc, curr) => acc + curr.time, 0);
		sum.overtime = this.tasks.reduce((acc, curr) => acc + curr.overtime, 0);
		this.sumTime = sum;
	}
}
