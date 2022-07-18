import {IEmployee} from './employee.interface';

export interface IProject {
	title: string;
	checked?: boolean;
	color: string;
	percentage?: number;
	employees?: IEmployee[];
	lead?: IEmployee;
}
