import {Project} from '../classes/project';
import {Status} from '../enums/status.enum';

export interface ITask {
	title: string;
	project: Project;
	status: Status;
	time: number;
	overtime: number;
	paid: boolean;
	link?: string;
}
