import {IProject} from './project.interface';

export interface IVacationRequest {
	checked: boolean;
	name: string;
	project: IProject;
	period: string;
	paid: boolean;
	approved: boolean;
	notes: string;
}
