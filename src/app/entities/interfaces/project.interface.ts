import {IEmployee} from './employee.interface';

export interface IProject {
	title: string;
	checked?: boolean;
	employees?: IEmployee[];
	lead?: IEmployee;
}
