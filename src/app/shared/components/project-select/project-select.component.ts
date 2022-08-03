import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {IProject} from 'src/app/entities/interfaces/project.interface';

@Component({
	selector: 'app-project-select',
	templateUrl: './project-select.component.html',
	styleUrls: ['./project-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSelectComponent {
	@Output() changeProject = new EventEmitter<string>();

	public projects: IProject[] = PROJECT_MOCK;
	public currentProject: IProject = PROJECT_MOCK[0];

	public selectProject(value: Event): void {
		this.currentProject = this.projects.find((project) => project.title === `${value}`)!;
		this.changeProject.emit(this.currentProject.title);
	}

	public getColor(): {[k: string]: string} {
		return {
			color: `rgb(${this.currentProject.color})`,
		};
	}
}
