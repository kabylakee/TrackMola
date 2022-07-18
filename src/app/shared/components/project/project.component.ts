import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-project-component',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
	@Input() projectName: string;
	@Input() projectColor: string;

	public getColor(projectColor: string): {[k: string]: string} {
		return {color: `rgb(${projectColor})`, 'background-color': `rgba(${projectColor}, 0.2)`};
	}
}
