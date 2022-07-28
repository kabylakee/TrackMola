import {VacationRequest} from '../enums/vacation-request.enum';
import {IEmployee} from './employee.interface';

export interface IVacation {
	dateFrom: Date;
	dateTo: Date;
	dateFromFormat?: string;
	dateToFormat?: string;
	comments?: string;
	paid: boolean;
	status: VacationRequest;
	employee: IEmployee;
}
