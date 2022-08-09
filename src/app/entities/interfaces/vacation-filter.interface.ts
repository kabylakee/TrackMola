import {IEmployee} from './employee.interface';

export interface IVacationFilter {
	project: string;
	department: string;
}

export interface IPersonalFilter {
	employee: IEmployee;
}
