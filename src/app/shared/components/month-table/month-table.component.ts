import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TimeStatus } from 'src/app/entities/enums/timeStatus.enum';
import { IReportsDayInfo } from 'src/app/entities/interfaces/reports-day-info.interface';
import { ITask } from 'src/app/entities/interfaces/task.interface';
import { MonthTasksHelper } from '../../helpers/month-tasks.helper';
import { TaskService } from '../../services/task.service';

@Component({
	selector: 'app-month-table',
	templateUrl: './month-table.component.html',
	styleUrls: ['./month-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthTableComponent implements OnInit {
	public dayData: IReportsDayInfo = {
		date: new Date(Date.now() - Math.random() * 1e10),
		taskCount: 2,
		total: 3,
		overtime: 0,
		timeStatus: TimeStatus.Unfinished,
		isVacation: false,
		paid: false,
	};
	public tasks: ITask[];

	constructor(private taskService: TaskService) { }

	ngOnInit(): void {
		this.taskService
			.getTasks(new Date(2022, 6, 1), new Date(2022, 7, 1))
			.subscribe((tasks) => (this.tasks = tasks));
		MonthTasksHelper.taskMapper(this.tasks);
	}
}
