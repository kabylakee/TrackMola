import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {ReportStatus} from 'src/app/entities/enums/report-status.enum';
import {TimeRateEnum} from 'src/app/entities/enums/time-rate.enum';
import {IManagementRequest} from 'src/app/entities/interfaces/request.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {MonthTasksHelper} from '../helpers/month-tasks.helper';
import {TaskService} from './task.service';

@Injectable({
	providedIn: 'root',
})
export class ManagementRequestsService {
	private requests$: Observable<IManagementRequest[]>;
	private requests: IManagementRequest[] = [];
	private tasks: ITask[];

	constructor(private taskService: TaskService) {
		this.taskService.getTasks().subscribe((tasks) => {
			this.tasks = tasks.filter((task) => task.project.title !== 'Vacation');
		});

		this.tasks.forEach((task) => {
			const currentRequest = this.requests.find(
				(request) =>
					request.name === task.employee?.userName &&
					+request.weekFirstDay ===
						+MonthTasksHelper.getFirstDayOfWeek(MonthTasksHelper.getWeek(task.date), task.date) &&
					request.project.title === task.project.title,
			);
			if (currentRequest) {
				if (task.paid === true) {
					currentRequest.paidOvertime += task.overtime;
				}
				currentRequest.totalHours += task.time;
			} else {
				this.requests.push({
					weekFirstDay: MonthTasksHelper.getFirstDayOfWeek(
						MonthTasksHelper.getWeek(task.date),
						task.date,
					),
					checked: false,
					name: task.employee?.userName!,
					project: task.project,
					expectedHours: TimeRateEnum.FullTime,
					totalHours: task.time,
					paidOvertime: task.paid ? task.overtime : 0,
					status: ReportStatus.None,
					approved: false,
				});
			}
		});
	}

	public getRequests(weekFirstDay: Date): Observable<IManagementRequest[]> {
		return (this.requests$ = of(
			this.requests.filter((request) => +request.weekFirstDay === +weekFirstDay),
		));
	}

	public getExportRequests(
		dateFrom: Date,
		dateTo: Date,
		ctoName: string,
	): Observable<IManagementRequest[]> {
		dateFrom = MonthTasksHelper.getFirstDayOfWeek(MonthTasksHelper.getWeek(dateFrom), dateFrom);
		const cto = EMPLOYEE_MOCK.find((employee) => employee.userName === ctoName)!;
		return (this.requests$ = of(
			this.requests.filter(
				(request) =>
					request.weekFirstDay >= dateFrom &&
					request.weekFirstDay <= dateTo &&
					cto.projects.find((project) => project.title === request.project.title),
			),
		));
	}
}
