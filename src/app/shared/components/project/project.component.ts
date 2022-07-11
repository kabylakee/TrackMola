import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-project-component',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
	@Input() projectName: string;
}
