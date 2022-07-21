import {ITask} from '../interfaces/task.interface';
import {IProject} from '../interfaces/project.interface';
import {Status} from '../enums/status.enum';

export class NewTask implements ITask {
	date: Date;
	checked: boolean;
	title: string;
	project: IProject;
	status: Status;
	time: number;
	overtime: number;
	paid: boolean;
	asanaLink: string;
	bitbucketLink: string;
	newRow?: boolean;
	constructor(
		date: Date,
		checked: boolean,
		title: string,
		project: IProject,
		status: Status,
		time: number,
		overtime: number,
		paid: boolean,
		asanaLink: string,
		bitbucketLink: string,
		newRow?: boolean,
	) {
		this.date = date;
		this.checked = checked;
		this.title = title;
		this.project = project;
		this.status = status;
		this.time = time;
		this.overtime = overtime;
		this.paid = paid;
		this.asanaLink = asanaLink;
		this.bitbucketLink = bitbucketLink;
		this.newRow = newRow;
	}
}
