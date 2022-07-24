import {Role} from '../enums/role.enum';
import {IProject} from './project.interface';

export interface IEmployee {
	firstName: string;
	secondName: string;
	projects: IProject[];
	department: string;
	role?: Role;
	image?: string;
	vacationDay?: number;
}
