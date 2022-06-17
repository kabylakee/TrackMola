import {IProject} from '../interfaces/project.interface';

export class Project implements IProject {
	title: string;

	constructor(title = '') {
		this.title = title;
	}
}
