import {Status} from '../enums/status.enum';
// import {IProject} from './project.interface';

export interface ITask {
	// date: Date;
	checked: boolean;
	title: string;
	project: string;
	status: Status;
	time: number;
	overtime: number;
	paid: boolean;
	asanaLink: string;
}
