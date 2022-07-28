import {DepartmentEnum} from '../enums/department.enum';
import {Role} from '../enums/role.enum';
import {IProject} from './project.interface';

export interface IEmployee {
	firstName: string;
	secondName: string;
	projects: IProject[];
	role?: Role;
	image?: string;
	vacationDay?: number;
	department: DepartmentEnum;
}
