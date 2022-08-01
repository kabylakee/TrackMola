import {IProject} from './project.interface';

export interface IRequest {
	checked: boolean;
	name: string;
	project: IProject;
	period: string;
	paid: boolean;
	approved: boolean;
	notes: string;
}
