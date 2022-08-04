import {Status} from '../enums/status.enum';
import {IProject} from './project.interface';

export interface IVacationRequest {
	checked: boolean;
	name: string;
	project: IProject;
	period: string;
	paid: boolean;
	approved: boolean;
	notes: string;
}

export interface IManagementRequest {
	checked: boolean;
	name: string;
	project: IProject;
	expectedHours: number;
	totalHours: number;
	paidOvertime: number;
	status: Status;
	approved: boolean;
}
