import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {OVERTIME} from 'src/app/entities/constants/overtime.constants';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {STATUSES} from 'src/app/entities/constants/status.constants';
import {TASKS_MOCK} from 'src/app/entities/constants/tasks.mock';
import {IFilter} from 'src/app/entities/interfaces/filter.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	public tasks$: Observable<ITask[]>;

	public getTasks(
		dateFrom: Date = new Date(0),
		dateTo: Date = new Date(),
		filter: IFilter = {
			projects: [],
			statuses: [],
			overtimes: [],
		},
	): Observable<ITask[]> {
		if (!filter.projects.length) {
			filter.projects = Object.values(PROJECT_MOCK);
		}
		if (!filter.statuses.length) {
			filter.statuses = Object.values(STATUSES);
		}
		if (!filter.overtimes.length) {
			filter.overtimes = Object.values(OVERTIME);
		}

		return (this.tasks$ = of(
			TASKS_MOCK.filter(
				(task) =>
					task.date >= dateFrom &&
					task.date < dateTo &&
					filter.projects.find((project) => task.project.title === project.title) &&
					filter.statuses.find((status) => task.status === status.title) &&
					filter.overtimes.find(
						(overtime) =>
							(task.paid && overtime.title === 'Paid' && task.overtime) ||
							(!task.paid && overtime.title === 'Unpaid' && task.overtime) ||
							(!task.overtime && overtime.title === 'No overtime' && !task.paid),
					),
			),
		));
	}
}
