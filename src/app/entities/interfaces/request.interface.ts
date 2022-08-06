import {ReportStatus} from '../enums/report-status.enum';
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
	weekFirstDay: Date;
	checked: boolean;
	name: string;
	project: IProject;
	expectedHours: number;
	totalHours: number;
	paidOvertime: number;
	status: ReportStatus;
	approved: boolean;
}
