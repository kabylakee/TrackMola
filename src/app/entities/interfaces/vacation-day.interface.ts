import {VacationDayStatusEnum} from '../enums/vacation-day-status.enum';
import {IEmployee} from './employee.interface';

export interface IVacationDay {
	date: Date;
	paid: boolean;
	dayStatus?: VacationDayStatusEnum;
	employee?: IEmployee;
}
