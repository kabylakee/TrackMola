import {IEmployee} from './employee.interface';

export interface IProject {
	title: string;
	checked?: boolean;
	percentage?: number;
	employees?: IEmployee[];
	lead?: IEmployee;
}
