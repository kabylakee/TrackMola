import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {SELECT_ALL} from '../../../entities/constants/formats.constants';

@Component({
	selector: 'app-project-select',
	templateUrl: './project-select.component.html',
	styleUrls: ['./project-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSelectComponent {
	@Output() changeProject = new EventEmitter<string>();

	public projects: IProject[] = PROJECT_MOCK;
	public currentProject = SELECT_ALL;
	public readonly SELECT_ALL = 'Select All';

	public selectProject(value: Event): void {
		this.currentProject =
			value + '' === SELECT_ALL
				? value + ''
				: this.projects.find((project) => project.title === `${value}`)!.title;
		this.changeProject.emit(this.currentProject);
	}

	public getColor(): {[k: string]: string} {
		const projectColor = this.projects.find((project) => project.color);
		return {
			color: `rgb(${projectColor?.color})`,
		};
	}
}
