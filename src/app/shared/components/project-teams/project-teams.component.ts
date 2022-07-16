import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {IProject} from 'src/app/entities/interfaces/project.interface';

@Component({
	selector: 'app-project-teams',
	templateUrl: './project-teams.component.html',
	styleUrls: ['./project-teams.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTeamsComponent {
	public readonly projects: IProject[] = PROJECT_MOCK;
	public currentProject: IProject = PROJECT_MOCK[0];
}
