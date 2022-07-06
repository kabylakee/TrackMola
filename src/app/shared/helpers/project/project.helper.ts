import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-project-helper',
	templateUrl: './project.helper.html',
	styleUrls: ['./project.helper.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHelperComponent {
	@Input() projectName: string;
}
