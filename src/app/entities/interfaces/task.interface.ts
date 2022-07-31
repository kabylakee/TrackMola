import {Status} from '../enums/status.enum';
import {IProject} from './project.interface';

export interface ITask {
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
}

export interface IReportData {
	date: string;
	tasks: ITask[];
}

export interface IRequest {
	checked: boolean;
	name: string;
	project: IProject;
	period: string;
	paid: boolean;
	approved: boolean;
	notes: string;
}

export type TableDataType = ITask | IRequest;
