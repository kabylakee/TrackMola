import {ITask} from '../interfaces/task.interface';
import {Status} from '../enums/status.enum';
import {Project} from './project';

export class Task implements ITask {
	title: string;

	project: Project;

	status: Status;

	time: number;

	overtime: number;

	paid: boolean;

	link: string;

	constructor(
		title = '',
		project = '',
		status = Status.InProgress,
		time = 0,
		overtime = 0,
		paid = false,
		link = '',
	) {
		this.title = title;
		this.project = new Project(project);
		this.status = status;
		this.time = time;
		this.overtime = overtime;
		this.paid = paid;
		this.link = link;
	}
}
