import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TASKS_MOCK} from 'src/app/entities/constants/tasks.mock';
import {ITask} from 'src/app/entities/interfaces/task.interface';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	public tasks$: Observable<ITask[]>;

	public getTasks(): Observable<ITask[]> {
		return (this.tasks$ = of(TASKS_MOCK));
	}
}
