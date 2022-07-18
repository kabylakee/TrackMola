import {VacationRequest} from '../enums/vacation-request.enum';

export interface IVacation {
	dateFrom: Date;
	dateTo: Date;
	dateFromFormat: string;
	dateToFormat: string;
	comments?: string;
	paid?: boolean;
	status: VacationRequest;
}
