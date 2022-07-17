import {ChangeDetectionStrategy, Component} from '@angular/core';
import {EMPLOYEE_MOCK} from 'src/app/entities/constants/employee.mock';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {IEmployee} from 'src/app/entities/interfaces/employee.interface';
import {IProject} from 'src/app/entities/interfaces/project.interface';

@Component({
	selector: 'app-project-teams',
	templateUrl: './project-teams.component.html',
	styleUrls: ['./project-teams.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTeamsComponent {
	public projects: IProject[] = PROJECT_MOCK;
	public currentProject: IProject = PROJECT_MOCK[0];

	public employees: IEmployee[] = EMPLOYEE_MOCK;

	constructor() {
		this.getEmployyes(PROJECT_MOCK);
	}

	private getEmployyes(projects: IProject[]): void {
		projects.forEach((project: IProject) => {
			this.employees.forEach((employee: IEmployee) => {
				if (this.checkProject(employee.projects, project)) {
					project.employees?.push(employee);
				}
			});
		});
	}

	private checkProject(projectsArr: IProject[], project: IProject): boolean {
		let result: boolean = false;
		projectsArr.forEach((p) => {
			if (p.title === project.title) {
				result = true;
			}
		});
		return result;
	}

	selectProject(value: Event) {
		this.projects.forEach((project) => {
			if (project.title === `${value}`) {
				this.currentProject = project;
			}
		});
	}
}
