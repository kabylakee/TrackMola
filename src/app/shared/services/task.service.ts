import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TASKS_MOCK} from 'src/app/entities/constants/tasks.mock';
import {ITask} from 'src/app/entities/interfaces/task.interface';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	public tasks$: Observable<ITask[]>;

	public getTasks(dateFrom: Date = new Date(0), dateTo: Date = new Date()): Observable<ITask[]> {
		return (this.tasks$ = of(
			TASKS_MOCK.filter((task) => task.date > dateFrom && task.date <= dateTo),
		));
	}
}
