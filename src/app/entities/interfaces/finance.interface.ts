import {DepartmentEnum} from '../enums/department.enum';

export interface IFinance {
	userName: string;
	department: DepartmentEnum;
	rate: string;
	percent: string;
	time: string;
	totalTime: string;
	dateStart: Date;
	salary: string;
	salaryReview: Date;
}
