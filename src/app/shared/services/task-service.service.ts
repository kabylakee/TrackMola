import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class TaskServiceService {
	public tasks: Task[] = [];
}
