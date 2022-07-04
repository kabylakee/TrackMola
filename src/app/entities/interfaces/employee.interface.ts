import {IProject} from './project.interface';

export interface IEmployee {
	firstName: string;
	secondName: string;
	projects: IProject[];
}
