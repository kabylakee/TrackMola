import {DepartmentEnum} from '../enums/department.enum';
import {IEmployee} from './employee.interface';

export interface IFinance {
	checked: boolean;
	employee: IEmployee;
	department: DepartmentEnum;
	rate: string;
	percent: string;
	time: string;
	totalTime: string;
	dateStart: string;
	grossSalary: string;
	salaryReview: string;
}
