import {Role} from '../enums/role.enum';
import {IProject} from './project.interface';
import {DepartmentEnum} from '../enums/department.enum';
import {CountryEnum} from '../enums/country.enum';

export interface IEmployee {
	id: number;
	userName: string;
	projects: IProject[];
	role?: Role;
	image?: string;
	vacationDay?: number;
	email: string;
	department: DepartmentEnum;
	office: CountryEnum;
	isNew?: boolean;
	dateStart: Date;
	rate: number;
	salaryReview: Date;
}
