import {TimeStatus} from '../enums/timeStatus.enum';

export interface IReportsDayInfo {
	date: Date;
	taskCount: number;
	total: number;
	overtime: number;
	timeStatus: TimeStatus;
	isVacation: boolean;
	paid: boolean;
}
